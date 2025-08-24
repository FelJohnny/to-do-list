import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";


export const GreetingsContainer = styled(SafeAreaView)`
flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
  
`;

export const GreetingsTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: bold;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const GreetingsSubtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.secondary}95;
`;



export const InputText = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.secondary+80,
  fontWeight: "bold",
  placeholder: "Como você gostaria de ser chamado?",
}))`
  font-size: 15px;
  height: 50px;
  width: 100%;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondary}20;
  border-radius:${({ theme }) => theme.border.radius};
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const GreetingsButton = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  border-radius:${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const GreetingsButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;