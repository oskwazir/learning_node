var directory = process.argv[2];
var fileExtension = process.argv[3];	
var filterFiles = require('./filterFiles');

filterFiles(directory,fileExtension,function(err,files){
		if(err) {
			console.log("Error from filterFiles.byExtension: " + err);
			return;
		}

	for(var i = 0; i < files.length; i++){
		console.log(files[i]);
	}
});