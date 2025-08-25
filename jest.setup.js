// jest.setup.js
// Mock do AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve()),
  removeItem: jest.fn(() => Promise.resolve()),
}));

// Mock básico para evitar erros de módulos não encontrados
jest.mock("expo-linear-gradient", () => ({
  LinearGradient: "LinearGradient",
}));

jest.mock("lucide-react-native", () => ({
  Plus: "Plus",
  Check: "Check",
  X: "X",
  Edit: "Edit",
  Trash2: "Trash2",
}));
