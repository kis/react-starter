module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  testRegex: '(/spec/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/cypress/'],
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '^actions/(.*)$': '<rootDir>/src/actions/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^helpers/(.*)$': '<rootDir>/src/helpers/$1',
  },
  globals: {
    window: {},
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
};
