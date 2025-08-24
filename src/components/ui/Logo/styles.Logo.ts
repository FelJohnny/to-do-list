// styles.Logo.ts
import { CheckCircle } from "lucide-react-native";
import styled from "styled-components/native";

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 70px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  width: 70px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.secondary}45;
`;

export const LogoIcon = styled(CheckCircle).attrs(({ theme }) => ({
  size: 40,
  color: theme.colors.secondary,
}))``;