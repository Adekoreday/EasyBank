module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>__test__/setup/enzyme.config.js'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\', '<rootDir>/__tests__/setup/'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'identity-obj-proxy'
  }
};
