module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: ['prettier', 'plugin:react/recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        allowImportExportEverywhere: true,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    settings: {
        react: {
            version: '16.13.1',
        },
    },
    plugins: ['prettier', 'react'],
    rules: {
        'no-duplicate-imports': 'error',
        'prettier/prettier': 'error',
        'no-unused-vars': 'error',
        'no-var': 'error',
        'no-console': 'warn',
        'prefer-const': 0,
        'no-unused-vars': 'warn',
        'react/prop-types': 'off',
    },
};
