const { randomBytes } =  require('crypto');

/***
 * * You can use this file to generate a secret for your JWT Authentication Token.
 * *
 * * 1. Open your terminal and type de command below:
 * * node ./helpers/genkey.js
 * *
****/

const generatedSecret = randomBytes(32).toString('hex');
console.log(`\nYour Secret Key: ${generatedSecret}\n`);