let http = require('http');
let fs = require('fs');

var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/file') {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./node.html', (err, content) => {
      if (err) {
        console.log(err);
      }
      res.end(content);
    });
  } else if (req.method === 'GET' && req.url === '/stream') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h2>Page not found</h2>');
  }
}

server.listen(5555, () => {
  console.log('server is listening on port 5555');
});
