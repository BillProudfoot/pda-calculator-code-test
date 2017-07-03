var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('running total should be displayed when number buttons are pressed', function (){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('123456')
  })

  it('use each operad and display total', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('can chain multiple operation together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  })

  it('does it work with negative numbers - no it does not ', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  })

  it('does it work subtracting to a negative numbers - no it does not', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })

  it('does it give a decimal answer - no it does not gives 2 ', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#clear')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('can it multiple very large numbers together - no it doesn not', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5000')
  })

  it('does it do if you divide by zero ', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  })

});