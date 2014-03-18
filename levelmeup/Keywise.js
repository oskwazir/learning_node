var util = require('util');
var level = require('level')
var db = level(process.argv[2], { valueEncoding: 'json' })
var data = require(process.argv[3])

var batchOperations = data.map(function (entry) {
  var key;
  if (entry.type === 'user')
    key = entry.name;
  else if (entry.type === 'repo')
    key = entry.user + '!' + entry.name;
  console.error(key+'='+util.inspect(entry));
  return { type: 'put', key: key, value: entry }
})

db.batch(batchOperations);