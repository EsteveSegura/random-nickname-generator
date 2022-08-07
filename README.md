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

## Examples
### Basic usage
The Hello World.
```js
const {RandomNicknameGenerator, DATA_SETS} = require('random-nickname-generator');

const nickname = RandomNicknameGenerator.generate({
  structure: [
    DATA_SETS.ANIMALS,
    DATA_SETS.ADJECTIVES,
  ],
  separator: '_',
});
  
console.log(nickname); // => Eagle_Cruel
```
### Own dictionaries
It is also possible to enter your own dictionaries.
```js
const {RandomNicknameGenerator, DATA_SETS} = require('random-nickname-generator');

const nickname = RandomNicknameGenerator.generate({
  structure: [
    ['Sad', 'Happy'],
    DATA_SETS.ANIMALS,
  ]
});

console.log(nickname); // => HappyDolphin
```

### Adding random hash
To add more random values we can add a random hash at the end of the nickname.
```js
const {RandomNicknameGenerator, DATA_SETS} = require('random-nickname-generator');

const nickname = RandomNicknameGenerator.generate({
  structure: [
    DATA_SETS.ANIMALS,
    DATA_SETS.ADJECTIVES,
  ],
  separator: '-',
  randomHash: true,
});

console.log(nickname); // => Falcon-Brave-7c7df3f3245f
```

### Adding time stamp
We can add the timestamp at which the date has been generated.
```js
const {RandomNicknameGenerator, DATA_SETS} = require('random-nickname-generator');

const nickname = RandomNicknameGenerator.generate({
  structure: [
    DATA_SETS.ANIMALS,
    DATA_SETS.ADJECTIVES,
  ],
  separator: '_',
  timeStamp: true,
});

console.log(nickname); // => Fox_Wild_1659870130050
```

### Customize the order of the parameters
So far we have seen that the structure of our nickname is very consistent and maybe we want to change the order of the random hash, maybe we want the timestamp to go before our structure... Let's see how to do it.

There is a list of tokens that we can use to define the order of our nickname.

| Token       | Description                                                         |
|-------------|---------------------------------------------------------------------|
| :structure  | The mix of our dictionaries.                                        |
| :timeStamp  | The timestamp of the current time when the nickname was generated.  |
| :randomHash | randomly generated hash in hex. |

With this list of tokens we can now define the order we want.
```
:timeStamp:randomHash:structure
```
Apply that to the code:
```js
const {RandomNicknameGenerator, DATA_SETS} = require('random-nickname-generator');

const nickname = RandomNicknameGenerator.generate({
  structure: [
    DATA_SETS.ANIMALS,
    DATA_SETS.ADJECTIVES,
  ],
  separator: '_',
  randomHash: true,
  timeStamp: true,
  order: ':timeStamp:randomHash:structure'
});

console.log(nickname); // => '1659870130052_3f1365cb2aa7_Rhinoceros_Lucid'
```
