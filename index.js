const requireOptional = require('optional-require')(require);

const result = requireOptional('nonexistent.js');
console.log('Result', result); // undefined in node, error in bun
