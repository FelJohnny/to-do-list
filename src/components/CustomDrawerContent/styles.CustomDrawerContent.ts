import styled from "styled-components/native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { User } from "lucide-react-native";

export const ContentScrollView = styled(DrawerContentScrollView).attrs({
  contentContainerStyle: {
    justifyContent: "space-between",
    flexGrow: 1,
  },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ListWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const UserInfoWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.colors.primaryDark + 80};
  border-radius: ${({ theme }) => theme.border.radius.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const UserImage = styled(User)`
  border-radius: ${({ theme }) => theme.border.radius.lg}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-weight: 600;
`;
