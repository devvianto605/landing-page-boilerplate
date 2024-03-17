module.exports = {
  // * Naming Conventions
  'id-length': ['error', { min: 2 }],
  camelcase: 'off',
  '@typescript-eslint/naming-convention': [
    'error',
    // * Global scope function Variable (Class Component) use PascalCase
    {
      selector: 'variable',
      types: ['function'],
      modifiers: ['global'],
      format: ['PascalCase'],
    },
    // * Global Constants (Non Exported) use UPPER_CASE
    {
      selector: 'variable',
      modifiers: ['global'],
      format: ['UPPER_CASE'],
      leadingUnderscore: 'allow',
    },
    // * Exported const variable uses UPPER_CASE or camelCase
    {
      selector: 'variable',
      modifiers: ['const', 'exported'],
      format: ['UPPER_CASE', 'camelCase'],
    },
    // * Boolean variable use PascalCase and prefixed with allowed verb
    {
      selector: 'variable',
      types: ['boolean'],
      format: ['PascalCase'],
      prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      leadingUnderscore: 'allow',
    },
    // * Other variable use camelCase or UPPER_CASE
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
    },
    // * Allows destructured variable to retain original name
    {
      selector: 'variable',
      modifiers: ['destructured'],
      format: null,
    },
    // * Function use camelCase
    {
      selector: 'function',
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
    },
    // * Type use PascalCase
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
    // * Interface names begin with an I
    {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z]',
        match: true,
      },
    },
    // * Type parameters (generics) are prefixed with T
    {
      selector: 'typeParameter',
      format: ['PascalCase'],
      prefix: ['T'],
    },
  ],
};
