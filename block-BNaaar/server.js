let http = require('http');
var url = require('url');
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  var parsedUrl = url.parse(req.url);
  var pathname = parsedUrl.pathname;
  console.log(req.method, req.url, parsedUrl.pathname);

  if (req.method === 'GET' && req.url === '/') {
    res.write('Welcome to Homepage');
    res.end();
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>this is all about NodeJS</h2>');
  } else if (req.method === 'POST' && req.url === '/about') {
    res.setHeader('Content-Type', 'application/json');
    res.end('{message: this is a post request}');
  } else if (req.method === 'GET' && pathname === '/users') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Get users page');
  } else if (req.method === 'POST' && pathname === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.end('Posted for the first time');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h2>Page not found</h2>');
  }
}

server.listen(3000, () => {
  console.log('server listening on port 3000');
});
