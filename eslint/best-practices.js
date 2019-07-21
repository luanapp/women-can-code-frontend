module.exports = {
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'max-len': [
      'error',
      200,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-inner-declarations': ['error'],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
    ],
    'valid-jsdoc': [
      'error',
      {
        matchDescription: '^[A-Z].*\\.$',
        requireReturn: false,
        prefer: {
          return: 'return',
        },
        preferType: {
          Boolean: 'Boolean',
          Number: 'Number',
          object: 'Object',
          String: 'String',
        },
      },
    ],
  },
};
