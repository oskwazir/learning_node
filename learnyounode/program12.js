var http = require('http');
var map = require('through2-map');
var util = require('util');

var uppercase = map(function(chunk){
	return chunk.toString().toUpperCase();
});

var server = http.createServer();

server.on('request', function(req,res){
	if(req.method === 'POST'){
		req.pipe(uppercase).pipe(res);
	} else {
 		res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
		res.end();	
	}
});

server.listen(Number(process.argv[2]));
console.log('HTTP server listening on port: ' + process.argv[2]);