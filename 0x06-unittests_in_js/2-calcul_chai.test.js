/**
 * Test file of 2-calcul_chai module
 */

const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type="SUM"', () => {
    it('should return 4 when adding 1 and 3 rounded after rounding both', () => {
      expect(calculateNumber('SUM', 1.0, 3.0)).to.equal(4);
    });

    it('should return 5 when adding 1 and 3.7 rounded after rounding both', () => {
      expect(calculateNumber('SUM', 1.0, 3.7)).to.equal(5);
    });

    it('should return 7 when adding 3.499999 and 4.499999 after rounding both', () => {
      expect(calculateNumber('SUM', 3.499999, 4.499999)).to.equal(7);
    });
  });
  
  describe('type="SUBTRACT"', () => {
    it('should return 4 when subtracting 1 and 3', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    
    it('should return 5 when subtracting 1 and 3.7 rounded after rounding both', () => {
      expect(calculateNumber('SUBTRACT', 1.0, 3.7)).to.equal(-3);
    });
    
    it('should return 5 when subtracting 1.2 and 3.7 after rounding both', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });
  });

  describe('type="DIVIDE"', () => {
    it('should return 0.2 when dividing 1.4 and 4.5 after rounding both', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    
    it('should return 2 when dividing 10 and 5 after rounding both', () => {
      expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
    });
    
    it('should return Error when dividing a number by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});