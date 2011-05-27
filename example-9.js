// example 9 - control flow with a step function (using concurrency)
// OBS: this doesn't run on your computer - needs my 'common' module

var fs = require('fs');
var step = require('common').step; // original idea Tim Caswell

step([
	function(nextStep) {
		fs.readFile('a.txt', 'utf8', nextStep.parallel());
		fs.readFile('b.txt', 'utf8', nextStep.parallel());		
		fs.readFile('c.txt', 'utf8', nextStep.parallel());		
	},
	function(result) {
		console.log(result[0]+result[1]+result[2]);
	}
], function(err) {
	console.error(err.stack);
})
