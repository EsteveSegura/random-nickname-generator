const InvalidStructureError = require('../../../src/errors/InvalidStructureError');
const RandomNicknameGenerator = require('../../../src/structures/RandomNicknameGenerator');
const {DATA_SETS} = require('../../../src/datasets');

describe('RandomNicknameGenerator', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should generate nickname separated (custom separator), having two words', () => {
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
    expect(_countRepeatedSubstringInString({fullString: generatedNickname,
      stringToCount: separator})).toBe(structure.length - 1);

    const firstWordInNickname = generatedNickname.split(separator)[0];
    expect(_termIsInsideArray({array: DATA_SETS.ANIMALS, term: firstWordInNickname})).toBeTruthy();

    const secondWordInNickname = generatedNickname.split(separator)[1];
    expect(_termIsInsideArray({array: DATA_SETS.JOBS, term: secondWordInNickname})).toBeTruthy();

    expect(typeof generatedNickname).toBe('string');
  });

  it('should generate nickname separated (custom separator), having two words and hex randomHash', () => {
    const structure = [
      DATA_SETS.ANIMALS,
      DATA_SETS.JOBS,
    ];
    const separator = '-';
    const randomHash = true;

    const randomNickname = new RandomNicknameGenerator();
    const generatedNickname = randomNickname.generate({structure, separator, randomHash});

    expect(Array.isArray(structure)).toBeTruthy();
    expect(Array.isArray(structure[0])).toBeTruthy();
    expect(Array.isArray(structure[1])).toBeTruthy();
    expect(structure).toHaveLength(2);
    expect(generatedNickname.split(separator)).toHaveLength(3);
    expect(_countRepeatedSubstringInString({fullString: generatedNickname,
      stringToCount: separator})).toBe(2);

    const firstWordInNickname = generatedNickname.split(separator)[0];
    expect(_termIsInsideArray({array: DATA_SETS.ANIMALS, term: firstWordInNickname})).toBeTruthy();

    const secondWordInNickname = generatedNickname.split(separator)[1];
    expect(_termIsInsideArray({array: DATA_SETS.JOBS, term: secondWordInNickname})).toBeTruthy();

    const thirdWordInNickname = generatedNickname.split(separator)[2];
    expect(thirdWordInNickname).toHaveLength(12);
    expect(_isHex(thirdWordInNickname)).toBeTruthy();

    expect(typeof generatedNickname).toBe('string');
  });

  it('should generate nickname separated (custom separator), having two words and current date timestamp', () => {
    const structure = [
      DATA_SETS.ANIMALS,
      DATA_SETS.JOBS,
    ];
    const separator = '-';
    const timeStamp = true;

    const randomNickname = new RandomNicknameGenerator();
    const generatedNickname = randomNickname.generate({structure, separator, timeStamp});

    expect(Array.isArray(structure)).toBeTruthy();
    expect(Array.isArray(structure[0])).toBeTruthy();
    expect(Array.isArray(structure[1])).toBeTruthy();
    expect(structure).toHaveLength(2);
    expect(generatedNickname.split(separator)).toHaveLength(3);
    expect(_countRepeatedSubstringInString({fullString: generatedNickname,
      stringToCount: separator})).toBe(2);

    const firstWordInNickname = generatedNickname.split(separator)[0];
    expect(_termIsInsideArray({array: DATA_SETS.ANIMALS, term: firstWordInNickname})).toBeTruthy();

    const secondWordInNickname = generatedNickname.split(separator)[1];
    expect(_termIsInsideArray({array: DATA_SETS.JOBS, term: secondWordInNickname})).toBeTruthy();

    const thirdWordInNickname = generatedNickname.split(separator)[2];
    const convertToDate = new Date(parseInt(thirdWordInNickname));
    expect(convertToDate instanceof Date).toBeTruthy();
    expect(!isNaN(convertToDate)).toBeTruthy();

    expect(typeof generatedNickname).toBe('string');
  });

  /* eslint-disable max-len */
  it('should generate nickname separated (custom separator), having two words, current date timestamp and randomHash', () => {
    const structure = [
      DATA_SETS.ANIMALS,
      DATA_SETS.JOBS,
    ];
    const separator = '-';
    const timeStamp = true;
    const randomHash = true;

    const randomNickname = new RandomNicknameGenerator();
    const generatedNickname = randomNickname.generate({structure, separator, timeStamp, randomHash});

    expect(Array.isArray(structure)).toBeTruthy();
    expect(Array.isArray(structure[0])).toBeTruthy();
    expect(Array.isArray(structure[1])).toBeTruthy();
    expect(structure).toHaveLength(2);
    expect(generatedNickname.split(separator)).toHaveLength(4);
    expect(_countRepeatedSubstringInString({fullString: generatedNickname,
      stringToCount: separator})).toBe(3);

    const firstWordInNickname = generatedNickname.split(separator)[0];
    expect(_termIsInsideArray({array: DATA_SETS.ANIMALS, term: firstWordInNickname})).toBeTruthy();

    const secondWordInNickname = generatedNickname.split(separator)[1];
    expect(_termIsInsideArray({array: DATA_SETS.JOBS, term: secondWordInNickname})).toBeTruthy();

    const thirdWordInNickname = generatedNickname.split(separator)[2];
    expect(thirdWordInNickname).toHaveLength(12);
    expect(_isHex(thirdWordInNickname)).toBeTruthy();

    const fourWordInNickname = generatedNickname.split(separator)[3];
    const convertToDate = new Date(parseInt(fourWordInNickname));
    expect(convertToDate instanceof Date).toBeTruthy();
    expect(!isNaN(convertToDate)).toBeTruthy();

    expect(typeof generatedNickname).toBe('string');
  });

  /* eslint-disable max-len */
  it('should generate nickname separated (custom separator), having two words, current date timestamp and randomHash, with custom order', () => {
    const structure = [
      DATA_SETS.ANIMALS,
      DATA_SETS.JOBS,
    ];
    const separator = '-';
    const timeStamp = true;
    const randomHash = true;
    const order = ':randomHash:structure:timeStamp';

    const randomNickname = new RandomNicknameGenerator();
    const generatedNickname = randomNickname.generate({structure, separator, timeStamp, randomHash, order});

    expect(Array.isArray(structure)).toBeTruthy();
    expect(Array.isArray(structure[0])).toBeTruthy();
    expect(Array.isArray(structure[1])).toBeTruthy();
    expect(structure).toHaveLength(2);
    expect(generatedNickname.split(separator)).toHaveLength(4);
    expect(_countRepeatedSubstringInString({fullString: generatedNickname,
      stringToCount: separator})).toBe(3);

    const firstWordInNickname = generatedNickname.split(separator)[0];
    expect(firstWordInNickname).toHaveLength(12);
    expect(_isHex(firstWordInNickname)).toBeTruthy();

    const secondWordInNickname = generatedNickname.split(separator)[1];
    expect(_termIsInsideArray({array: DATA_SETS.ANIMALS, term: secondWordInNickname})).toBeTruthy();

    const thirdWordInNickname = generatedNickname.split(separator)[2];
    expect(_termIsInsideArray({array: DATA_SETS.JOBS, term: thirdWordInNickname})).toBeTruthy();

    const fourWordInNickname = generatedNickname.split(separator)[3];
    const convertToDate = new Date(parseInt(fourWordInNickname));
    expect(convertToDate instanceof Date).toBeTruthy();
    expect(!isNaN(convertToDate)).toBeTruthy();

    const splitOrderSintax = order.split(':');
    expect(splitOrderSintax).toHaveLength(4);
    expect(splitOrderSintax[0]).toBe('');
    expect(splitOrderSintax[1]).toBe('randomHash');
    expect(splitOrderSintax[2]).toBe('structure');
    expect(splitOrderSintax[3]).toBe('timeStamp');

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
function _countRepeatedSubstringInString({fullString, stringToCount}) {
  const fullStringToArray = fullString.split('');

  const allRepeatedStrings = fullStringToArray.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});

  return allRepeatedStrings[stringToCount];
}
function _isHex(input) {
  const parseHexToInt = parseInt(input, 16);
  const assertCanParseBackToString = parseHexToInt.toString(16) === input;

  return assertCanParseBackToString;
}
