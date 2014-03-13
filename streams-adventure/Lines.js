var split = require('split');
var through = require('through');
var lineCounter = 0;

var caseConverter = through(function write(line){
	line = line.toString();
	if(lineCounter % 2 === 0){
		this.queue(line.toLowerCase() + '\n')
	} else {
		this.queue(line.toUpperCase()  + '\n')
	}
	lineCounter ++;
}, function end(){
	this.queue(null)
})

process.stdin.pipe(split()).pipe(caseConverter).pipe(process.stdout);