// example 7 - control flow with named functions

var fs = require('fs');
var result = '';

var aDone = function(err, a) {
	result += a;
    fs.readFile('b.txt', 'utf8', bDone);	
};

var bDone = function(err, b) {
	result += b;
    fs.readFile('c.txt', 'utf8', cDone);
	
};
var cDone = function(err, c) {
	result += c;
	console.log(result);
};

fs.readFile('a.txt', 'utf8', aDone);