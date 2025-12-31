import fs from "fs";

fs.open("data.txt", "w+", (err, fd) => {
  if (err) {
    console.log(err);
    return;
  }

  const buffer = Buffer.alloc(100);
  for (let index = 0; index < 100; index++) {
    buffer[index] = Math.floor(Math.random() * 93) + 33;
  }

  fs.write(fd, buffer, 0, 100, (err, written, buffer) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Your new secure password is ${buffer.toString("ascii")}`);
  });

  fs.close(fd, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
});
