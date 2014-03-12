var level = require('level');
var fs = require('fs');

var db = level(process.argv[2]);
var batchOperation = [];

var processBatchData = function(batch){
	var linesInFile = batch.split('\n');
	var i = 0;
	var length = linesInFile.length;
	var operation = []
	for( ; i < length; i++){
		operation = (linesInFile[i].split(','));
		if(operation[0] === 'put'){
			batchOperation[i] = {
				type: operation[0],
				key: operation[1],
				value: operation[2]
			}
		} else if (operation[0] === 'del'){
			batchOperation[i] = {
				type: operation[0],
				key: operation[1]
			}
		}
	}
}

fs.readFile(process.argv[3],'utf8',function(err,data){
  	processBatchData(data);
  	db.batch(batchOperation, function(err){
  		if (err) return console.error(err);
  		console.log('Batch Operation Complete. Yay!');
  	});
});
