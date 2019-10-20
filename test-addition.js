const assert = require('assert');
const {addition} = require('./src/index.js');

it('should adds 2 numbers and return 16', () => {
  assert.strictEqual(addition('6', '10'), '16');
});

it('should adds 2 numbers and return 17', () => {
  assert.strictEqual(addition('12', '5'), '17');
});

it('should adds 2 numbers and return 754', () => {
  assert.strictEqual(addition('54', '700'), '754');
});

it('should adds 2 numbers and return 85', () => {
  assert.strictEqual(addition('44', '41'), '85');
});

it('should adds 2 numbers and return 22', () => {
  assert.strictEqual(addition('11', '11'), '22');
});

it('should adds 2 numbers and return 0', () => {
  assert.strictEqual(addition('0', '0'), '0');
});