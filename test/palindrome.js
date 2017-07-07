var palindrome = require('../palindrome');
var chai = require('chai');
var expect = chai.expect;

describe('palindrome()', function() {
context('The word stots should be a palindrome.', function() {
  it('Yes, it is', function() {

    var word = "stots"

    expect(palindrome(word)).to.equal(true);
  });
});

context('The word hooligan is not a palindrome.', function() {
  it('No, it\'s not', function() {

    var word = "hooligan"

    expect(palindrome(word)).to.equal(false);
  });
});
});
