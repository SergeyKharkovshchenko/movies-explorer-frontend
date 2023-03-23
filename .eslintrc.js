// eslint-disable-next-line no-multi-assign
module.exports = exports = {
  extends: ['airbnb', 'airbnb/hooks'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    eqeqeq: 'off',
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'globals': {
      require: true,
    },
  },

  // Strict Mode - for ES6, never use strict.
  // strict: [ERROR, "never"],
};
