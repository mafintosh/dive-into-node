// example 2 - blocking vs event based: 'hello' wait 2s 'world'

/*
	Blocking:

	console.log('hello');
	sleep(1000);
	console.log('world')
*/

// lets do it using a event loop

console.log('hello');

setTimeout(function() {
	console.log('world');
}, 1000);
