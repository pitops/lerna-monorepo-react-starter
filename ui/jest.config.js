const path = require('path')

module.exports = {
  // explicit declaration that the testing environment is intended for browsers
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    'shared',
    path.join(__dirname, 'test')
  ],
  setupTestFrameworkScriptFile: '<rootDir>/test/setup.js',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.(css|sass|scss|less)$': require.resolve('./test/style-mock.js')
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    // Global coverage threshold
    // global: {
    //   statements: 100,
    //   branchers: 100,
    //   lines: 100,
    //   function: 100
    // }
    // sample coverage threshold for specific files
    // './src/shared/utils.js': {
    //   statements: 100,
    //   branchers: 100,
    //   lines: 100,
    //   function: 100
    // }
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
