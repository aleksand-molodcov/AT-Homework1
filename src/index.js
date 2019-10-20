
module.exports = function addition(a, b) {
  return String(BigInt(a)+BigInt(b));
}

module.exports = function subtraction(a, b) {
  return String(BigInt(a)-BigInt(b));
}

module.exports = function multiply(a, b) {
  return String(BigInt(a)*BigInt(b));
}

module.exports = function division(a, b) {
  return String(BigInt(a)/BigInt(b));
}

module.exports = function stepen(a, b) {
  var res;
  for (res=(+a); b>1; b--) {
    res=res*a;
  }
  return res;
}

module.exports = function facktorial(a, b) {
  return String(BigInt(a)+BigInt(b));
}