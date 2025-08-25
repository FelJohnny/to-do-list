// theme/theme.ts
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const theme = {
  colors: {
    primary: "#059669", 
    primaryLight: "#d1fae5", 
    primaryDark: "#047857", 

    secondary: "#f8fafc", 

    // Cores funcionais universais
    success: "#10b981", 
    warning: "#f59e0b", 
    danger: "#ef4444", 

    input: "#e2e8f0", // Cinza azulado claro
    
    text: {
      primary: "#1e293b", // Cinza escuro azulado
      secondary: "#64748b", // Cinza médio
      light: "#94a3b8", // Cinza claro
      white: "#ffffff",
    },


  },

  gradients: {
    // ✅ Gradiente principal: Verde-azulado suave
    hero: {
      colors: ['#0891b2', '#059669'] as const, // Ciano para verde
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
    
    // ✅ Gradiente alternativo: Neutro e elegante
    primary: {
      colors: ['#64748b', '#475569'] as const, // Cinzas azulados
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },

    // ✅ Gradiente suave para cards
    soft: {
      colors: ['#f1f5f9', '#e2e8f0'] as const, // Cinzas clarissimos
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
    color: "#cbd5e1", // Cinza azulado mais suave
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

  layout: {
    containerPadding: width * 0.05,
    screenPadding: 20,
    buttonHeight: Math.max(height * 0.06, 48),
    inputHeight: Math.max(height * 0.07, 56),
    logoSize: Math.min(width * 0.25, 100),
    headerHeight: Math.max(height * 0.10, 64),
    isSmallScreen: width < 350,
    isMediumScreen: width >= 350 && width < 400,
    isLargeScreen: width >= 400,
    modalWidth: width * 0.8,
  },

  shadow: {
    small: {
      shadowColor: "#1e293b", // Cinza escuro para sombra mais natural
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    medium: {
      shadowColor: "#1e293b",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 6.27,
      elevation: 10,
    },
    large: {
      shadowColor: "#1e293b",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.15,
      shadowRadius: 10.32,
      elevation: 15,
    },
  },

  opacity: {
    disabled: 0.5,
    overlay: 0.6,
    subtle: 0.8,
    ghost: 0.1,
  },
} as const; 

export default theme;
export type Theme = typeof theme;