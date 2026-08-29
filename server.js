const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.url === "/" || req.url === "/home") {
    const filePath = path.join(__dirname, "page", "home.html");
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.writeHead(500, {
          "content-type": "text/html",
        });
        res.end("<h1>500 - Internal Server Error</h1>");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      res.end(data);
    });
  } else if (req.url === "/about") {
    const filePath = path.join(__dirname, "page", "about.html");
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.writeHead(500, {
          "content-type": "text/html",
        });
        res.end("<h1>500 - Internal Server Error</h1>");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      res.end(data);
    });
  } else if (req.url === "/contact") {
    const filePath = path.join(__dirname, "page", "contact.html");
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.writeHead(500, {
          "content-type": "text/html",
        });
        res.end("<h1>500 - Internal Server Error</h1>");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      res.end(data);
    });
  } else if (req.url === "/style.css") {
    const filePath = path.join(__dirname, "page", "style.css");

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading CSS:", err);

        res.writeHead(500, {
          "Content-Type": "text/plain",
        });

        res.end("500 - Internal Server Error");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/css",
      });

      res.end(data);
    });
  } else {
    const filePath = path.join(__dirname, "page", "404.html");
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.writeHead(500, {
          "content-type": "text/html",
        });
        res.end("<h1>500 - Internal Server Error</h1>");
        return;
      }

      res.writeHead(404, {
        "Content-Type": "text/html",
      });

      res.end(data);
    });
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
