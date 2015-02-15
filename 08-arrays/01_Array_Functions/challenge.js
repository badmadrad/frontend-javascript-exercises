module.exports.reversePlusOne = function(array) {
array.push(1);
array.reverse();
return array
};

module.exports.plusesEverywhere = function(array) {
var str = array.toString();
var no = str.replace(/,/g,"+");
return no
};

module.exports.arrayQuantityPlusOne = function(array) {
  return array.length + 1
};