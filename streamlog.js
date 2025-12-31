import http from "http";
import fs from "fs";
import path from "path";

const file = path.join(process.cwd(), "stream.log");
const logStream = fs.createWriteStream(file);

const log = async (message) => {
  await logStream.write(message);
};

const server = http.createServer((req, res) => {
  const message = `${new Date().toString()} ${req.method} ${req.url} ${
    req.headers["user-agent"]
  }`;
  log(message)
    .then(() => {
      res.writeHead(200, { "content-type": "text/html" });
      res.end("<h1>Dashboard</h1>");
    })
    .catch((error) => console.log(error));
});

server.listen(3000);
