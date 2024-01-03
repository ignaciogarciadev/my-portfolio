// dotenv.config.js

const dotenv = require('dotenv');
const result = dotenv.config({ path: '.env', safe: true });

if (result.error) {
  throw result.error;
}

console.log(result.parsed);
