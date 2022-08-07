const generateNicknameSimple = require('./generateNicknameSimple');
const generateNicknameWithCustomStructure = require('./generateNicknameWithCustomStructure');
const generateNicknameWithSeparator = require('./generateNicknameWithSeparator');
const generateNicknameWithRandomHash = require('./generateNicknameWithRandomHash');
const generateNicknameWithCurrentTimestamp = require('./generateNicknameWithCurrentTimestamp');
const generateNicknameWithCustomOrder = require('./generateNicknameWithCustomOrder');
const generateNicknameWithAllParams = require('./generateNicknameWithAllParams');

console.table([
  generateNicknameSimple,
  generateNicknameWithSeparator,
  generateNicknameWithCustomStructure,
  generateNicknameWithRandomHash,
  generateNicknameWithCurrentTimestamp,
  generateNicknameWithCustomOrder,
  generateNicknameWithAllParams,
]);
