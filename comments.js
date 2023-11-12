// Create web server
const http = require('http');

// Define server hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Start server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
