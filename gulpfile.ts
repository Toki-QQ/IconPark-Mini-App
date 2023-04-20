const { src, dest, parallel } = require("gulp");
const ts = require("gulp-typescript");
const replace = require("gulp-replace");
const merge = require("merge2");
const gulp = require("gulp");
const uglify = require("gulp-uglify");
const rollup = require("rollup");
const rollupTypescript = require("@rollup/plugin-typescript");
const rollupNodeResolve = require("@rollup/plugin-node-resolve");
const rollupCommonJS = require("@rollup/plugin-commonjs");

const { resolve } = require("path");

// 引入tsconfig
const configTaroVue = require("./packages/taro_vue/tsconfig.json");

// 定义TS_CONFIG类型
interface TsConfig {
  [key: string]: any;
}

const TS_CONFIG_MAP: TsConfig = {
  taro_vue: configTaroVue,
};

// 创建任务
function createBuildTask(name: "taro_vue" | "weapp"): string {
  const CWD = resolve("./packages/", name);

  // 处理vendor
  gulp.task(`build-script-vendor-${name}`, async () => {
    // 获取src/runtime下的vendor.ts文件
    const bundle = await rollup.rollup({
      input: `./packages/${name}/src/runtime/vendor.ts`,
      plugins: [
        rollupTypescript({
          module: "es2015",
          declaration: true,
          declarationDir: `./packages/${name}/lib/runtime/`,
          outDir: `./packages/${name}/lib/runtime/`,
          rootDir: `./packages/${name}/src/runtime/`,
          removeComments: true,
          emitDeclarationOnly: true,
          include: [
            `./packages/${name}/src/runtime/vendor.ts`,
            `./packages/${name}/src/icons/*.ts`,
          ],
        }),
        rollupCommonJS(),
        rollupNodeResolve(),
      ],
      external: ["vue"],
    });

    await bundle.write({
      file: `./packages/${name}/lib/runtime/vendor.js`,
      format: "es",
      name: "vendor",
    });
  });

  // 处理runtime
  gulp.task(`build-script-runtime-${name}`, () => {
    // 获取src/runtime下的index.ts入口文件
    const result = gulp
      .src(["src/runtime/index.ts"], {
        cwd: CWD,
      })
      .pipe(ts(TS_CONFIG_MAP[name].compilerOptions));

    // js处理
    let jsResultStream = result.js;

    // ts处理
    let dtsResultStream = result.dts;

    return merge([
      jsResultStream.pipe(gulp.dest(CWD + "/lib/runtime")),
      dtsResultStream.pipe(gulp.dest(CWD + "/lib/runtime")),
    ]);
  });

  // 处理icons
  gulp.task(`build-script-icons-${name}`, () => {
    // 获取src/icons下的所有图标ts和tsx文件
    const result = gulp
      .src(["src/icons/*.ts", "src/icons/*.tsx"], {
        cwd: CWD,
      })
      .pipe(ts(TS_CONFIG_MAP[name].compilerOptions));

    // js处理
    let jsResultStream = result.js;

    // ts处理
    let dtsResultStream = result.dts;

    return merge([
      jsResultStream.pipe(gulp.dest(CWD + "/lib/icons")),
      dtsResultStream.pipe(gulp.dest(CWD + "/lib/icons")),
    ]);
  });

  // 处理入口文件
  gulp.task(`build-script-src-${name}`, () => {
    // 获取src目录下的所有ts和tsx文件
    const result = gulp
      .src(["src/*.ts", "src/*.tsx"], {
        cwd: CWD,
      })
      .pipe(ts(TS_CONFIG_MAP[name].compilerOptions));

    // js处理
    let jsResultStream = result.js;

    // ts处理
    let dtsResultStream = result.dts;

    return merge([
      jsResultStream.pipe(gulp.dest(CWD + "/lib")),
      dtsResultStream.pipe(gulp.dest(CWD + "/lib")),
    ]);
  });

  // 将上述任务添加到待处理人物数组
  const tasks = [
    `build-script-vendor-${name}`,
    `build-script-runtime-${name}`,
    `build-script-icons-${name}`,
    `build-script-src-${name}`,
  ];

  // 执行任务
  gulp.task(`build-${name}`, gulp.parallel(tasks));

  return `build-${name}`;
}

// 执行任务
gulp.task("default", gulp.parallel(createBuildTask("taro_vue")));
