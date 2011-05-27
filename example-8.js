// example 8 - control flow with a step function
// OBS: this doesnt run on your computer - needs my 'common' module

var fs = require('fs');
var step = require('common').step; // original idea Tim Caswell

var result = '';

step([
	function(nextStep) {
		fs.readFile('a.txt', 'utf8', nextStep);
	},
	function(a, nextStep) {
		result += a;
		fs.readFile('b.txt', 'utf8', nextStep);		
	},
	function(b, nextStep) {
		result += b;
		fs.readFile('c.txt', 'utf8', nextStep);
	},
	function(c) {
		result += c;
		console.log(result);
	}
], function(err) {
	console.error(err.stack);
})
