import http from "http";
import fs from "fs";

const server = http.createServer();
server.on("request", (_, res) => {
  const book = fs.createReadStream("./README.md");
  res.writeHead(200, { "content-type": "text/plain" });
  book.on("data", (chunk) => {
    console.log("chunk received");
    console.log(chunk.toString());
    res.write(chunk);
  });
  book.on("end", () => res.end());
});
server.listen(3000);
