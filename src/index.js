const RandomNicknameGenerator = require('./structures/RandomNicknameGenerator');
const {DATA_SETS} = require('./datasets/');

const rand = new RandomNicknameGenerator();
const generated = rand.generate({
  structure: [
    DATA_SETS.ACTOR_NAME,
    DATA_SETS.ACTOR_SURNAME,
    DATA_SETS.ADJECTIVES,
  ],
});

console.log(generated);

/*
module.exports = {
  RandomNicknameGenerator: new RandomNicknameGenerator()
}
*/
