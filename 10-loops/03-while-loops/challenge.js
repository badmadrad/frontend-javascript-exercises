module.exports.stream = function(conditionalFn,actionFn) {
while (conditionalFn()){
  actionFn()
}
};

/*module.exports.sumNumbers = function(array) {
var sum = 0;
var i = 0;
while (i < array.length){
   sum += array[i]
   i++
}
return sum
};*/

module.exports.sumNumbers = function(array) {
var sum = 0
while (array.length > 0) {
  sum += array.pop()
}
return sum
}
