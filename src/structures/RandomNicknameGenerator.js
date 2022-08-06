const InvalidStructureError = require('../errors/InvalidStructureError');
const InvalidSeparatorError = require('../errors/InvalidSeparatorError');
const {randomInt} = require('../utils/random');

/**
 * Class for constructing random or parametrized nicknames.
 */
class RandomNicknameGenerator {
  /**
   * Method for generating random or parameterized nicknames
   * @param {String[]} structure - Array of strings.
   * @param {String} separator - How the different elements are separated (default: '')
   * @return {String} nickName generated - The generated nickname.
   * @throws {InvalidStructureError} - Throws error when provided structure is invalid.
   * @throws {InvalidSeparatorError} - Throws error when provided separator is invalid.
   */
  generate({structure, separator = ''}) {
    return this._generateStructure({structure, separator});
  }

  /**
   * Private mehtod for picking random values on the specified datasets
   * @param {String[]} structure - Array of strings.
   * @param {String} separator - How the different elements are separated (default: '')
   * @return {String} term - Part of the nickname that uses dataset.
   * @throws {InvalidStructureError} - Throws error when provided structure is invalid.
   * @throws {InvalidSeparatorError} - Throws error when provided separator is invalid.
   */
  _generateStructure({structure, separator = ''}) {
    const assertSeparatorIsString = typeof separator === 'string';
    if (!assertSeparatorIsString) {
      throw new InvalidSeparatorError('Separator is not a string');
    }

    const assertIsArray = Array.isArray(structure);
    if (!assertIsArray) {
      throw new InvalidStructureError('Invalid structure');
    }

    const assertArrayIsEmpty = structure.length === 0;
    if (assertArrayIsEmpty) {
      throw new InvalidStructureError('Empty structure');
    }

    let term = '';

    for (const [i, dataset] of structure.entries()) {
      const randomIndexInDataset = randomInt({min: 0, max: dataset.length - 1});
      const isTheLastSeparator = i === structure.length - 1;

      term = term + dataset[randomIndexInDataset] + (!isTheLastSeparator ? separator : '');
    }

    return term.trim();
  }
}

module.exports = RandomNicknameGenerator;
