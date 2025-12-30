const fs = require("fs");

const file = __dirname + "/README.md";
const book = fs.createReadStream(file);

book.pipe(process.stdout);
