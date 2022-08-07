const {RandomNicknameGenerator, DATA_SETS} = require('../src/index');

const nickname = RandomNicknameGenerator.generate({
  structure: [
    DATA_SETS.ANIMALS,
    DATA_SETS.ADJECTIVES,
  ],
  separator: '_',
  timeStamp: true,
  order: ':timeStamp:structure',
});

const path = require('path');
const fileName = path.basename(__filename);
module.exports = {example: fileName, nickname};
