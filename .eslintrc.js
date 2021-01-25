module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020

    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-trailing-whitespace': 0,
        'no-explicit-any': 0,
        indent: 'off',
        'no-unused-vars': 0,
        'padded-blocks': 0,
        'no-trailing-spaces': 0,
        'spaced-comment': 0,
        semi: 0,
        'no-multiple-empty': 0,
        'no-multiple-empty-lines': 0,
        'space-before-function-paren': 0,
        'import/no-duplicates': 0,
        'prefer-const': 0,
        'no-prototype-builtins': 0,
        'new-cap': 0,
        eqeqeq: 0,
        'no-use-before-define': 0,
        'no-empty-function': 'off'
    },
    overrides: [{
        files: [
            '**/__tests__/*.{j,t}s?(x)',
            '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
            jest: true
        }
    }]
}
