const assert = require('assert');
const multiply = require('./src/index.js');

it('should multiply 2 numbers and return product 50', () => {
  assert.strictEqual(multiply('5', '10'), '50');
});

it('should multiply 2 numbers and return product 100000000', () => {
  assert.strictEqual(multiply('10000', '10000'), '100000000');
});

it('should multiply 2 numbers and return product 10000000000000000', () => {
  assert.strictEqual(multiply('100000000', '100000000'), '10000000000000000');
});

it('should multiply 2 numbers and return product 19240045408977038918943543720037256', () => {
  assert.strictEqual(multiply('329568934658432659586', '58379426534596'), '19240045408977038918943543720037256');
});

it('should multiply 2 numbers and return product 2564409095663498076999916945221826386307700', () => {
  assert.strictEqual(multiply('439265893465876578346584325', '5837942653434596'), '2564409095663498076999916945221826386307700');
});

it('should multiply 2 numbers and return product 2564224144126429540528307700', () => {
  assert.strictEqual(multiply('43923423584325', '58379423434596'), '2564224144126429540528307700');
});

it('should multiply 2 numbers and return product 2469135802469135799975308641975308642', () => {
  assert.strictEqual(multiply('111111111111111111', '22222222222222222222'), '2469135802469135799975308641975308642');
});