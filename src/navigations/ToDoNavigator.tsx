import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

export type ToDoNavigationParamList = {
  greetings: undefined;
  todo: undefined;
};

const Stack = createNativeStackNavigator<ToDoNavigationParamList>();

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
  return (
    <Stack.Navigator
      initialRouteName={userName ? "todo" : "greetings"}
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
      <Stack.Screen
        name="todo"
        component={TodoScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
