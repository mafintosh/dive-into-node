// example 3 - more advanced blocking: 'hello' wait 2s 'world' concurrent with 'world again' every 3s

/*
	Blocking:

	console.log('hello');
	sleep(2000);
	console.log('world')
	sleep(1000)
	console.log('world again');
	sleep(3000);
	console.log('world again');
	...
*/

// lets do it using a event loop

console.log('hello');

setTimeout(function() {
	console.log('world');
}, 1000);

setInterval(function() {
	console.log('world again');
}, 3000);
