module.exports.createCourse = function(courseTitle,courseDuration,courseStudents) {
var courseInfo = {
  title: courseTitle,
  duration: courseDuration,
  students: courseStudents
};
return courseInfo
};

module.exports.addProperty = function(object,newProp,newValue) {
  if (newProp in object) {
    return object
  }
  else {
    object[newProp] = newValue
    return object
  };
};

module.exports.formLetter = function(letter) {
  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" 
    + letter.sender
};

module.exports.canIGet = function(item,money) {
  var apple = {
    'MacBook Air': 999,
    'MacBook Pro': 1299,
    'Mac Pro': 2499,
    'Apple Sticker': 1
  }
  var value = apple[item]
  
  if (money >= value) {
    return true
  }
  else {
    return false
  }
};