import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GreetingsScreen from "../screens/Greetings/Greetings";

type ToDoNavigationParamList = {
  greetings: undefined;
};

const Stack = createNativeStackNavigator<ToDoNavigationParamList>();

export default function ToDoNavigator() {
  return (
    <Stack.Navigator initialRouteName="greetings">
      <Stack.Screen
        name="greetings"
        component={GreetingsScreen}
        options={{ headerShown: false, headerBackVisible: false }}
      />
    </Stack.Navigator>
  );
}
