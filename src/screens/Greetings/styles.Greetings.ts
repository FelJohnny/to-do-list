// styles.Greetings.ts
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const GreetingsContainer = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl}px;
`;

export const GreetingsTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.large}px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const GreetingsSubtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-weight: bold;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  color: ${({ theme }) => theme.colors.secondary}95;
`;

export const InputText = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.secondary+80,
  fontWeight: "bold",
  placeholder: "Como você gostaria de ser chamado(a)?",
}))`
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  height: ${({ theme }) => theme.layout.inputHeight}px;
  width: 100%;
  text-align: center;
  border: ${({ theme }) => theme.border.width}px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondary}20;
  border-radius: ${({ theme }) => theme.border.radius.lg}px;
  padding: 0 ${({ theme }) => theme.spacing.sm}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const GreetingsButton = styled.TouchableOpacity<{disabled?: boolean}>`
  height: ${({ theme }) => theme.layout.buttonHeight}px;
  width: 100%;
  border-radius: ${({ theme }) => theme.border.radius.lg}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.sm}px;

  ${({ disabled, theme }) => disabled && `
  background-color: ${theme.colors.input};
  opacity: ${theme.opacity.disabled};
`}
`;

export const GreetingsButtonText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ErrorMessage = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.small}px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;