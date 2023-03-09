//FS . module Async . Blocking
//in this Asynchronous method .  JS does not read this file line by line .

const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/sync.txt",
      `Here is the result : ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
