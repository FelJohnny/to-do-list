import { CheckCircle } from "lucide-react-native";
import styled from "styled-components/native";

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: ${({ theme }) => theme.layout.headerHeight}px;
  padding: ${({ theme }) => theme.spacing.md}px;

  /* iOS Shadow */
  shadow-color: ${({ theme }) => theme.shadow.small.shadowColor};
  shadow-offset: ${({ theme }) => theme.shadow.small.shadowOffset.width}px
    ${({ theme }) => theme.shadow.small.shadowOffset.height}px;
  shadow-opacity: ${({ theme }) => theme.shadow.small.shadowOpacity};
  shadow-radius: ${({ theme }) => theme.shadow.small.shadowRadius}px;

  /* Android Shadow */
  elevation: ${({ theme }) => theme.shadow.small.elevation};
`;

export const GreetingHeaderWrapper = styled.View`
  gap: 2px;
`;

export const GreetingHeader = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SubTitleHeader = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.small}px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
export const LogoWrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const LogoIconHeader = styled(CheckCircle).attrs(({ theme }) => ({
  size: 25,
  color: theme.colors.success,
}))``;

export const TodoResume = styled.Text`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
