module.exports.favoriteNumber = function(fav,guess) {
  if (guess > fav) {
    return "Too high"
  }
  else if (guess < fav) {
    return "Too low"
  }
  else {
    return "You got it!"
  }
};
module.exports.checkLock = function(x,y,a,b) {
  if ( x == '3' || x == '5' || x == '7') {
    if ( y == '2') {
      if (a >= '5' && a <= '100') {
        if (b < '9' || b > '20') {
        return 'correct'
        }
        else {return 'incorrect'}
      }
      else {return 'incorrect'}
    }
    else {return 'incorrect'}
  }
  else {return 'incorrect'}
};

module.exports.canIGet = function(item, money) {
  if ( item == 'MacBook Air' && money >= '999') {
    return true
  }
  else if ( item == 'MacBook Pro' && money >= '1299') {
    return true
  }
  else if ( item == 'Mac Pro' && money >= '2499') {
    return true
  }
  else if ( item == 'Apple Sticker' && money >= '1') {
    return true
  }
  else {return false}
};