<div align=center>
    <h1 align=center>Random Nickname Generator</h1>
    <span><strong>Random Nickname Generator</strong> It is a library to generate random nicknames and also allows some parameterization to be able to have defined structures, separators and more things to come...</span><br />
    <img src="https://img.shields.io/badge/NodeJS-14.13.0-green"> 
    <img src="https://img.shields.io/badge/License-MIT-blue">
    <img src="https://img.shields.io/badge/Version-0.0.1-blue">
</div>

## Installation

```bash
npm i random-nickname-generator
```

## Usage
This library provides datasets that can be arranged as desired in a structure.

### Basic usage
```js
const {RandomNicknameGenerator, DATA_SETS} = require('random-nickname-generator');

const nickname = RandomNicknameGenerator.generate({
  structure: [
    DATA_SETS.ANIMALS,
    DATA_SETS.ADJECTIVES,
  ],
  separator: '_',
});
```
### Own dictionaries
It is also possible to enter your own dictionaries
```js
const {RandomNicknameGenerator, DATA_SETS} = require('random-nickname-generator');

const nickname = RandomNicknameGenerator.generate({
  structure: [
    DATA_SETS.ANIMALS,
    ['Sad', 'Happy'],
  ]
});
```
