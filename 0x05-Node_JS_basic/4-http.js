const http = require("http");

const app = http.createServer((_, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Holberton School!");
});
app.listen(1245, "localhost");

module.exports = app;