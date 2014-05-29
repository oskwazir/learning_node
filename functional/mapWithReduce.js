module.exports = function(arr,fn){
  return arr.reduce(function(acc,curr,index,arr){
        return acc.concat(fn(curr,index,arr));
    },[]);
}