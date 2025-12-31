const fs = require("fs");

const file = __dirname + "/README.md";
const stream = fs.createReadStream(file);

let data = "";
let chunk;
stream.on("readable", () => {
  while ((chunk = stream.read()) !== null) {
    data += chunk;
  }
});

stream.on("end", () => console.log(data));
