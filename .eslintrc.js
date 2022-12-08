module.exports = {
    env: {
    browser: true,
    node: true,
    es6: true,
  },
    globals: {
      __PATH_PREFIX__: true,
    },
    extends:`react-app`,
    rules: {
        'no-param-reassign': 'off',
        'import/prefer-default-export': 'off',
        'padded-blocks': 'off',
        'no-multiple-empty-lines': 'off',
        'no-floating-decimal': 'off',
        eqeqeq: 'off',
        camelcase: 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'one-var': 'off',
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        'no-console': 'off',
        'import/no-dynamic-require': 'off',
        'global-require': 'off',
        'no-plusplus': 'off',
      },
      parserOptions: {
        requireConfigFile: false,
        },
  }