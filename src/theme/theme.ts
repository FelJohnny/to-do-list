// theme/theme.ts
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const theme = {
  colors: {
    primary: "#6366f1",
    primaryLight: "#787aebff",
    primaryDark: "#4f46e5",

    secondary: "#f3f4f6",

    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",

    input: "#e5e7eb",
    
    text: {
      primary: "#1f2937",
      secondary: "#6b7280",
      light: "#9ca3af",
      white: "#ffffff",
    }
  },

  gradients: {
    hero: {
      colors: ['#8b7cf6', '#a78bfa'] as const, 
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
    primary: {
      colors: ['#6366f1', '#8b5cf6'] as const,
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    }
  },

  // Espaçamento padronizado
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  border: {
    radius: {
      sm: 8,
      md: 12,
      lg: 16,
      xl: 20,
    },
    color: "#d1d5db",
    width: 1,
  },

  // FontSize responsivo
  fontSize: {
    xs: width < 350 ? 10 : 12,
    small: width < 350 ? 12 : 14,
    medium: width < 350 ? 14 : 16,
    large: width < 350 ? 18 : 20,
    xl: width < 350 ? 20 : 24,
    xxl: width < 350 ? 24 : 32,
    title: width < 350 ? 28 : 36,
  },

  // ✅ Layouts responsivos
  layout: {
    // Containers
    containerPadding: width * 0.05, // 5% da largura
    screenPadding: 20,
    
    // Componentes
    buttonHeight: Math.max(height * 0.06, 48), // Min 48, ou 6% da altura
    inputHeight: Math.max(height * 0.07, 56),  // Min 56, ou 7% da altura
    logoSize: Math.min(width * 0.25, 100),     // Max 100, ou 25% da largura
    headerHeight: Math.max(height * 0.10, 64), // Min 64, ou 10% da altura

    // Breakpoints
    isSmallScreen: width < 350,
    isMediumScreen: width >= 350 && width < 400,
    isLargeScreen: width >= 400,
  },

  // Shadows (para elevation)
  shadow: {
    small: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 6.27,
      elevation: 10,
    },
    large: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.25,
      shadowRadius: 10.32,
      elevation: 15,
    },
  },

  // Opacidades padronizadas
  opacity: {
    disabled: 0.5,
    overlay: 0.6,
    subtle: 0.8,
    ghost: 0.1,
  },
} as const; 

export default theme;
export type Theme = typeof theme;