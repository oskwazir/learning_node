module.exports = function(db,date,callback){

    var tweets = [];

    db.createReadStream({start: date, end: date+'\xff'})
    .on('data',function(data){
        tweets.push(data.value);
    })
    .on('error',function(err){
        console.log('Error: '+ err);
        callback(err)
    })
    .on('close', function(){
        callback(null,tweets)
    })
    .on('end', function(){
        callback(null,tweets)
    })
}