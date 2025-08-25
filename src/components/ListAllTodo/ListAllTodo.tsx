// ListAllTodo.tsx
import React, { useState } from "react";
import { Alert } from "react-native";
import { Check, Edit3, Trash2 } from "lucide-react-native";
import { useTheme } from "styled-components/native";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import {
  selectTodos,
  toggleTodo,
  removeTodo,
} from "../../store/todoSlice/todoSlice";
import {
  ContainerTodoList,
  TitleTodoList,
  TodoCheckbox,
  TodoItem,
  TodoText,
  TodoDate,
  TodoActions,
  ActionButton,
  EmptyState,
  EmptyText,
} from "./styles.ListAllTodo";
import { useTodos } from "../../hooks/useTodos";
import { ActivityIndicator } from "react-native";
import EditTodoModal from "../EditModal/EditTodoModal";

export default function ListAllTodo() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);

  //  Estados do modal simplificados
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingTodo, setEditingTodo] = useState<{
    id: number;
    title: string;
  } | null>(null);

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    return b.id - a.id;
  });

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo({ id }));
  };

  const handleDeleteTodo = (id: number) => {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja excluir esta tarefa?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => dispatch(removeTodo({ id })),
        },
      ]
    );
  };

  //  Função simplificada para editar
  const handleEditTodo = (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setEditingTodo({ id, title: todo.title });
      setEditModalVisible(true);
    }
  };

  //  Função para fechar modal
  const handleCloseEditModal = () => {
    setEditModalVisible(false);
    setEditingTodo(null);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  const isOverdue = (dateFinished: string) => {
    if (!dateFinished) return false;
    const today = new Date();
    const dueDate = new Date(dateFinished);
    return (
      dueDate < today &&
      !todos.find((t) => t.dateFinished === dateFinished)?.completed
    );
  };

  const { todosLoaded } = useTodos();

  if (!todosLoaded) {
    return (
      <ContainerTodoList>
        <EmptyState>
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <EmptyText>Carregando tarefas...</EmptyText>
        </EmptyState>
      </ContainerTodoList>
    );
  }

  if (todos.length === 0) {
    return (
      <>
        <TitleTodoList>Minhas Tarefas</TitleTodoList>
        <ContainerTodoList>
          <EmptyState>
            <Check size={48} color={theme.colors.text.light} />
            <EmptyText>
              Nenhuma tarefa ainda.{"\n"}
              Que tal adicionar uma?
            </EmptyText>
          </EmptyState>
        </ContainerTodoList>
      </>
    );
  }

  const pendingTodos = todos.filter((todo) => !todo.completed).length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <>
      <TitleTodoList>
        Minhas Tarefas ({pendingTodos} pendentes, {completedTodos} concluídas)
      </TitleTodoList>

      <ContainerTodoList>
        {sortedTodos.map((todo, index) => {
          const overdue = isOverdue(todo.dateFinished);

          return (
            <TodoItem
              key={todo.id}
              style={{
                borderBottomWidth: index === sortedTodos.length - 1 ? 0 : 1,
              }}
            >
              <TodoCheckbox
                completed={todo.completed}
                onPress={() => handleToggleTodo(todo.id)}
              >
                {todo.completed && <Check size={16} color="white" />}
              </TodoCheckbox>

              <TodoText completed={todo.completed}>
                {todo.title}

                {(todo.dateCreated || todo.dateFinished) && (
                  <TodoDate>
                    {todo.dateCreated && (
                      <>
                        {"\n"}📅 Criado: {formatDate(todo.dateCreated)}
                      </>
                    )}
                    {todo.dateFinished && (
                      <>
                        {"\n"}⏰ Prazo: {formatDate(todo.dateFinished)}
                        {overdue && " (Vencido!)"}
                      </>
                    )}
                    {todo.completed && todo.dateCompleted && (
                      <>
                        {"\n"} Concluído: {formatDate(todo.dateCompleted)}
                      </>
                    )}
                  </TodoDate>
                )}
              </TodoText>

              <TodoActions>
                <ActionButton onPress={() => handleEditTodo(todo.id)} editBtn>
                  <Edit3 size={18} color={theme.colors.secondary} />
                </ActionButton>

                <ActionButton
                  onPress={() => handleDeleteTodo(todo.id)}
                  deleteBtn
                >
                  <Trash2 size={18} color={theme.colors.secondary} />
                </ActionButton>
              </TodoActions>
            </TodoItem>
          );
        })}
      </ContainerTodoList>

      {/*  Componente Modal separado */}
      <EditTodoModal
        visible={editModalVisible}
        todo={editingTodo}
        onClose={handleCloseEditModal}
      />
    </>
  );
}
