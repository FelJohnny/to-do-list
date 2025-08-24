import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ToDoNavigator from "./src/navigations/ToDoNavigator";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme/theme";
import { Provider as ReduxProvider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <ToDoNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}
