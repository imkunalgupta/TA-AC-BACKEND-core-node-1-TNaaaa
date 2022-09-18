let http = require('http');

// http
//   .createServer((request, response) => {
//     console.log(request, response);
//     response.end('Welcome');
//   })
//   .listen(4000, 'localhost');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.end('Welcome');
}

server.listen(4000, () => {
  console.log('Server listening on port 4000');
});
