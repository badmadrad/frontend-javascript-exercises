module.exports.copy = function(object) {
  var myObject= new Object();
  for (var property in object) {
    myObject[property] = object[property]
  }
  return myObject
};

module.exports.extend = function(dest,src) {
  for (var property in src) {
    dest[property] = src[property]
  }
  return dest
};

module.exports.hasElems = function(object,array) {
var searchArray = [];

  for ( n = 0; n < array.length; n++) {

    var search = object.hasOwnProperty(array[n]);
    var string = search.toString()
    searchArray.push(string)

  }

if (searchArray == undefined) {
  return true
}
else if (searchArray.indexOf('false') >= 0) {
  return false
}
else {
  return true
}
};