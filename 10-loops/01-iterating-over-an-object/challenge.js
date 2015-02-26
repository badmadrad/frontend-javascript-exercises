module.exports.getKeys = function(object) {
  var objectKeys = Object.keys(object)
  return objectKeys
};

module.exports.getValues = function(object) {
  var valueArray = []
  for (var property in object) {
    var value = object[property]
    valueArray.push(value)
  }
  return valueArray
};

module.exports.objectToArray = function(object) {
  var objectArray = []
  for (var property in object) {
    var value = property + ' is ' + object[property]
    objectArray.push(value)
  }
  return objectArray
};