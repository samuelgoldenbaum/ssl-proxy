module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules:  {
        'no-console': 'off',
        'max-len': 'off',
        'import/no-cycle': 'off',
    },
    ignorePatterns: ['.eslintrc.js']
};
