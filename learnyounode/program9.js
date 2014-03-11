var http = require('http');
var bufferList = require('bl');

var firstBufferList = new bufferList();
var secondBufferList = new bufferList();
var thirdBufferList = new bufferList();

var firstUrl = process.argv[2];
var secondUrl = process.argv[3];
var thirdUrl = process.argv[4];
var complete = 0;

function requester(url, bl){
	http.get(url, function(res){
		res.setEncoding('utf8');
		res.on('data', function(chunk){
			bl.append(chunk);
		});
		res.on('end', function(){
			complete += 1;
			if(complete === 3){
				console.log(firstBufferList.toString());
				console.log(secondBufferList.toString());
				console.log(thirdBufferList.toString());
			}
		})
	}).on('error', function(e){
		console.log('Got error: ' + e.message);
	});
}

requester(firstUrl,firstBufferList);
requester(secondUrl,secondBufferList);
requester(thirdUrl, thirdBufferList);


