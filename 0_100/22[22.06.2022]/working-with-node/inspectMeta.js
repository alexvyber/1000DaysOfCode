import * as fs from "node:fs";
import * as path from "node:path";

const fileName = process.argv[2];

const printMetadata = (file) => console.log(fs.statSync(file));
const byteSize = (file) => fs.statSync(file).size;
try {
  printMetadata(path.join(process.cwd(), fileName));
  console.log(byteSize(path.join(process.cwd(), fileName)) / 1000, "kb");
} catch (e) {
  console.error(e);
}
