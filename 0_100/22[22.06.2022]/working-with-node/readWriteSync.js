const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "static/file.txt");

const content = fs.readFileSync(filePath, "utf8");

console.log("Content:", content);
console.log("Uppercase:", content.toUpperCase());

fs.writeFileSync(
  path.join(process.cwd(), "static/newFile.txt"),
  content.toUpperCase()
);
console.log(
  "newFile content:",
  fs.readFileSync(path.join(process.cwd(), "static/newFile.txt"), "utf8")
);
