import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const TodoContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primaryLight};
`;

