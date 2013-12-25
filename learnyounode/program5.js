var fs = require('fs');
var directory = process.argv[2];
var fileExtension = process.argv[3];

var filterFiles = function(files){
	if(!fileExtension) printAllFiles(files);

	var pattern = '\\.' + fileExtension + '(?!.)';
	var matcher = new RegExp(pattern);

	for(var i = 0; i < files.length; i++){
		var found = matcher.test(files[i]);
		if(found){
			console.log(files[i]);
		}
	}
};

var printAllFiles = function(files){
	for(var i = 0; i < files.length; i++){
		console.log(files[i]);
	}
}	

fs.readdir(directory,function(err,files){
	filterFiles(files);
});

