import http from "http";
import { promises as fs } from "fs";

const app = http.createServer();
app.on("request", async (req, res) => {
  const body = await fs.readFile("./README.md");
  res.end(body);
});

app.listen(3000);
console.log("Server running at port 3000");
