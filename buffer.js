import http from "http";
import fs from "fs";
import path from "path";

function getBase64Image(img) {
  const bitmap = fs.readFileSync(img);
  return bitmap.toString("base64");
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<img src='data:image/png;base64,");
  res.write(getBase64Image(path.join(process.cwd(), "public", "b.png")));
  res.end("'/>");
});

server.listen(3000);
