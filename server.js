var http = require('http');
var port = 81;

function handleRequest(req, res) {
  res.end('Hello from Windows container, path = ' + req.url);
}

var server = http.createServer(handleRequest);

server.listen(port);  
