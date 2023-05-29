module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: false,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coverageDirectory: '<path-to-output-directory>',
};