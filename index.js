const http = require("http");
const server = http.createServer((req, res) => {
  // Homepage
  if (req.url == "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
</head>
<body>
    <nav>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
    </nav>

    <h1>Home Page</h1>

    <p> Welcome to the Home Page. This is a simple website created using Node.js and the HTTP module.</p>
</body>
</html>
    `);
  }
});

server.listen(5000, () => {
  console.log("Server is running on 5000");
});
