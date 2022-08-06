// TODO: use cryptoRandom if the version is greater than 14 (and if we're in node)

function randomInt({min = 0, max = 100}) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {randomInt};
