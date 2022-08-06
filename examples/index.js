const generateNicknameSimple = require('./generateNicknameSimple');
const generateNicknameWithCustomStructure = require('./generateNicknameWithCustomStructure');
const generateNicknameWithSeparator = require('./generateNicknameWithSeparator');

console.table([
  generateNicknameSimple,
  generateNicknameWithSeparator,
  generateNicknameWithCustomStructure,
]);
