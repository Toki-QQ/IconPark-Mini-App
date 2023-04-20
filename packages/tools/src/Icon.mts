import { writeFileSync, readFileSync, statSync, createWriteStream } from "fs";

// IconPark package路径
const ICON_PARK_DIR = "../../../node_modules/@icon-park/svg/es/icons";

// 创建taro_vue的图标文件
export const createTaroVueIconFile = (
  iconFileDir: string,
  iconName: string
): boolean => {
  // 获取@icon-park内对应图标的svg部分
  let iconSvgContent: string = getIconParkSvgContent(iconName);

  // 图标文件生成模板
  const iconFileContent = `import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const Icon${iconName}: IconComponent = createIcon("${iconName}", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return ${iconSvgContent};

});

export default Icon${iconName};
`;

  // 将图标内容写入图标文件
  let createFileState = writeContentIntoIconFile(
    iconFileDir,
    iconName,
    iconFileContent
  );

  return createFileState;
};

// 写入图标文件方法
function writeContentIntoIconFile(
  iconFileDir: string,
  iconName: string,
  iconFileContent: string
): boolean {
  // 写入文件
  writeFileSync(iconFileDir + `/${iconName}.ts`, iconFileContent);

  // 文件信息变量
  let iconFileSize: number = 0;

  // 读取图标文件大小判断是否生成成功
  let iconFileStat = statSync(iconFileDir + `/${iconName}.ts`);
  iconFileSize = iconFileStat.size;

  // 输出相应的提示
  if (iconFileSize > 0) {
    console.log(`Created ${iconName} file successfully!`);
    console.log("");
  } else {
    console.log(`Created ${iconName} file failingly!`);
    console.log("");
  }

  return iconFileSize > 0;
}

// 添加导出到map.ts
export const addExportToMapFile = (
  indexFile: string,
  iconName: string
): boolean => {
  // 创建写入流
  const writeStream = createWriteStream(indexFile, { flags: "a" });

  // 写入到文件
  writeStream.write(
    `export { default as ${iconName} } from "./icons/${iconName}";\n`
  );
  writeStream.end();

  // 写入状况变量
  let writeStreamResult: boolean = false;

  // 监听写入状况
  writeStream.on("finish", () => {
    console.log(`Added ${iconName} export to map file successfully!`);
    console.log("");
    writeStreamResult = true;
  });

  writeStream.on("error", () => {
    console.log(`Added ${iconName} export to map file failingly!`);
    console.log("");
    writeStreamResult = false;
  });

  return writeStreamResult;
};

// 获取IconPark内对应图标的svg部分
function getIconParkSvgContent(iconName: string): string {
  // 读取@icon-park对应文件
  const iconFile = readFileSync(`${ICON_PARK_DIR}/${iconName}.js`, "utf-8");

  // 字符串截取，截取出对应的svg文段
  const iconSvgContent = iconFile.substring(
    iconFile.indexOf("<?xml") - 1,
    iconFile.lastIndexOf("svg>") + 5
  );

  return iconSvgContent;
}
