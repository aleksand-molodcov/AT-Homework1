const assert = require('assert');
const {funky} = require('./src/index.js');

it('should return array with added element', () => {
  assert.strictEqual(funky([ 9, 2, 3, ]), "9,2,3,99");
});

it('should return array with added element', () => {
  assert.strictEqual(funky([ 3, 7, 3]), "3,7,3,99");
});

it('should return array with added element', () => {
  assert.strictEqual(funky([ 2, 9, 8]), "2,9,8,99");
});
