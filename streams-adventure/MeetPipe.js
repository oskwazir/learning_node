var fs = require('fs');

fs.createReadStream(process.argv[2],{encoding:'utf8'}).pipe(process.stdout);