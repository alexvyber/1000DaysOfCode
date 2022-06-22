const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "static/file.txt");
const wrongFilePath = path.join(process.cwd(), "static/WRONG.txt");

const handleRead = (err, data) => {
  err ? console.error(err) : console.log("Here is you stuff:", data);
  return "SHIT";
};

fs.readFile(wrongFilePath, "utf8", handleRead);
fs.readFile(filePath, "utf8", handleRead);
