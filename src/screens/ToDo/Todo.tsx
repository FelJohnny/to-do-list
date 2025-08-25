import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Header from "../../components/ui/Header/Header";
import { TodoContainer } from "./styles.Todo";
import { ToDoNavigationParamList } from "../../navigations/ToDoNavigator";
import AddToDo from "../../components/AddToDo/AddToDo";
import ListAllTodo from "../../components/ListAllTodo/ListAllTodo";

export type ToDoScreenNavigationProp = NativeStackNavigationProp<
  ToDoNavigationParamList,
  "todo"
>;

export default function TodoScreen() {
  return (
    <TodoContainer>
      <Header />
      <AddToDo />
      <ListAllTodo />
    </TodoContainer>
  );
}
