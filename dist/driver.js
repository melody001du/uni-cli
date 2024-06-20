const path = require("path");

// 获取项目根目录
const rootDir = path.resolve(process.cwd());
console.log("Project root directory:", rootDir, process.cwd());

// 使用相对路径
const someFilePath = path.join(rootDir, "/some-directory", "some-file.txt");
console.log("Some file path:", someFilePath);
