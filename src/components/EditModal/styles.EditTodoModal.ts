import styled from "styled-components/native";

export const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const ModalContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.border.radius.lg}px;
  padding: ${({ theme }) => theme.spacing.xl}px;
  width: ${({theme})=>theme.layout.modalWidth}px;

  /* iOS Shadow */
  shadow-color: ${({ theme }) => theme.shadow.large.shadowColor};
  shadow-offset: ${({ theme }) => theme.shadow.large.shadowOffset.width}px ${({ theme }) => theme.shadow.large.shadowOffset.height}px;
  shadow-opacity: ${({ theme }) => theme.shadow.large.shadowOpacity};
  shadow-radius: ${({ theme }) => theme.shadow.large.shadowRadius}px;
  
  /* Android Shadow */
  elevation: ${({ theme }) => theme.shadow.large.elevation};
`;

export const ModalTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const ModalInput = styled.TextInput`
  border-radius: ${({ theme }) => theme.border.radius.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.colors.input};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
  height: ${({ theme }) => theme.layout.inputHeight}px;
`;

export const ModalActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md}px;
`;

export const ModalButton = styled.TouchableOpacity<{ 
  variant?: 'cancel' | 'confirm';
  disabled?: boolean;
}>`
  flex: 1;
  height: ${({ theme }) => theme.layout.buttonHeight}px;
  border-radius: ${({ theme }) => theme.border.radius.md}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, variant, disabled }) => {
    if (disabled) return theme.colors.input;
    if (variant === 'cancel') return theme.colors.input;
    return theme.colors.primary;
  }};
`;

export const ModalButtonText = styled.Text<{ 
  variant?: 'cancel' | 'confirm';
  disabled?: boolean;
}>`
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-weight: bold;
  color: ${({ theme, variant, disabled }) => {
    if (disabled) return theme.colors.text.light;
    if (variant === 'cancel') return theme.colors.text.secondary;
    return theme.colors.text.white;
  }};
`;