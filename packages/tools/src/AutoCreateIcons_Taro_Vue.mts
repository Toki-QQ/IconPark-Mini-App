// 请使用Node.js去运行AutoCreateIcons.cjs以自动化创建单个的图标组件
// Please use Node.js to run AutoCreateIcons.cjs why to create single icon component automatically.

// 导入IconPark的图标列表
import IconsMap from "@icon-park/svg/icons.json" assert { type: "json" };

// 导入fs
import { readdirSync } from "fs";

// 导入String tool
import { toPascalCase } from "./String.mjs";

// 导入Icon tool
import { createTaroVueIconFile, addExportToMapFile } from "./Icon.mjs";

// 单个图标路径
const ICON_DIR = "../../taro_vue/src/icons";
const MAP_FILE_PATH = "../../taro_vue/src/map.ts";

// 获取已经创建好了的icon文件
let createdIconFiles: string[] = readdirSync(ICON_DIR);

// 遍历IconPark图标数据
IconsMap.map((item) => {
  // 转换json内的name格式
  const iconName = toPascalCase(item.name);

  // 判断是否已经创建了该图标的文件，如果没有，则创建文件
  if (!createdIconFiles.includes(iconName)) {
    // 判断创建图标文件是否成功，并提示
    createTaroVueIconFile(ICON_DIR, iconName);

    // 添加导出到Map文件，并提示
    addExportToMapFile(MAP_FILE_PATH, iconName);
  }
});
