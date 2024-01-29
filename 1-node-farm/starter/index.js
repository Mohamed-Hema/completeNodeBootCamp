const fs = require("fs");
const http = require("http");
const url = require("url");

//================================================================>
//Files =================================================<
// blocking
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about the avocado ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written!");

// Non Blocking ASYNC
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//   });
//   w;
// });
// console.log("Will read file!");
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is overview");
  } else if (pathName === "/product") {
    res.end("This is product");
  } else {
    res.end("Hello from the server!");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requestes on port 8000");
});
