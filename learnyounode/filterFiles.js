var fs = require('fs');

var getFileList = function(directory, callback){
	fs.readdir(directory,function(err,files){
		if(err) return callback(err);
		callback(null,files);
	});
};

function filterFiles(directory,fileExtension,callback){

	getFileList(directory,function(err,files){
		if(err) {
			callback(err);
			return;
		}

		var pattern = '\\.' + fileExtension + '(?!.)';
		var matcher = new RegExp(pattern);
		var matchingFiles = [];

		for(var i = 0; i < files.length; i++){
			var found = matcher.test(files[i]);
			if(found){
				matchingFiles.push(files[i]);
			}
		}

		callback(null,matchingFiles);
	});
};

module.exports = filterFiles;