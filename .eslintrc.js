module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'import'
  ],
  rules: {
    'no-console': 'off',
    'max-len': 'off',
    'import/no-cycle': 'off',
    'react/jsx-filename-extension': 'off'
  },
  ignorePatterns: ['.eslintrc.js']
};
