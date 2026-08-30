const http = require("http"); // create variable for accessing http module
const fs = require("fs"); // similarly for fs module
const path = require("path"); // and for path module

const PORT = 3000; // run on port 3000

// made function for code reusability for readFile
// html and css both kind of file will read by this function bu adding parameter like file name, statusCode and ContentType and response to respond that function to display outcome

const fetchFile = (
  res,
  fileName,
  statuscode = 200,
  contentType = "text/html",
) => {
  // for path of file
  const filePath = path.join(__dirname, "page", fileName);

  // fs module read file that is located on filePath in utf-8
  // fs.readFile() does not stop the server while file is being read, after that callback function is executed wthe two values
  // err containsinfo about error if file could not been read and data contains the file content if radind is successsful
  fs.readFile(filePath, "utf-8", (err, data) => {
    // if there is error on reading, it response with 500 status code
    if (err) {
      console.error("Error reading file:", err);
      res.writeHead(500, {
        "content-type": "text/html",
      });
      // and display this tage
      res.end("<h1>500 - Internal Server Error</h1>");
      return;
    }
    // data is read successfully, it return 200 stutus code and content-type based on file
    res.writeHead(statuscode, {
      "Content-Type": contentType,
    });
    // data is sent in response
    res.end(data);
  });
};

// creating server with help of http module
const server = http.createServer((req, res) => {
  // custome devtool url remove for this project
  if (req.url !== "/.well-known/appspecific/com.chrome.devtools.json") {
    // to print method and url in terminal
    console.log(`${req.method} ${req.url}`);
  }

  if (req.url === "/" || req.url === "/home") {
    fetchFile(res, "home.html");

    // const filePath = path.join(__dirname, "page", "home.html");
    // fs.readFile(filePath, "utf-8", (err, data) => {
    //   if (err) {
    //     console.error("Error reading file:", err);
    //     res.writeHead(500, {
    //       "content-type": "text/html",
    //     });
    //     res.end("<h1>500 - Internal Server Error</h1>");
    //     return;
    //   }

    //   res.writeHead(200, {
    //     "Content-Type": "text/html",
    //   });

    //   res.end(data);
    // });
  } else if (req.url === "/about") {
    fetchFile(res, "about.html");

    // const filePath = path.join(__dirname, "page", "about.html");
    // fs.readFile(filePath, "utf-8", (err, data) => {
    //   if (err) {
    //     console.error("Error reading file:", err);
    //     res.writeHead(500, {
    //       "content-type": "text/html",
    //     });
    //     res.end("<h1>500 - Internal Server Error</h1>");
    //     return;
    //   }
    //   res.writeHead(200, {
    //     "Content-Type": "text/html",
    //   });
    //   res.end(data);
    // });
  } else if (req.url === "/contact") {
    fetchFile(res, "contact.html");

    // const filePath = path.join(__dirname, "page", "contact.html");
    // fs.readFile(filePath, "utf-8", (err, data) => {
    //   if (err) {
    //     console.error("Error reading file:", err);
    //     res.writeHead(500, {
    //       "content-type": "text/html",
    //     });
    //     res.end("<h1>500 - Internal Server Error</h1>");
    //     return;
    //   }
    //   res.writeHead(200, {
    //     "Content-Type": "text/html",
    //   });
    //   res.end(data);
    // });
  } else if (req.url === "/style.css") {
    fetchFile(res, "style.css", 200, "text/css");

    // const filePath = path.join(__dirname, "page", "style.css");
    // fs.readFile(filePath, "utf-8", (err, data) => {
    //   if (err) {
    //     console.error("Error reading CSS:", err);

    //     res.writeHead(500, {
    //       "Content-Type": "text/plain",
    //     });

    //     res.end("500 - Internal Server Error");
    //     return;
    //   }

    //   res.writeHead(200, {
    //     "Content-Type": "text/css",
    //   });

    //   res.end(data);
    // });
  } else {
    const filePath = path.join(__dirname, "page", "404.html");
    fetchFile(res, "404.html");

    // fs.readFile(filePath, "utf-8", (err, data) => {
    //   if (err) {
    //     console.error("Error reading file:", err);
    //     res.writeHead(500, {
    //       "content-type": "text/html",
    //     });
    //     res.end("<h1>500 - Internal Server Error</h1>");
    //     return;
    //   }

    //   res.writeHead(404, {
    //     "Content-Type": "text/html",
    //   });

    //   res.end(data);
    // });
  }
});

// Start the server on PORT=3000
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
