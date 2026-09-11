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

    // Blog Page
  } else if (req.url == "/blog") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Page</title>
</head>
<body>
    <nav>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
    </nav>

    <h1>Blog Page</h1>

    <p> Welcome to the Blog Page. This is a simple website created using Node.js and the HTTP module.</p>
</body>
</html>`);

// Contact Page
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Page</title>
</head>
<body>
    <nav>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
    </nav>

    <h1>Contact Page</h1>

    <p> Welcome to the Contact Page. This is a simple website created using Node.js and the HTTP module.</p>
</body>
</html>`);

// About Page
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Page</title>
</head>
<body>
    <nav>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
    </nav>

    <h1>About Page</h1>

    <p> Welcome to the About Page. This is a simple website created using Node.js and the HTTP module.</p>
</body>
</html>`);

// Invalid Route
  } else {
    res.write("404 - Page Not Found");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server is running on 5000");
});
