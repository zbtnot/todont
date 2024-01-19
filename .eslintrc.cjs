module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [
        {
            'env': {
                'node': true,
            },
            'files': [
                '.eslintrc.{js,cjs}',
            ],
            'parserOptions': {
                'sourceType': 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    root: true,
    parserOptions: {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': ['@typescript-eslint', 'import', 'react'],
    'rules': {
        indent: ['error', 4],
        'max-len': ['error', 120],
        'import/extensions': [
            'error',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
};
