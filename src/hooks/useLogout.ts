// hooks/useLogout.ts
import { useNavigation, CommonActions } from "@react-navigation/native";
import { useAppDispatch } from "./reduxHooks";
import { removeUserFromStorage } from "../store/userSlice/userSlice";
import { Alert } from "react-native";

export function useLogout() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const logout = async () => {
    try {
      await dispatch(removeUserFromStorage());

      // Navega para o Stack Navigator pai e reseta para greetings
      navigation.dispatch(
        CommonActions.reset({
          index: 0, // significa que o usuário não pode voltar para a tela anterior
          routes: [{ name: "greetings" }],
        })
      );
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      Alert.alert("Erro", "Ocorreu um erro ao sair. Tente novamente.");
    }
  };

  const confirmLogout = () => {
    Alert.alert("Sair", "Tem certeza que deseja sair?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        style: "destructive",
        onPress: logout,
      },
    ]);
  };

  return { logout, confirmLogout };
}
