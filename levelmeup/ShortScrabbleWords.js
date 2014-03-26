var util = require('util');

var findRealLetters = function(word){
	var realLetters = '';
	if (word.indexOf('*') > -1){
		//need to split letters from wildcard(s)
	    var wildCardsStart = word.indexOf('*');
	    return word.slice(0, word.indexOf('*'));
	} else {
		return word;
	}
}

module.exports.init = function(db,words,callback){
	var batchOperations = words.map(function (entry) {
	var key = entry.length+'!'+entry;
	  return {type:'put', key: key, value: entry}
	});

	db.batch(batchOperations, function (err) {
		if (err) {
		   	console.log('Error: %s',  err);
		   	if(callback) callback(err);
		}

		if(callback) {
			callback(null)
		};
	});
}

module.exports.query = function(db,word,callback){
	var results = [];
    var key = word.length + '!' + findRealLetters(word);
	
	db.createReadStream({start: key, end: key+'\xff'})
    .on('data',function(data){
        results.push(data.value);
    })
    .on('error',function(err){
        console.log('Error: '+ err);
        callback(err)
    })
    .on('close', function(){
        callback(null,results)
    })
    .on('end', function(){
        callback(null,results)
    })

}