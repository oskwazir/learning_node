var slice = Array.prototype.slice

function logger(namespace) {
  return function(){
        console.log(namespace+' '+ slice.call(arguments).join(' '));
    }
};

module.exports = logger