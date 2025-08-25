module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "node",

  // Configuração específica para TypeScript
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      { presets: ["babel-preset-expo"] },
    ],
  },

  // Ignora transformação de node_modules exceto os necessários
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|expo|@expo|@reduxjs/toolkit|redux|@react-navigation)/)",
  ],

  // Extensões de arquivo suportadas
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // Padrões de teste
  testMatch: [
    "**/__tests__/**/*.(js|jsx|ts|tsx)",
    "**/*.(test|spec).(js|jsx|ts|tsx)",
  ],

  // Mapeamento de módulos para assets
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
  },

  // Configuração de cobertura
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
};
