const crypto = require("crypto");

const arky = require("./src");
const key = crypto.randomBytes(32);
const testString = "This is the text to be encrypted";
const encrypted = arky.encrypt(testString, key);
console.log("Test String", testString);
console.log("Hash Used", encrypted.hash);
console.log("Hashed Key", encrypted.key);

const decrypted = arky.decrypt(encrypted.hash, key);
console.log("Decrypted text", decrypted);
