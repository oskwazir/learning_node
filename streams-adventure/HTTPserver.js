var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req,res){
	if(req.method === 'POST'){
		req.pipe(map(function(chunk){
					return chunk.toString().toUpperCase();
		})).pipe(res);
	} else {
 		res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
 		res.end('send as POST.')
	}	
});

server.listen(Number(process.argv[2]));