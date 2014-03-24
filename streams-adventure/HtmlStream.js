var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();

var caseConverter = through(function write(line){
		this.queue(line.toString().toUpperCase());
	},
	function end(){
		this.queue(null)
});

tr.select('.loud').createStream().pipe(caseConverter).pipe(process.stdout);
tr.pipe(process.stdout);
process.stdin.pipe(tr);
