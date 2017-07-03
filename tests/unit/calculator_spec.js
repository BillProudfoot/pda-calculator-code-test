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

  it("it should be able to add 1 + 4", function(){
    calculator.previousTotal = 1;
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5)
   });

  it("it should be able to subtract 7 minus 4", function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
   });

  it("it should be able to concatenaate multiple number button clicks", function(){
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    calculator.numberClick(4)
    calculator.numberClick(5)
    calculator.numberClick(6)
    assert.equal(calculator.runningTotal, 123456)
   });
  
 it("it should be able to chain multiple operations together", function(){
   calculator.numberClick(1)
   calculator.operatorClick('+')
   calculator.numberClick(2)
   calculator.operatorClick('x')
   calculator.numberClick(4)
   calculator.operatorClick('/')
   calculator.numberClick(4)
   calculator.operatorClick('-')
   calculator.numberClick(2)
   calculator.operatorClick('=')
   assert.equal(calculator.runningTotal, -1)
  });

 it("it can clear the running total without affecting the calculation", function(){
   calculator.numberClick(1)
   calculator.operatorClick('+')
   calculator.numberClick(2)
   calculator.clearClick()
   calculator.numberClick(4)
   calculator.operatorClick('=')
   assert.equal(calculator.runningTotal, 5)
  });


});
