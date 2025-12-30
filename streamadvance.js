import http from "http";
import fs from "fs";

const app = http.createServer();
app.on("request", (_, res) => {
  const book = fs.createReadStream("./README.md");
  book.pipe(res);
});
app.listen(3000);
