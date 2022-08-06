const RandomNicknameGenerator = require('./structures/RandomNicknameGenerator');
const {DATA_SETS} = require('./datasets/');

module.exports = {
  DATA_SETS,
  RandomNicknameGenerator: new RandomNicknameGenerator(),
};
