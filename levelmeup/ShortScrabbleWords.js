var util = require('util');

module.exports.init = function(db,words,callback){
	var batchOperations = words.map(function (entry) {
	 var key = entry.length;
	  return {type:'put', key: key, value: entry}
	});

	db.batch(batchOperations, function (err) {
		if (err) {
		   	console.log('Error: %s',  err);
		   	if(callback) callback(err);
		}
		console.log('Words were saved.');

		if(callback) {
			callback(null)
		};
	});
}

module.exports.query = function(db,word,callback){

}