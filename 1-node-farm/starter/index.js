const fs = require("fs");
const http = require("http");
const url = require("url");
const path = require("path"); // Add this line to import the 'path' module
const replaceTemplate = require("./modules/replaceTemplate");

const tempOverview = fs.readFileSync(
  path.join(__dirname, "templates/template-overview.html"),
  "utf-8"
);
const tempCard = fs.readFileSync(
  path.join(__dirname, "templates/template-card.html"),
  "utf-8"
);
const tempProduct = fs.readFileSync(
  path.join(__dirname, "templates/template-product.html"),
  "utf-8"
);

const data = fs.readFileSync(
  path.join(__dirname, "dev-data/data.json"),
  "utf-8"
);
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  //overviewPage
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    const cardsHTML = dataObj.map((el) => replaceTemplate(tempCard, el));
    console.log(cardsHTML);

    res.end(tempOverview);

    //Product Page
  } else if (pathName === "/product") {
    res.end("This is product");

    //API
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);

    //Not Found
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
});
