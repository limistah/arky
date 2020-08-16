const crypto = require("crypto");

const vectorLength = Buffer.alloc(16, 0);

/**
 * Encrypts a string.
 * @param {string} text The text to be encoded
 * @param {string} key 32 bit string to used as a secret
 * @param {string} algorithm The encryption algorithm to use
 * @return {object} enc Encryption details
 */
function encrypt(
  text,
  key = crypto.randomBytes(32),
  algorithm = "aes-256-cbc"
) {
  const encryptionKey = key || Buffer.from(key);
  let cipher = crypto.createCipheriv(algorithm, encryptionKey, vectorLength);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return {
    hash: encrypted.toString("hex"),
    key: encryptionKey.toString("utf-8"),
  };
}

/**
 * Decrypts an encrypted string
 * @param {string} hash The encrypted text
 * @param {string} encryptionKey The key used to encrypt
 */
function decrypt(hash, encryptionKey) {
  if (!encryptionKey) {
    return false;
  }
  let encryptedHash = Buffer.from(hash, "hex");
  let decipher = crypto.createDecipheriv(
    algorithm,
    encryptionKey,
    vectorLength
  );
  let decrypted = decipher.update(encryptedHash);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

module.exports = {
  encrypt,
  decrypt,
};
