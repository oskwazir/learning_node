var strftime = require('strftime');

require('net').createServer(function(socket){

	socket.on('error', function(error){
		console.log('Error: ' + error);
	})

	socket.on('end', function(){
		console.log('connection closed by peer');
	})

	socket.write(strftime('%Y-%m-%d %H:%M\n', new Date()));
	socket.end()
}).listen(process.argv[2]);