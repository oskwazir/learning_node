var http = require('http');
var url = require('url');

var parseTime = function(isoDate){
	var date = new Date(isoDate);
	return { "hour": date.getHours(),
			 "minute": date.getMinutes(),
			 "second": date.getSeconds() };
}

var unixTime = function(isoDate){
	var date = new Date(isoDate);
	return {"unixtime": date.getTime() };
}

var server = http.createServer();

server.on('request', function(req,res){
	var parsedUrl = url.parse(req.url, true);
	if(req.method === 'GET'){
		if(parsedUrl.pathname === '/api/parsetime'){
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.write(JSON.stringify(parseTime(parsedUrl.query.iso)));
			res.end();	
		} else if (parsedUrl.pathname === '/api/unixtime'){
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.write(JSON.stringify(unixTime(parsedUrl.query.iso)));
			res.end();	
		} else {
	 		res.writeHead(405, "Path not supported", {'Content-Type': 'text/html'});
			res.end();				
		}
	} else {
 		res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
		res.end();	
	}
});

server.listen(Number(process.argv[2]));
console.log('HTTP server listening on port: ' + process.argv[2]);