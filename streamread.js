import { Stream } from "stream";

const stream = new Stream.Readable();
stream.push("Hello, world");
stream.push(null);
stream.pipe(process.stdout);
