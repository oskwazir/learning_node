var def = require('q').defer();
 
def.promise.then(console.log, console.log);

setTimeout(def.resolve, 300,"I FIRED");
setTimeout(def.reject, 300, new Error("I DID NOT FIRE"));