import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Header from "../../components/ui/Header/Header";
import { TodoContainer } from "./styles.Todo";
import { ToDoNavigationParamList } from "../../navigations/ToDoNavigator";

export type ToDoScreenNavigationProp = NativeStackNavigationProp<
  ToDoNavigationParamList,
  "todo"
>;

export default function TodoScreen() {
  return (
    <TodoContainer>
      <Header />
    </TodoContainer>
  );
}
