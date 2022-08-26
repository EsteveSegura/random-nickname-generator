// TODO: use cryptoRandom if the version is greater than 14 (and if we're in node)

function randomInt({min = 0, max = 100}) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomHex(numberOfDigits) {
  const isBrowser = typeof window !== 'undefined' && window.hasOwnProperty('Window') && window instanceof window.Window;

  if(isBrowser) {
    let output = ''
    const values = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

    for(let i = 0 ; i < numberOfDigits; i++) {
      output = output + values[Math.floor(Math.random() * values.length)];
    }

    return output;
  }

  const randomHexString = crypto.randomBytes(numberOfDigits).toString('hex');
  return randomHexString;
}

module.exports = {randomInt, randomHex};
