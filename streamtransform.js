import fs from "fs";
import { Transform } from "stream";

const makeBig = new Transform({
  transform(chunk, encoding, callback) {
    chunk = chunk.toString().toUpperCase();
    this.push(chunk);
    callback();
  },
});

const replaceName = new Transform({
  transform(chunk, encoding, callback) {
    chunk = chunk.toString().replace(/React/g, process.argv[2]);
    this.push(chunk);
    callback();
  },
});

const getUserApproval = new Transform({
  transform(chunk, encoding, callback) {
    console.log(chunk.toString());
    console.log("Is it correct? (y/n)");
    process.stdin.once("data", (data) => {
      if (data.toString().trim().toLowerCase() === "y") {
        this.push(chunk);
        console.log("Thank you for approving!");
        callback();
      } else {
        console.log("Please enter the correct data:");
        process.stdin.once("data", (data) => {
          this.push(data);
          console.log("Thank you for the text");
          callback();
        });
      }
    });
  },
});

const read = fs.createReadStream("README.md");
const write = fs.createWriteStream("readme.log");

write.on("finish", () => {
  console.log("Done");
  process.exit();
});

read.setEncoding("utf8");
read.pipe(replaceName).pipe(getUserApproval).pipe(makeBig).pipe(write);
