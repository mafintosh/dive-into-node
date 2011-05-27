// example 6 - control flow

// read 3 files, a,b and c

var fs = require('fs');

fs.readFile('a.txt', 'utf8', function(err, a) {
    fs.readFile('b.txt', 'utf8', function(err, b) {
        fs.readFile('c.txt', 'utf8', function(err, c) {
            // oh ooooh... hope we dont do anymore async
            // as im running out of window space
            var result = a+b+c;
            // we didnt even do error handling :(
        });
    });
});
