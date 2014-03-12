var level = require('level');

var db = level(process.argv[2]);
var i = 0;
var max = 100;
var keyPrefix = 'gibberish';

// Have to iterate 100 times

var getGibberish = function(index){

	db.get(keyPrefix + index, function(err, value){
		if(err){
			if(err.notFound){
				return 
			} else {
				throw err	
			}
		}

		console.log(keyPrefix + index + '=' + value);
	})

}

for( ; i <= max; i++){
	
	getGibberish(i);
}

