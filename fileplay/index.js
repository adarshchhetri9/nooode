const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "lorem.txt"),
      "utf8"
    );
    console.log(data);

    await fsPromises.unlink(path.join(__dirname, "files", "lorem.txt"));

    await fsPromises.writeFile(
      path.join(__dirname, "files", "reply.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      `\nthis is new \n\n${data}`
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "reply.txt"),
      path.join(__dirname, "files", "newReply.txt")
    );
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// fs.readFile(path.join(__dirname, "files", "lorem.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   const da = data.toString();

// });

process.on("uncaughtException", (err) => {
  console.log(`there was an uncaught error ${err}`);
  process.exit(1);
});

// fsPromises.appendFile(
//     path.join(__dirname, "files", "reply.txt"),
//     `\n\n${data}`,
//     (err) => {
//       if (err) throw err;
//       console.log("rewrite completed");
//     }
//   );
//   fsPromises.rename(
//     path.join(__dirname, "files", "reply.txt"),
//     path.join(__dirname, "files", "newReply.txt"),
//     (err) => {
//       if (err) throw err;
//       console.log("rewrite completed");
//     }
//   );
