import {
  Description,
  GreetingsButton,
  GreetingsButtonText,
  GreetingsContainer,
  GreetingsSubtitle,
  GreetingsTitle,
  InputText,
} from "./styles.Greetings";
import Logo from "../../components/ui/Logo/Logo";
import { GradientBackground } from "../../components/GradientBackground/GradientBackground";
import theme from "../../theme/theme";
import { Keyboard, Pressable } from "react-native";

export default function GreetingsScreen() {
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
          <InputText />
          <GreetingsButton>
            <GreetingsButtonText>Começar</GreetingsButtonText>
          </GreetingsButton>
        </GreetingsContainer>
      </GradientBackground>
    </Pressable>
  );
}
