import React, { useState, useEffect } from "react";
import { Modal, Pressable, Alert } from "react-native";
import { useTheme } from "styled-components/native";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { editTodo } from "../../store/todoSlice/todoSlice";
import {
  ModalActions,
  ModalButton,
  ModalButtonText,
  ModalContainer,
  ModalInput,
  ModalOverlay,
  ModalTitle,
} from "./styles.EditTodoModal";

interface EditTodoModalProps {
  visible: boolean;
  todo: { id: number; title: string } | null;
  onClose: () => void;
}

export default function EditTodoModal({
  visible,
  todo,
  onClose,
}: EditTodoModalProps) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [editText, setEditText] = useState("");

  // Atualizar texto quando todo muda
  useEffect(() => {
    if (todo) {
      setEditText(todo.title);
    }
  }, [todo]);

  // Limpar texto ao fechar
  useEffect(() => {
    if (!visible) {
      setEditText("");
    }
  }, [visible]);

  const handleConfirmEdit = () => {
    const trimmedText = editText.trim();

    if (trimmedText.length === 0) {
      Alert.alert("Atenção", "O título da tarefa não pode estar vazio.");
      return;
    }

    if (trimmedText.length < 3) {
      Alert.alert("Atenção", "O título deve ter pelo menos 3 caracteres.");
      return;
    }

    if (todo && trimmedText !== todo.title) {
      dispatch(
        editTodo({
          id: todo.id,
          title: trimmedText,
        })
      );
    }

    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const canConfirm = editText.trim().length >= 3;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={{ flex: 1 }} onPress={onClose}>
        <ModalOverlay>
          <Pressable onPress={() => {}}>
            <ModalContainer>
              <ModalTitle>Editar Tarefa</ModalTitle>

              <ModalInput
                value={editText}
                onChangeText={setEditText}
                placeholder="Digite o título da tarefa..."
                multiline={true}
                maxLength={100}
                autoFocus={true}
                placeholderTextColor={theme.colors.text.light}
                returnKeyType="done"
                onSubmitEditing={handleConfirmEdit}
              />

              <ModalActions>
                <ModalButton variant="cancel" onPress={handleCancel}>
                  <ModalButtonText variant="cancel">Cancelar</ModalButtonText>
                </ModalButton>

                <ModalButton
                  variant="confirm"
                  onPress={handleConfirmEdit}
                  disabled={!canConfirm}
                  style={{
                    opacity: canConfirm ? 1 : 0.5,
                  }}
                >
                  <ModalButtonText variant="confirm">Salvar</ModalButtonText>
                </ModalButton>
              </ModalActions>
            </ModalContainer>
          </Pressable>
        </ModalOverlay>
      </Pressable>
    </Modal>
  );
}
