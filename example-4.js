// example 4 - http delayed

var http = require('http');

var server = http.createServer(function(request, response) {
    setTimeout(function() {
        response.writeHead(200, {'content-type':'text/plain'});
        response.end('delayed hello world');
    }, 1000);
});

server.listen(8080);