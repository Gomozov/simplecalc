const assert = require('assert');
const mc = require('./../calc.js');

describe('Calculate simple expression', function() {
  const tests = [
    ['1+1', 2],
    ['1 - 1', 0],
    ['1* 1', 1],
    ['1 /1', 1],
    ['-123', -123],
    ['123', 123],
    ['2 /2+3 * 4.75- -6', 21.25],
    ['12* 123', 1476],
    ['2 / (2 + 3) * 4.33 - -6', 7.732],
    ["0--0", 0],
    ["1--1", 2],
    ["1+-1", 0],
    ["1223421", 1223421],
    ["-213", -213] 
  ];

  tests.forEach(function (m) {
    it("should return: " + m[1] +" when input is: " + m[0], function(){
      assert.equal(mc.calc(m[0]), m[1]);
    });
  });
});

describe('Calculate hard expression', function() {
  const tests = [
    ['11 * 7 * 34 - 26 - 87 - 90 / 2 * 73 + 77 * 68 * 19 + 41 * 62', 101246],
    ['84 / 54 / 89 * 43 * 40 - 79 * 97 + 48 / 3 - 49 * 76 * 7 + 81 / 2', -33644.437578027464],
    ['58 + 12 * 24 * 27 - 45 - 62 * 21 + 28 * 52 / 1 / 72 + 10 - 7 * 43 + 63 * 85 - 55 + 17 * 80 + 56 - 22 - 96 * 53 / 1', 7822.222222222223],
    ['52 / 18 - 89 + 44 * 94 - 56 - 35 + 18 / 95 + 52 * 46 + 77 * 90 - 30 + 28 / 68 - 37 * 57 - 92 - 30 + 21 - 30 * 83 * 47 * 36', -4202038.509872721]
  ];

  tests.forEach(function (m) {
    it("should return: " + m[1] +" when input is: " + m[0], function(){
      assert.equal(mc.calc(m[0]), m[1]);
    });
  });
});

describe('Error handling', function() {
  const tests = [
    ['11 * 7 * g', "Please enter digits and math operators only."],
    ['84 / 54 / 89 * )', "Result is not a number. Please check operators and parenthesis."],
    ['', "Result is not a number. Empty input."],
    ['--1', "Result is not a number. Please check operators and parenthesis."],
    ['1+--1', "Result is not a number. Please check operators and parenthesis."]
  ];

  tests.forEach(function (m) {
    it("should return: " + m[1] +" when input is: " + m[0], function(){
      assert.equal(mc.calc(m[0]), m[1]);
    });
  });
});

describe('Calculate expressions with parenthesis', function() {
  const tests = [
    ['(1 - 2) + -(-(-(-4)))', 3],
    ['(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11)', 1],
    ['((80 - (19)))', 61]
  ];

  tests.forEach(function (m) {
    it("should return: " + m[1] +" when input is: " + m[0], function(){
      assert.equal(mc.calc(m[0]), m[1]);
    });
  });
});
