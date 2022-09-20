var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  console.log(req.url);
  //web page
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  let dir = __dirname.split('');
  if (req.method === 'GET' && pathname === '/') {
    fs.createReadStream('./index.html').pipe(res);
  } else if (req.method === 'GET' && pathname === '/placestovisit') {
    fs.createReadStream('./places to visit.html').pipe(res);
  } else if (req.method === 'GET' && pathname === '/thingstodo') {
    fs.createReadStream('./things to do.html').pipe(res);
  }
  //css
  else if (req.url.split('.').pop() === 'css') {
    res.setHeader('Content-Type', 'text/css');
    fs.readFile('./stylesheet' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
  //Images
  else if (
    req.method === 'GET' &&
    (pathname.split('.').pop().toLowerCase() === 'jpg' ||
      pathname.split('.').pop().toLowerCase() === 'jpeg' ||
      pathname.split('.').pop().toLowerCase() === 'png')
  ) {
    res.setHeader(
      'Content-Type',
      `image/${pathname.split('.').pop().toLowerCase()}`
    );
    fs.readFile('./' + pathname, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
  //Error
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h2>Page not found</h2>');
  }
}
server.listen(5555, () => {
  console.log('Server listening on port 5555');
});
