const theme = {
  colors: {
    primary: "#6366f1",
    primaryLight: "#787aebff",
    primaryDark: "#4f46e5",

    secondary: "#f3f4f6",

    success: "#10b981",
    warning: "#f59e0b ",
    danger: "#ef4444",

    input: "#e5e7eb",
  },
   gradients: {
    
    hero: {
      colors: ['#8b7cf6', '#a78bfa']  as [string, string],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 }, // 135deg equivalente
    },
    primary: {
      colors: ['#6366f1', '#8b5cf6'] as [string, string],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    }
  },
  border: {
    radius: "15px",
    color: "#d1d5db",
    width: "1px",
  },
  fontSize:{
    small: "14px",
    medium: "16px",
    large: "24px",
  }
};
export default theme;
export type Theme = typeof theme;
