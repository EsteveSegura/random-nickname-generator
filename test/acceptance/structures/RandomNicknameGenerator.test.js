const InvalidStructureError = require('../../../src/errors/InvalidStructureError');
const RandomNicknameGenerator = require('../../../src/structures/RandomNicknameGenerator');
const {DATA_SETS} = require('../../../src/datasets');

describe('RandomNicknameGenerator', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should generate nickname separated with the separator, having two words', () => {
    const structure = [
      DATA_SETS.ANIMALS,
      DATA_SETS.JOBS,
    ];
    const separator = '-';

    const randomNickname = new RandomNicknameGenerator();
    const generatedNickname = randomNickname.generate({structure, separator});

    expect(Array.isArray(structure)).toBeTruthy();
    expect(Array.isArray(structure[0])).toBeTruthy();
    expect(Array.isArray(structure[1])).toBeTruthy();
    expect(structure).toHaveLength(2);
    expect(generatedNickname.split(separator)).toHaveLength(2);
    expect(countRepeatedSubstringInString({fullString: generatedNickname,
      stringToCount: separator})).toBe(structure.length - 1);

    const firstWordInNickname = generatedNickname.split(separator)[0];
    expect(_termIsInsideArray({array: DATA_SETS.ANIMALS, term: firstWordInNickname})).toBeTruthy();

    const secondWordInNickname = generatedNickname.split(separator)[1];
    expect(_termIsInsideArray({array: DATA_SETS.JOBS, term: secondWordInNickname})).toBeTruthy();

    expect(typeof generatedNickname).toBe('string');
  });

  it('should generate nickname with no separation, having two words', () => {
    const structure = [
      DATA_SETS.ANIMALS,
      DATA_SETS.JOBS,
    ];
    const separator = '';

    const randomNickname = new RandomNicknameGenerator();
    const generatedNickname = randomNickname.generate({structure, separator});

    expect(Array.isArray(structure)).toBeTruthy();
    expect(Array.isArray(structure[0])).toBeTruthy();
    expect(Array.isArray(structure[1])).toBeTruthy();
    expect(structure).toHaveLength(2);
    expect(generatedNickname.split(' ')).toHaveLength(1);
    expect(_substringIsInsideArray({arrays: structure, term: generatedNickname})).toBeTruthy();
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

/*
  This method receives the structure and the nickname(camel case)
  generated with no spaces, and then:
  1. Split the nickname when by camel case
  2. Check if the nickname split is inside all structure arrays
*/
function _substringIsInsideArray({arrays, term}) {
  const separateByCamelCase = term.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
  let termsInsideArrays = true;

  for (const [i, term] of separateByCamelCase.entries()) {
    const checkIfIsInside = arrays[i].some((elementInArray) => term === elementInArray);

    if (!checkIfIsInside) {
      termsInsideArrays = false;
    }
  }

  return termsInsideArrays;
}

function _termIsInsideArray({array, term}) {
  return array.some((elementInArray) => term === elementInArray);
}
function countRepeatedSubstringInString({fullString, stringToCount}) {
  const fullStringToArray = fullString.split('');

  const allRepeatedStrings = fullStringToArray.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});

  return allRepeatedStrings[stringToCount];
}
