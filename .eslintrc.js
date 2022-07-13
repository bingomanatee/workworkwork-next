const scripts = require('@hpe/project-scripts');

scripts.rules = { ...scripts.rules, 'max-len': ['warning', 120] };
module.exports = scripts.eslint;

