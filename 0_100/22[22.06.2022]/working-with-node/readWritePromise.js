import * as fs from "node:fs/promises";
import * as path from "node:path";

const filePath = path.join(process.cwd(), "static/file.txt");

const run = async () => {
  try {
    const content = await fs.readFile(filePath, "utf8");
    console.log("Content:", content);
  } catch (e) {
    console.error(e);
  }
};

run();
