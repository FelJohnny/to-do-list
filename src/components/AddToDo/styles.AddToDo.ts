import { Plus } from "lucide-react-native";
import styled from "styled-components/native";

export const InputTextWrapper = styled.View`
    flex-direction: row;
    align-items: center; 
    gap: ${({ theme }) => theme.spacing.sm}px; 
    padding: ${({ theme }) => theme.spacing.md}px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.input};
    border-radius: ${({ theme }) => theme.border.radius.md}px;
    margin: ${({ theme }) => theme.spacing.md}px;
    background-color: ${({ theme }) => theme.colors.secondary};
    /* iOS Shadow */
    shadow-color: ${({ theme }) => theme.shadow.small.shadowColor};
    shadow-offset: ${({ theme }) => theme.shadow.small.shadowOffset.width}px
      ${({ theme }) => theme.shadow.small.shadowOffset.height}px;
    shadow-opacity: ${({ theme }) => theme.shadow.small.shadowOpacity};
    shadow-radius: ${({ theme }) => theme.shadow.small.shadowRadius}px;
    /* Android Shadow */
    elevation: ${({ theme }) => theme.shadow.small.elevation};
`;

export const InputText = styled.TextInput.attrs(({ theme }) => ({
    placeholder: "Adicione uma nova tarefa...",
    placeholderTextColor: `${theme.colors.text.primary}80`, 
}))`
    flex: 1;
    height: ${({ theme }) => theme.layout.inputHeight}px; 
    padding: ${({ theme }) => theme.spacing.md}px;
    border: 1px solid ${({ theme }) => theme.colors.input};
    border-radius: ${({ theme }) => theme.border.radius.md}px;
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.fontSize.medium}px; 
    font-weight: 500; 
`;

export const AddButton = styled.TouchableOpacity<{ disabled?: boolean }>`
  width: ${({ theme }) => theme.layout.inputHeight}px; 
  height: ${({ theme }) => theme.layout.inputHeight}px; 
  border-radius: ${({ theme }) => theme.border.radius.md}px;
  background-color: ${({ theme, disabled }) => 
    disabled ? theme.colors.primary+80 : theme.colors.primary
  };
  align-items: center;
  justify-content: center;
  opacity: ${({ theme, disabled }) => disabled ? theme.opacity.disabled : 1}; 
`;

export const AddIcon = styled(Plus).attrs<{ disabled?: boolean }>(({ theme, disabled }) => ({
  size: 24,
  color: disabled ? theme.colors.text.secondary : theme.colors.text.white,
}))<{ disabled?: boolean }>``;