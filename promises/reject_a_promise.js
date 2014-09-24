var def = require('q').defer();

var printer = function(text){
  console.log(text);
}

def.promise.fail(printer);
setTimeout(def.reject("REJECTED!"),300);