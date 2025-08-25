import { Button } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  removeUserFromStorage,
  selectUserName,
} from "../../../store/userSlice/userSlice";
import {
  ContainerHeader,
  GreetingHeader,
  GreetingHeaderWrapper,
  LogoIconHeader,
  LogoWrapperHeader,
  SubTitleHeader,
  TodoResume,
} from "./styles.Header";
import { useNavigation } from "@react-navigation/native";
import { ToDoScreenNavigationProp } from "../../../screens/ToDo/Todo";
import { getFullGreeting } from "../../../utils/greetings";
import { selectTodos } from "../../../store/todoSlice/todoSlice";

export default function Header() {
  const userName = useAppSelector(selectUserName);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ToDoScreenNavigationProp>();
  const todos = useAppSelector(selectTodos);

  async function logoff() {
    await dispatch(removeUserFromStorage());
    navigation.navigate("greetings");
  }
  const greetingMessage = getFullGreeting(userName);
  const pendingTodos = todos.filter((todo) => !todo.completed).length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  if (userName)
    return (
      <ContainerHeader>
        <GreetingHeaderWrapper>
          <GreetingHeader>{greetingMessage}</GreetingHeader>
          <SubTitleHeader>Todas as tarefas</SubTitleHeader>
        </GreetingHeaderWrapper>
        <LogoWrapperHeader>
          <LogoIconHeader />
          <TodoResume>
            {pendingTodos}/{completedTodos}
          </TodoResume>
          <Button title="Sair" onPress={logoff} />
        </LogoWrapperHeader>
      </ContainerHeader>
    );
}
