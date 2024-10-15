module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',  // Accessibility checks
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-no-target-blank': 'warn',
    'eqeqeq': ['error', 'always'],
    'react/self-closing-comp': 'warn',
  },
};
