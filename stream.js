import http from "http";
import { promises as fs } from "fs";

const app = http.createServer();
app.on("request", async (req, res) => {
  const file = process.cwd() + "/README.md";
  const body = await fs.readFile(file);
  res.end(body);
});

app.listen(3000);
console.log("Server running at port 3000");
