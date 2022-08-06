const InvalidStructureError = require('../../src/errors/InvalidStructureError');
const RandomNicknameGenerator = require('../../src/structures/RandomNicknameGenerator');
const {DATA_SETS} = require('../../src/datasets');

describe('RandomNicknameGenerator', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should generate nickname separated with space, having two words', () => {
    const structure = [
      DATA_SETS.ANIMALS,
      DATA_SETS.JOBS,
    ];

    const randomNickname = new RandomNicknameGenerator();
    const generatedNickname = randomNickname.generate({structure});

    expect(Array.isArray(structure)).toBeTruthy();
    expect(Array.isArray(structure[0])).toBeTruthy();
    expect(Array.isArray(structure[1])).toBeTruthy();
    expect(structure).toHaveLength(2);
    expect(generatedNickname.split(' ')).toHaveLength(2);
    const firstWordInNickname = generatedNickname.split(' ')[0];
    expect(_termIsInsideArray({array: DATA_SETS.ANIMALS, term: firstWordInNickname})).toBeTruthy();
    const secondWordInNickname = generatedNickname.split(' ')[1];
    expect(_termIsInsideArray({array: DATA_SETS.JOBS, term: secondWordInNickname})).toBeTruthy();
    expect(typeof generatedNickname).toBe('string');
  });

  it('should throw error when proving invalid structure', () => {
    const structure = 'WRONG';
    const randomNickname = new RandomNicknameGenerator();

    const generationWithErrors = () => {
      return randomNickname.generate({structure});
    };

    expect(generationWithErrors).toThrowError();
    expect(generationWithErrors).toThrow(InvalidStructureError);
    expect(generationWithErrors).toThrow('Invalid structure');
  });

  it('should throw error when proving empty structure', () => {
    const structure = [];
    const randomNickname = new RandomNicknameGenerator();

    const generationWithErrors = () => {
      return randomNickname.generate({structure});
    };

    expect(generationWithErrors).toThrowError();
    expect(generationWithErrors).toThrow(InvalidStructureError);
    expect(generationWithErrors).toThrow('Empty structure');
  });
});


function _termIsInsideArray({array, term}) {
  return array.some((elementInArray) => term === elementInArray);
}
