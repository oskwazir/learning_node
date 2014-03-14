
module.exports = function(db,date,callback){

	var counter = 0;

	db.createReadStream({start: date})
	.on('data',function(data){
		counter ++;
	})
	.on('error',function(err){
		console.log('Error: '+ err);
		callback(err)
	})
	.on('close', function(){
		callback(null,counter)
	})
	.on('end', function(){
		callback(null,counter)
	})
}