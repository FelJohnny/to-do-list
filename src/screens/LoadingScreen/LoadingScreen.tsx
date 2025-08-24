import { GradientBackground } from "../../components/GradientBackground/GradientBackground";
import theme from "../../theme/theme";
import styled from "styled-components/native";

export default function LoadingScreen() {
  return (
    <GradientBackground gradient={theme.gradients.hero}>
      <Container>
        <TextLoading>Carregando..</TextLoading>
      </Container>
    </GradientBackground>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextLoading = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;
