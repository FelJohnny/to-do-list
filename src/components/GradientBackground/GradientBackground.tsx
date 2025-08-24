// components/ui/Logo/GradientBackground/GradientBackground.tsx
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ViewStyle } from "react-native";

type GradientBackgroundProps = {
  gradient: {
    colors: readonly [string, string, ...string[]];
    start: { x: number; y: number };
    end: { x: number; y: number };
  };
  style?: ViewStyle;
  children?: React.ReactNode;
};

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  gradient,
  style,
  children,
}) => {
  return (
    <LinearGradient
      colors={gradient.colors}
      start={gradient.start}
      end={gradient.end}
      style={[{ flex: 1 }, style]}
    >
      {children}
    </LinearGradient>
  );
};
