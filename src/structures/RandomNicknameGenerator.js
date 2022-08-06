const InvalidStructureError = require('../errors/InvalidStructureError');
const {randomInt} = require('../utils/random');

/**
 * Class for constructing random or parametrized nicknames.
 */
class RandomNicknameGenerator {
  /**
   * Method for generating random or parameterized nicknames
   * @param {String[]} structure - Array of strings.
   * @return {String} nickName generated - The generated nickname.
   * @throws {InvalidStructureError} - Throws error when provided structure is invalid.
   */
  generate({structure}) {
    return this._generateStructure({structure});
  }

  /**
   * Private mehtod for picking random values on the specified datasets
   * @param {String[]} structure - Array of strings.
   * @return {String} term - Part of the nickname that uses dataset.
   * @throws {InvalidStructureError} - Throws error when provided structure is invalid.
   */
  _generateStructure({structure}) {
    const assertIsArray = Array.isArray(structure);
    if (!assertIsArray) {
      throw new InvalidStructureError('Invalid structure');
    }

    const assertArrayIsEmpty = structure.length === 0;
    if (assertArrayIsEmpty) {
      throw new InvalidStructureError('Empty structure');
    }

    let term = '';

    for (const dataset of structure) {
      const randomIndexInDataset = randomInt({min: 0, max: dataset.length - 1});
      term = term + dataset[randomIndexInDataset] + ' ';
    }

    return term.trim();
  }
}

module.exports = RandomNicknameGenerator;
