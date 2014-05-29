
function Spy(target,method){
  //we get an object and a method, in which we need to track
  //how many items the method was invoked.
  //we must provide a method in Spy to return the invokation count.
  
  //do we modify the object and wrap the orignal method inside the modified method?
  
  //using apply to call the method in the wrapper?
  
  //this seems to work but JSBIN doesnt' make it easy
  //see in dev console.

  var spy = Object.create({
    count:0
  });
  
  var originalMethod = target[method];

  target[method] = function(){
    spy.count++;
    return originalMethod.apply(this, arguments);
  };

 return spy;

}

  
module.exports = Spy;
  