# Arky

A library to encrypt and decrypt text

## Installation

```bash
npm install arky
// or
yarn add arky
```

## APIs

#### Encrypt A Text

```js
const crypto = require("crypto");

const arky = require("./src");
const key = crypto.randomBytes(32);
const testString = "This is the text to be encrypted";
const encrypted = arky.encrypt(testString, key);
console.log("Test String:", testString);
console.log("Hash Used:", encrypted.hash);
console.log("Hashed Key:", encrypted.key);

const decrypted = arky.decrypt(encrypted.hash, key);
console.log("Decrypted text:", decrypted);

// Output
// Test String: This is the text to be encrypted
// Hash Text: 8e12579f462e3bad1b4ab95d6789ccc291bcc17f0307b09f3b0be6d81a29a0e9f3ab9c001bb34d790121ea896b90563f
// Hashed Key: aZ75h8W5uTo798I+iV6vtERjMBLSl+ZkEbTlX0WO7OQ=
//Decrypted text: This is the text to be encrypted
```