/**
 * Task 2: Basic test using Chai assertion library
 */

const calculateNumber = (type, a, b) => {
  const aRounded = Math.round(a);
  const bRounded = Math.round(b);

  if (type === 'SUM') {
    return aRounded + bRounded;
  } if (type === 'SUBTRACT') {
    return aRounded - bRounded;
  } if (type === 'DIVIDE') {
    if (bRounded === 0) {
      return 'Error';
    }
    return aRounded / bRounded;
  }
  throw new TypeError('Type must be SUM, SUBTRACT or DIVIDE');
};

module.exports = calculateNumber;
