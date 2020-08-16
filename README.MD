# Arky

A library to encrypt and decrypt string in nodejs

It allows you to set your encryption key and decrypt with the the same encryption key.

## Installation

```bash
npm install arky
// or
yarn add arky
```

## Example

```js
// You don't need this if you have a valid key.
const crypto = require("crypto");

const arky = require("arky");
// You can use whatever as the key
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
// Decrypted text: This is the text to be encrypted
```

## APIs

### encrypt() : {hash, key} | false

**Encrypts a string**

- text _string_ The text to be encoded
- key _string_ 32 bit string to used as a secret. Must be of 24 characters else it returns false
- algorithm _string_ (optional) The encryption algorithm to use. Default to "aes-256-cbc".
- iv _number_ (optional) The iv vector length to use. Default to 16.

The returned object contains a

- hash _string_ the encrypted string
- key _string_ the key used for hashing

### decrypt() : {hash, key}

**Decrypts a string**

- hash _string_ The encrypted string
- key _string_ 32 bit string to used as a secret for encryption
- algorithm _string_ (optional) The encryption algorithm to use. Default to "aes-256-cbc".
- iv _number_ (optional) The iv vector length to use. Default to 16.

Returns a string matching the original text
