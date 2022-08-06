const {RandomNicknameGenerator, DATA_SETS} = require('../src/index');

const customStrcutre = ['SAD', 'HAPPY'];
const nickname = RandomNicknameGenerator.generate({
  structure: [
    customStrcutre,
    DATA_SETS.ANIMALS,
  ],
});

const path = require('path');
const fileName = path.basename(__filename);
module.exports = {example: fileName, nickname};
