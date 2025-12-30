import { Stream } from "stream";

const stream = new Stream.Readable({
  read(size) {
    const count = process.argv[2] || 10;
    for (let index = 0; index < count; index++) {
      stream.push(index.toString());
    }
    stream.push(null);
  },
});

stream.on("data", (chunk) => {
  console.log(chunk.toString());
});

stream.on("end", () => {
  console.log("Done");
});
