// example 5 - http delayed, shared variables

var http = require('http');

var cnt = 0;

var server = http.createServer(function(request, response) {
    setTimeout(function() {
        var num = cnt++;
        
        response.writeHead(200, {'content-type':'text/plain'});
        response.end('delayed hello world #'+num); // no rcs!
    }, 1000);
});

server.listen(8080);