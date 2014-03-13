var concat = require('concat-stream');

var reverser = concat({encoding: 'string'}, function(src){
	console.log(src.split('').reverse().join(''));
})

process.stdin.pipe(reverser);