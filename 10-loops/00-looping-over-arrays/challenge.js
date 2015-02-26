module.exports.sumNumbers = function(array) {
  var sum = 0;
  for (var n = 0; n < array.length; n++) {
    sum += array[n]
  };
  return sum
};

module.exports.splitAndLowerCaseString = function(string) {
  var stringy = string.toLowerCase();
  var array = stringy.split(',');
  return array
};

module.exports.addIndex = function(array){
  var newarray = []
  for (var index = 0; index < array.length; index ++) {
    var string = index + ' is ' + array[index]
    newarray.push(string)
  }
  return newarray
};
