const fs = require("fs");
const rs = fs.createReadStream("./files/newReply.txt", { encoding: "utf8" });

const ws = fs.createWriteStream("./files/newLorem.txt");

rs.on("data", (dataChunk) => {
  ws.write(dataChunk);
});
