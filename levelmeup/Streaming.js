var level = require('level');

level(process.argv[2]).createReadStream()
	.on('data',function(data){
		console.log(data.key+'='+data.value);
	})
	.on('error', function(err){
		console.error(err);
	})

