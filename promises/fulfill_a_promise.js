var q = require('q');
var deferred = q.defer();

deferred.promise.then(function (obj) {
  setTimeout(function(){
    console.log(obj);
  }, 300);
});

deferred.resolve("RESOLVED!");