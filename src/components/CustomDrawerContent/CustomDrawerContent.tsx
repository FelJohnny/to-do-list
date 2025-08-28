import {
  DrawerContentComponentProps,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  ContentScrollView,
  ListWrapper,
  Subtitle,
  UserImage,
  UserInfoWrapper,
  UserName,
} from "./styles.CustomDrawerContent";
import { useLogout } from "../../hooks/useLogout";
import { LogOut } from "lucide-react-native";
import theme from "../../theme/theme";
import { useSelector } from "react-redux";
import { selectUserName } from "../../store/userSlice/userSlice";
export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { confirmLogout } = useLogout();
  const userName = useSelector(selectUserName);

  return (
    <ContentScrollView>
      <ListWrapper>
        <UserInfoWrapper>
          <UserImage />
          <UserName> {userName}</UserName>
        </UserInfoWrapper>
        <Subtitle>Telas</Subtitle>
        <DrawerItemList {...props} />
      </ListWrapper>
      <DrawerItem
        label="Sair"
        onPress={confirmLogout}
        icon={({ color, size }) => <LogOut size={size} color="#dc3545" />}
        labelStyle={{
          color: "#dc3545",
          fontWeight: "600",
        }}
        style={{
          backgroundColor: "rgba(220, 53, 69, 0.1)",
          borderRadius: theme.border.radius.md,
        }}
      />
    </ContentScrollView>
  );
};
