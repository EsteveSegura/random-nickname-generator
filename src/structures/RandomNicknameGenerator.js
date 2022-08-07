const crypto = require('crypto');
const InvalidStructureError = require('../errors/InvalidStructureError');
const InvalidSeparatorError = require('../errors/InvalidSeparatorError');
const {randomInt} = require('../utils/random');

// TODO: Convert the generate input on options object, and stop receiving all params (define default config)

/**
 * Class for constructing random or parametrized nicknames.
 */
class RandomNicknameGenerator {
  /**
   * Method for generating random or parameterized nicknames
   * @param {String[]} structure - Array of strings.
   * @param {String} separator - How the different elements are separated (default: '').
   * @param {boolean} randomHash - Add random hash in the nickname.
   * @param {boolean} timeStamp - Add the current timestamp in the nickname.
   * @param {String} order - How the elements are going to be displayed in the nickName.
   * @return {String} nickName generated - The generated nickname.
   * @throws {InvalidStructureError} - Throws error when provided structure is invalid.
   * @throws {InvalidSeparatorError} - Throws error when provided separator is invalid.
   */
  generate({structure, separator = '', randomHash = false, timeStamp = false, order = null}) {
    const nicknameBody = this._generateStructure({structure, separator});

    let hash = '';
    if (randomHash) {
      hash = this._generateRandomHash({size: 6});
    }

    let currentTimeStamp = '';
    if (timeStamp) {
      currentTimeStamp = new Date().getTime();
    }
    const nicknameString = this._parseOrder({
      order,
      structure: nicknameBody,
      randomHash: hash,
      timeStamp: currentTimeStamp,
      separator,
    });

    return nicknameString;
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

  /**
   * Private mehtod for generating random bytes and parse to hex.
   * @param {Number} size - Size of the random bytes.
   * @return {String} randomHexString - Random bytes expressed in hex.
   */
  _generateRandomHash({size = 6}) {
    const randomHexString = crypto.randomBytes(size).toString('hex');
    return randomHexString;
  }

  /**
   * Private mehtod for reordering the nickname based in a custom syntax.
   * @param {String} order - How the elements are going to be displayed in the nickName.
   * @param {String[]} structure - Array of strings.
   * @param {boolean} randomHash - Add random hash in the nickname.
   * @param {boolean} timeStamp - Add the current timestamp in the nickname.
   * @param {String} separator - How the different elements are separated (default: '').
   * @return {String} result - Returns the nickname generated with the order expressed (or the default).
   */
  _parseOrder({order, structure, randomHash = null, timeStamp = null, separator = null}) {
    if (order) {
      const splitOrder = order.split(':');
      splitOrder.shift();

      /* eslint-disable prefer-rest-params */
      const argumentsOfFunction = arguments[0];
      const nickNameStructure = splitOrder
          .map((element) => argumentsOfFunction[element] ? argumentsOfFunction[element] : element);

      return nickNameStructure.join(separator);
    }

    return `${structure}${randomHash ? separator : ''}${randomHash}${timeStamp ? separator : ''}${timeStamp}`;
  }
}

module.exports = RandomNicknameGenerator;
