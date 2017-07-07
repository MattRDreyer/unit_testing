var tallest_mountain = require('../tallest_mountain');
var chai = require('chai');
var expect = chai.expect;

describe('tallest_mountain()', function() {
  context('when mountain heights are [26029, 23251, 20169, 17940, 28838, 8998, 7722]', function() {
    it('returns 28838 as highest mountain', function() {

      var mountain = tallest_mountain([26029, 23251, 20169, 17940, 28838, 8998, 7722]);
      expect(mountain).to.equal(28838);
    });
  });

  context('when mountain heights are [26029, 23251, 20169, 17940, 28838, 8998, 7722]', function() {
    it('does not return 26029 for tallest mountain', function() {

      var mountain = tallest_mountain([26029, 23251, 20169, 17940, 28838, 8998, 7722]);
      expect(tallest_mountain()).to.not.equal(26029);

    });
  });
});
