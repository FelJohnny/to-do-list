import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import GreetingsScreen from "../screens/Greetings/Greetings";
import TodoScreen from "../screens/ToDo/Todo";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  loadUserFromStorage,
  selectUserLoaded,
  selectUserName,
} from "../store/userSlice/userSlice";
import LoadingScreen from "../screens/LoadingScreen/LoadingScreen";
import React from "react";
import { Check } from "lucide-react-native";
import { CustomDrawerContent } from "../components/CustomDrawerContent/CustomDrawerContent";
import theme from "../theme/theme";

export type ToDoNavigationParamList = {
  greetings: undefined;
  AuthenticatedScreens: undefined;
};

const Stack = createNativeStackNavigator<ToDoNavigationParamList>();
const Drawer = createDrawerNavigator();

// Component que agrupa as telas autenticadas no Drawer
function AuthenticatedScreens() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme.colors.secondary,
          width: 280,
        },
        drawerItemStyle: {
          borderRadius: theme.border.radius.md,
          backgroundColor: theme.colors.secondary,
        },
        swipeEnabled: true,
        swipeEdgeWidth: 270,
      }}
    >
      <Drawer.Screen
        name="TodoMain"
        component={TodoScreen}
        options={{
          drawerLabel: "Minhas Tarefas",
          drawerLabelStyle: {
            color: theme.colors.text.primary,
            fontWeight: "600",
          },
          drawerIcon: () => <Check color={theme.colors.text.primary} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function ToDoNavigator() {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectUserName);
  const isUserLoaded = useAppSelector(selectUserLoaded);

  React.useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  // mostra loading enquanto carrega do storage
  if (!isUserLoaded) {
    return <LoadingScreen />;
  }

  // Renderiza diferentes stacks baseado no estado do usuário
  // Isso evita problemas de navegação porque cada estado tem sua própria pilha
  if (!userName) {
    return (
      <Stack.Navigator
        screenOptions={{
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="greetings"
          component={GreetingsScreen}
          options={{
            headerShown: false,
            headerBackVisible: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="AuthenticatedScreens"
        component={AuthenticatedScreens}
        options={{
          headerShown: false,
          gestureEnabled: false,
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
