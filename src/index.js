
module.exports.addition = function(a, b) {
  return String(BigInt(a)+BigInt(b));
}

module.exports.subtraction = function(a, b) {
  return String(BigInt(a)-BigInt(b));
}

module.exports.multiply = function(a, b) {
  return String(BigInt(a)*BigInt(b));
}

module.exports.division = function(a, b) {
  return String(BigInt(a)/BigInt(b));
}

module.exports.stepen = function(a, b) {
  var res;
  for (res=(+a); b>1; b--) {
    res=res*a;
  }
  return res;
}

module.exports.facktorial = function(a) {
  var res;
  for (res=1; a>1; a--) {
    res = res*a;
  }
  return res;
}