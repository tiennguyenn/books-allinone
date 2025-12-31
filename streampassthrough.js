import stream from "stream";
import fs from "fs";

const pth = stream.PassThrough();
const read = fs.createReadStream("README.md");
const write = fs.createWriteStream("readme.log");

pth.on("data", (chunk) => console.log(chunk.length));

read.setEncoding("utf8");
read.pipe(pth).pipe(write);
