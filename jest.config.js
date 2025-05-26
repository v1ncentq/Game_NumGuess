module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1' // Для абсолютных путей (если нужно)
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(whatwg-url)/)" // Дозволяє трансформувати whatwg-url
  ]
};