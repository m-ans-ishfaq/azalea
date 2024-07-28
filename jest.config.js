/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': './src/$1'
  },
  testMatch: [
    "**/tests/**/*.test.ts",
    "**/tests/**/*.spec.ts"
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'node']
};