const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.env.PORT, 10) || 3000;

console.log('PORT env:', process.env.PORT);
console.log('Using port:', PORT);

// Pre-load the HTML file
const indexPath = path.join(__dirname, 'index.html');
const INDEX = fs.readFileSync(indexPath);
console.log('index.html loaded, size:', INDEX.length);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(INDEX);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('Server running on 0.0.0.0:' + PORT);
});

server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});
