const expect = require('chai').expect;

const calculator = require('../calculator.js');
const plus = require('../calculator.js');
const minus = require('../calculator.js');
const multiply = require('../calculator.js');


describe ('calculator', () => {

  it('calculator main function exists', () => {
    expect(calculator).to.be.a('function');
  });

  it('returns a number', () => {
    expect(calculator(1, plus, 1)).to.be.a('number');
  });

});

describe('it can perform calculator operations', () => {

  it('can add two numbers', () => {
    expect(calculator(5, plus, 5)).to.equal(11);
    // console.log(calculator(1, plus, 10));
  });

});
