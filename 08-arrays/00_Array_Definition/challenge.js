module.exports.newArray = function(x,y,a,b) {
  var array = [x,y,a,b]
  return array
};

module.exports.firstAndLast = function(array) { 
  var lastElement = array.length - 1;
  var newArray = [array[0],array[lastElement]]
  return newArray
};