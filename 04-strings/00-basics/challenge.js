module.exports.formLetter = function(firstName, senderName, message) {
return "Hello " + firstName +',\n\n' + message + '\n\nSincerely,\n' + senderName
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
var con1 = bigString.substring(startA,endA)
var con2 = bigString.substring(startB,endB)
var result = con1 + con2
return result
};

module.exports.findFirstMatch = function(text, searchString) {
return text.indexOf(searchString)
};

module.exports.findLastMatch = function(text, searchString) {
return text.lastIndexOf(searchString)
};

module.exports.substringBetweenMatches = function(text, searchString) {
var first = text.indexOf(searchString)
var last = text.lastIndexOf(searchString)
var length = searchString.length
var real = first + length
var result = text.substring(real,last)
return result
};