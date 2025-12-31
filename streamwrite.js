import fs from "fs";
import path from "path";

const file = path.join(process.cwd(), "README.md");
const read = fs.createReadStream(file);
const write = fs.createWriteStream("readme.txt");

read.on("data", (chunk) => {
  write.write(chunk);
});
