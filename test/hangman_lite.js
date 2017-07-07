var hangman_lite = require('../hangman_lite');
var chai = require('chai');
var expect = chai.expect;

describe('hangman_lite()', function() {
  context('When sassafras is the hangman word', function() {
    it('it returns 4 for the letter s', function() {

      var word = "sassafras";
      var letter = "s";
      expect(hangman_lite(word, letter)).to.equal(4);
    });
  });


  context('When zazzle is the hangman word', function() {
    it('it returns 1 for the letter e', function() {

      var word = "zazzle";
      var letter = "e";
      expect(hangman_lite(word, letter)).to.equal(1);
    });
  });

  context('When zazzle is the hangman word', function() {
    it('it returns 0 for the letter i', function() {

      var word = "zazzle";
      var letter = "i";
      expect(hangman_lite(word, letter)).to.equal(0);
    });
  });
});
