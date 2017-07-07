var change_machine = require('../change_machine');
var chai = require('chai');
var expect = chai.expect;


describe('change_machine()', function() {
  context('When starting amount is 78', function() {
    it('returns 3 twenties, 1 ten, 1 five and 3 ones for change machine', function() {

      var amount = 78;

      expect(change_machine(amount)).to.eql(['3, 1, 1, 3']);
    });
  });

  context('When starting amount is 20', function() {
    it('returns 1 twenty, 0 tens, 0 fives and 0 ones for change machine', function() {

      var amount = 20;

      expect(change_machine(amount)).to.eql(['1, 0, 0, 0']);
    });
  });

  context('When starting amount is 50', function() {
    it('does not return 2 twenties, 0 tens, 2 fives and 0 ones for change machine', function() {

      var amount = 50;

      expect(change_machine(amount)).to.not.eql(['2, 0, 2, 0']);

    });
  });
});
