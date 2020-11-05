module.exports = {
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    "@/(.*)$": "<rootDir>/src/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
  collectCoverageFrom: ["**/src/**/*.js"],
  coverageReporters: ["lcov"],
  testPathIgnorePatterns: [
    `node_modules`,
    `<rootDir>/.next/`,
    `<rootDir>.*/public`,
    `<rootDir>.*/tests/e2e`
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "\\.(yml|yaml)$": "jest-yaml-transform"
  },
  globals: {
    __PATH_PREFIX__: ``
  },
  testURL: `http://localhost`
}
