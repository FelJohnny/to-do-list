import React, { useState } from "react";
import { Alert } from "react-native";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useTodos } from "../../hooks/useTodos";
import { addTodo } from "../../store/todoSlice/todoSlice";
import {
  AddButton,
  AddIcon,
  InputTextWrapper,
  InputText,
} from "./styles.AddToDo";

export default function AddToDo() {
  const dispatch = useAppDispatch();
  const { userName } = useTodos();
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (!userName) {
      Alert.alert("Erro", "Usuário não encontrado.");
      return;
    }

    const trimmedText = todoText.trim();

    if (trimmedText.length === 0) return;

    if (trimmedText.length < 3) {
      Alert.alert("Atenção", "A tarefa deve ter pelo menos 3 caracteres.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: trimmedText,
      completed: false,
      dateCreated: new Date().toISOString().split("T")[0],
      dateCompleted: "",
      dateFinished: "",
    };

    dispatch(addTodo(newTodo));
    setTodoText("");
  };

  const disabled = todoText.trim().length < 3;

  return (
    <InputTextWrapper>
      <InputText
        value={todoText}
        onChangeText={setTodoText}
        maxLength={100}
        returnKeyType="done"
        onSubmitEditing={handleAddTodo}
      />

      <AddButton disabled={disabled} onPress={handleAddTodo}>
        <AddIcon disabled={disabled} />
      </AddButton>
    </InputTextWrapper>
  );
}
