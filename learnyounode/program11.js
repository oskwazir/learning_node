var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(req,res){
	res.writeHead(200, {'content-type': 'text/plain' })
	fs.createReadStream(process.argv[3]).pipe(res);
})

server.listen(process.argv[2]);