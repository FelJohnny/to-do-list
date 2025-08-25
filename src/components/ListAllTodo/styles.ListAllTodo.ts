import styled from "styled-components/native";

export const ContainerTodoList = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.border.radius.lg}px;
  margin: 0 ${({ theme }) => theme.spacing.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
  overflow: hidden; /* Para border-radius funcionar nos filhos */

    /* iOS Shadow */
    shadow-color: ${({ theme }) => theme.shadow.small.shadowColor};
    shadow-offset: ${({ theme }) => theme.shadow.small.shadowOffset.width}px
        ${({ theme }) => theme.shadow.small.shadowOffset.height}px;
    shadow-opacity: ${({ theme }) => theme.shadow.small.shadowOpacity};
    shadow-radius: ${({ theme }) => theme.shadow.small.shadowRadius}px;
  
  /* Android Shadow */
  elevation: ${({ theme }) => theme.shadow.small.elevation};
`;

export const TitleTodoList = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  margin: 0 ${({ theme }) => theme.spacing.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: bold;
`;

export const TodoItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.input};
  min-height: 60px;
`;

export const TodoCheckbox = styled.TouchableOpacity<{ completed?: boolean }>`
  height: 24px;
  width: 24px;
  border-radius: ${({ theme }) => theme.border.radius.sm}px;
  margin-right: ${({ theme }) => theme.spacing.md}px;
  border: 2px solid ${({ theme, completed }) => 
    completed ? theme.colors.success : theme.colors.primary
  };
  background-color: ${({ theme, completed }) => 
    completed ? theme.colors.success : 'transparent'
  };
  align-items: center;
  justify-content: center;
`;

export const TodoText = styled.Text<{ completed?: boolean }>`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  color: ${({ theme, completed }) => 
    completed ? theme.colors.text.light : theme.colors.text.primary
  };
  text-decoration-line: ${({ completed }) => 
    completed ? 'line-through' : 'none'
  };
  font-weight: 500;
`;

export const TodoDate = styled.Text<{ overdue?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  color: ${({ theme, overdue }) => 
    overdue ? theme.colors.danger : theme.colors.text.secondary
  };
  margin-top: ${({ theme }) => theme.spacing.xs}px;
`;

export const TodoActions = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing.sm}px;
`;

export const ActionButton = styled.TouchableOpacity<{ editBtn?: boolean, deleteBtn?: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.sm}px;
  margin-left: ${({ theme }) => theme.spacing.xs}px;
  background-color: ${({ theme, editBtn, deleteBtn }) => 
    editBtn ? '#4b8ae7ff' : deleteBtn ? theme.colors.danger : theme.colors.primary
  };
`;

export const EmptyState = styled.View`
  padding: ${({ theme }) => theme.spacing.xl}px;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;