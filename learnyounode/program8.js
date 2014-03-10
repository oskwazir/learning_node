var http = require('http');
var bufferList = require('bl');
var bl = new bufferList();


http.get(process.argv[2], function(res){
	res.setEncoding('utf8');
	res.on('data', function(chunk){
		bl.append(chunk);
	});
	res.on('end', function(){
		console.log(bl.length);
		console.log(bl.toString());
	})
}).on('error', function(e){
	console.log('Got error: ' + e.message);
});