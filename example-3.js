// example 3 - http

var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'content-type':'text/plain'});
    response.end('hello world');
});

server.listen(8080);