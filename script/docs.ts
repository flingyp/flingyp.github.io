import { readdirSync, writeFileSync } from "fs";

import { getAbsolutePath, isFile, isDirectory } from "./utils";

// 1. 扫描 nots/* 所有目录
// 2. 读 nots/*/index.ts 文件内容
// 3. 生成 sidebar 数据结构的数据
// [
// 	{
// 		text: 'Guide',
// 		items: [{ text: 'Get Started', link: '/guide/' }]
// 	},
// 	{
// 		text: 'Core Functions',
// 		items: [{ text: 'useRandomInteger', link: '/useRandomInteger/' }]
// 	}
// ]
// 4. 把生成的数据生成一个TS文件，放在 docs/sideBar.ts 导出去
// 5. 生成顶部栏 和 侧边栏同理

// resultFiles：packages 下所有的文件和文件夹
const packagesAbsolutePath = getAbsolutePath("../notes");
const resultFiles = readdirSync(packagesAbsolutePath);
// 过滤所有文件
const directories = resultFiles.filter((filePath) => {
  const _path = `${packagesAbsolutePath}/${filePath}`;
  if (isFile(_path) && !isDirectory(_path)) {
    return filePath;
  }
});
// 所有目录名称

interface Bar {
  text: string;
  link?: string;
  items?: Bar[];
}

const generateNavBar: Bar[] = [];
directories.forEach((moduleName) => {
  const generateItem: Bar = { text: "", link: "" };
  const noteName = moduleName.match(/(.+).md/)![1] + ".md";
  generateItem.text = `${moduleName.replace(moduleName, noteName)}`;
  generateItem.link = `/notes/${noteName}`;
  generateNavBar.push(generateItem);
});

const parentNotesBar: Bar = { text: "随机文章", items: generateNavBar };

// generate navBar
writeFileSync(
  getAbsolutePath("../.vitepress/NotesNavItems.ts"),
  `export default JSON.parse('${JSON.stringify(parentNotesBar)}')`,
  {
    encoding: "utf8",
  }
);
