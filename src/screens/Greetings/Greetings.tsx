import React from "react";
import theme from "../../theme/theme";
import {
  Description,
  ErrorMessage,
  GreetingsButton,
  GreetingsButtonText,
  GreetingsContainer,
  GreetingsSubtitle,
  GreetingsTitle,
  InputText,
} from "./styles.Greetings";
import Logo from "../../components/ui/Logo/Logo";
import { GradientBackground } from "../../components/GradientBackground/GradientBackground";
import { Keyboard, Pressable } from "react-native";
import { useAppDispatch } from "../../hooks/reduxHooks";
import {
  saveUserToStorage,
  setUserName,
} from "../../store/userSlice/userSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ToDoNavigationParamList } from "../../navigations/ToDoNavigator";
import { useNavigation } from "@react-navigation/native";

type GreetingsScreenNavigationProp = NativeStackNavigationProp<
  ToDoNavigationParamList,
  "greetings"
>;

export default function GreetingsScreen() {
  const limitChar = 2;
  const [name, setName] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  const [erroMessage, setErroMessage] = React.useState(false);
  const navigation = useNavigation<GreetingsScreenNavigationProp>();
  const dispatch = useAppDispatch();

  //validador input
  React.useEffect(() => {
    if (name.length < limitChar) {
      setDisabled(true);
      setErroMessage(true);
    } else {
      setDisabled(false);
      setErroMessage(false);
    }
  }, [name]);

  async function saveUser() {
    try {
      dispatch(setUserName(name));
      await dispatch(saveUserToStorage(name));
      navigation.navigate("todo");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <GradientBackground gradient={theme.gradients.hero}>
        <GreetingsContainer>
          <Logo />
          <GreetingsTitle>To do List</GreetingsTitle>
          <GreetingsSubtitle>
            Bem-vindo ao seu organizador pessoal!
          </GreetingsSubtitle>
          <Description>
            Transforme seus objetivos em realizações. Organize suas tarefas de
            forma simples e eficiente.
          </Description>
          <InputText
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
          />
          {erroMessage && (
            <ErrorMessage>Insira ao menos {limitChar} caracteres.</ErrorMessage>
          )}
          <GreetingsButton disabled={disabled} onPress={saveUser}>
            <GreetingsButtonText>Começar</GreetingsButtonText>
          </GreetingsButton>
        </GreetingsContainer>
      </GradientBackground>
    </Pressable>
  );
}
