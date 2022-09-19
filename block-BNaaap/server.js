let http = require('http');
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  //   res.statusCode = 201;
  //   res.setHeader('Content-Type', 'text/html');
  res.writeHead(201, { 'Content-Type': 'text/html' });
  res.write('Hello');
  res.write('World');
  res.end();
}
server.listen(4444, () => {
  console.log('server listening on port 4444');
});
