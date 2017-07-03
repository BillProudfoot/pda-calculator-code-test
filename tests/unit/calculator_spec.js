var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should start at zero', function (){
    assert.equal(null, this.previousTotal)
  })

  it('it should be able to multiply 3x5', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  it('it should be able to divide 21 by 7', function(){
    calculator.previousTotal = 21;
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  // it("add", function(){
  //    assert.equal("2", calculator.add(1, 1));
  //  });


  // it('returns the sum of the numbers', function() {
  //      expect(add(3,5)).this.runningTotal(8);
  //    });

//   it('returns the sum of the numbers', function() {
//   expect(Calculator.add(number1, number2)).toBe(number1 + number2);
// });


  

});
