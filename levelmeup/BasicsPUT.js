var level = require('level');
var db = level(process.argv[2]);
var data = JSON.parse(process.argv[3]);

for(property in data){
	db.put(property, data[property], function(err){
		if (err) return console.error('Error in put(): ' + err)
		console.error('put: %s =%s', key, value);
	})
}