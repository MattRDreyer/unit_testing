var cherokee = require('../cherokee');
var chai = require('chai');
var expect = chai.expect;

describe('cherokee()', function() {
context('When cherokee hares begin at 500 and multiply by 100% for 5 weeks', function() {
  it('the total will be 16000', function() {

    var cherokeeHares = 500;
    var birthRate = 1;
    var numberOfWeeks = 5;
    var week = 1;

    expect(cherokee(cherokeeHares, birthRate, numberOfWeeks, week)).to.equal(16000);
  });
});

context('When cherokee hares begin at 10 and multiply by 200% for 10 weeks', function() {
  it('the total will be 10240', function() {

    var cherokeeHares = 10;
    var birthRate = 2;
    var numberOfWeeks = 10;
    var week = 1;

    expect(cherokee(cherokeeHares, birthRate, numberOfWeeks, week)).to.equal(10240);
  });
});
});
