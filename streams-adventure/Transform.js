var through = require('through');
var upperCaseConverter = through(function write(data){
	this.queue(data.toString().toUpperCase())
}, function end(){
	this.queue(null)
})

process.stdin.pipe(upperCaseConverter).pipe(process.stdout)