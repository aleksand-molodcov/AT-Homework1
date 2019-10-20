const assert = require('assert');
const {division} = require('./src/index.js');

it('should division 2 numbers and return 4', () => {
  assert.strictEqual(division('8', '2'), '4');
});

it('should division 2 numbers and return 8', () => {
  assert.strictEqual(division('40', '5'), '8');
});

it('should division 2 numbers and return 7', () => {
  assert.strictEqual(division('21', '3'), '7');
});

it('should division 2 numbers and return 5', () => {
  assert.strictEqual(division('150', '30'), '5');
});

it('should division 2 numbers and return 5', () => {
  assert.strictEqual(division('250', '50'), '5');
});

it('should division 2 numbers and return 8', () => {
  assert.strictEqual(division('16', '2'), '8');
});