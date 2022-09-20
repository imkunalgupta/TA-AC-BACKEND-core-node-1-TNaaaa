var http = require('http');
let server = http.createServer(handleRequest);
var fs = require('fs');
var url = require('url');
/*
let server = http
  .createServer((request, response) => {
    console.log(request, response);
    response.end('Welcome');
  })
  .listen(5000, 'localhost');
*/

/*

function handleRequest(req, res) {
  res.end('My first server in NodeJS');
}
server.listen(5100);

*/

/*
function handleRequest(req, res) {
  console.log(req.headers);
  res.end(req.headers['user-agent']);
}
server.listen(5555);
*/

/*
function handleRequest(req, res) {
  console.log(req.method, req.url);
  res.end(req.method + req.url);
}
server.listen(5566);
*/

/*
function handleRequest(req, res) {
  res.end(JSON.stringify(req.headers));
}
server.listen(7000, () => {
  console.log('Server listening on port 7000');
});

*/

/*
function handleRequest(req, res) {
  res.statusCode = 202;
  res.end(JSON.stringify(req.headers));
}
server.listen(3333, () => {
  console.log('Server listening on port 3333');
});

*/

/*
function handleRequest(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h3>Welcome to altcampus</h3>`);
}
server.listen(8000, () => {
  console.log('Server listening on port 8000');
});
*/
/*
function handleRequest(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h3>Welcome to altcampus</h3>`);
}
server.listen(8000, () => {
  console.log('Server listening on port 8000');
});
*/

/*
function handleRequest(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ success: true, message: 'Welcome to Nodejs' }));
}
server.listen(8888, () => {
  console.log('Server listening on port 8888');
});
*/

/*
function handleRequest(req, res) {
  if (req.method === 'POST' && req.url === '/index') {
    console.log(req.method);
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>posted for first time</h2>');
  }
}
server.listen(5050, () => {
  console.log('Server listening on port 5050');
});
*/

/*
function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    console.log(req.method);
    res.setHeader('Content-Type', 'text/plain');
    res.end('KUNAL GUPTA');
  } else if (req.method === 'GET' && req.url === '/about') {
    console.log(req.method);
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>KUNAL GUPTA</h2>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h2>Page not found</h2>');
  }
}
server.listen(2345, () => {
  console.log('Server listening on port 2345');
});

*/

/*
function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/users') {
    console.log(req.method);
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
  } else if (req.method === 'POST' && req.url === '/users') {
    console.log(req.method);
    res.setHeader('Content-Type', 'text/plain');
    res.end('Posted for the second time');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h2>Page not found</h2>');
  }
}
server.listen(2345, () => {
  console.log('Server listening on port 2345');
});

*/
function handleRequest(req, res) {
  let parsedurl = url.parse(req.url, true);
  let pathname = parsedurl.pathname;
  console.log(pathname);
  if (req.method === 'GET' && req.url === '/users') {
    console.log(req.method);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(parsedurl.query));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h2>Page not found</h2>');
  }
}
server.listen(2345, () => {
  console.log('Server listening on port 2345');
});
