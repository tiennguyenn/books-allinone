const fs = require("fs");

const file = process.cwd() + "/README.md";
const stream = fs.createReadStream(file);

stream.on("data", (chunk) => console.log(chunk.toString()));
stream.on("end", () => console.log("End"));
stream.on("error", (error) => console.log(error));
