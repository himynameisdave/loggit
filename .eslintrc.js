module.exports = {
  "extends": [
    "himynameisdave/configurations/core",
    "himynameisdave/configurations/node",
    "himynameisdave/configurations/jest",
    "himynameisdave/configurations/typescript",
  ],
  "parserOptions": {
    "sourceType": 'module',
    "tsconfigRootDir": __dirname,
    "project": './tsconfig.json'
  },
  "settings": {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    },
    'import/extensions': ['.ts'],
    'import/resolver': {
      typescript: {
        'alwaysTryTypes': true,
      },
    },
  },
  //  If you are also using the node or import configurations, you'll want these rules off:
  rules: {
    'node/file-extension-in-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  }
};
