module.exports = {
  clearMocks: true,
  collectCoverage: true, // directory to collect coverage data
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>__test__/setup/enzyme.config.js'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\', '<rootDir>/__tests__/setup/'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'identity-obj-proxy'
  }
};
