/* eslint-disable prefer-spread */
const {DATA_SETS} = require('../../../src/datasets/');

describe('datasets', () => {
  it('items in the data set should not be repeated', () => {
    const allValues = Object.values(DATA_SETS);
    const flatAllValues = [].concat.apply([], allValues);
    const repeatedWords = Object.entries(countRepeatedWords(flatAllValues));

    const repeatedWordsWithCountTuple = repeatedWords.filter(([key, value]) => {
      if (value !== 1) {
        return {key, value};
      }
    });

    expect(repeatedWordsWithCountTuple).toHaveLength(0);
  });
});

function countRepeatedWords(arrayWords) {
  const newStr = arrayWords.reduce((acc, rec) => {
    return ({...acc, [rec]: (acc[rec] || 0) + 1});
  }, {});

  return newStr;
}
