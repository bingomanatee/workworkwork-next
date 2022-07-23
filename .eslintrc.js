const scripts = require('@hpe/project-scripts');

scripts.eslint.rules = {
  ...scripts.eslint.rules, 'max-len': [1, 120],
  'camelcase': 'warn',
  'react/jsx-props-no-spreading': 'warn',
  'react/prop-types': 'off',
};
module.exports = scripts.eslint;

