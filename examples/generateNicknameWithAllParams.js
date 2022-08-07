const {RandomNicknameGenerator, DATA_SETS} = require('../src/index');

const nickname = RandomNicknameGenerator.generate({
  structure: [
    DATA_SETS.ANIMALS,
    DATA_SETS.ADJECTIVES,
  ],
  separator: '_',
  randomHash: true,
  timeStamp: true,
  order: ':timeStamp:randomHash:structure',
});

const path = require('path');
const fileName = path.basename(__filename);
module.exports = {example: fileName, nickname};
