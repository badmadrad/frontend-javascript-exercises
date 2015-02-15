module.exports.addItem = function(add,array){
  var search = array.indexOf(add)
  if ( search == '-1') {   
    array.push(add)
    return array
  }
  else {
    return array
  }
};

module.exports.reverseSortedList = function(array) {
  array.sort().reverse()
  return array
};