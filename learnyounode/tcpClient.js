var net = require('net');
var client = net.connect({port: process.argv[2]},
 function() { 
	 console.log('client connected');
});

client.on('error', function(error) {
  console.log('Error: ' + error);
});

client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});

client.on('end', function() {
  console.log('client disconnected');
});