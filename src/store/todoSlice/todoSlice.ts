import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from "..";

type Todo = {
    id: number;
    title: string;
    completed: boolean;
    dateCompleted: string;
    dateCreated: string;
    dateFinished: string;
}

//  Função para gerar chave única por usuário
const getTodoStorageKey = (userName: string) => `@todoapp:todos:${userName}`;

//  Carregar todos do storage para um usuário específico
export const loadTodosFromStorage = createAsyncThunk(
  'todos/loadFromStorage',
  async (userName: string) => {
    try {
      const storageKey = getTodoStorageKey(userName);
      const savedTodos = await AsyncStorage.getItem(storageKey);
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error('Erro ao carregar todos:', error);
      return [];
    }
  }
);

//  Salvar todos no storage para um usuário específico
export const saveTodosToStorage = createAsyncThunk(
  'todos/saveToStorage',
  async ({ userName, todos }: { userName: string; todos: Todo[] }) => {
    try {
      const storageKey = getTodoStorageKey(userName);
      await AsyncStorage.setItem(storageKey, JSON.stringify(todos));
      return todos;
    } catch (error) {
      console.error('Erro ao salvar todos:', error);
      throw error;
    }
  }
);

//  Remover todos do storage para um usuário específico
export const removeTodosFromStorage = createAsyncThunk(
  'todos/removeFromStorage',
  async (userName: string) => {
    try {
      const storageKey = getTodoStorageKey(userName);
      await AsyncStorage.removeItem(storageKey);
      return [];
    } catch (error) {
      console.error('Erro ao remover todos:', error);
      throw error;
    }
  }
);

const initialState: {
  todos: Todo[];
  isLoaded: boolean;
  currentUser: string | null;
} = {
  todos: [],
  isLoaded: false,
  currentUser: null,
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        //  Adicionar todo (será salvo automaticamente)
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        //  Remover todo
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo: Todo) => todo.id !== action.payload.id);
        },
        editTodo: (state, action) => {
          const { id, title } = action.payload;
          const todo = state.todos.find(todo => todo.id === id);
          if (todo) {
            todo.title = title;
        }
        },
        //  Alternar status do todo
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed;
                //  Adicionar data de conclusão
                todo.dateCompleted = todo.completed ? 
                    new Date().toISOString().split('T')[0] : '';
            }
        },
        //  Limpar todos (quando trocar usuário)
        clearTodos: (state) => {
            state.todos = [];
            state.isLoaded = false;
            state.currentUser = null;
        }
    },
    extraReducers: (builder) => {
        builder
            //  Carregar todos do storage
            .addCase(loadTodosFromStorage.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.isLoaded = true;
            })
            .addCase(loadTodosFromStorage.rejected, (state) => {
                state.isLoaded = true;
                state.todos = [];
            })
            //  Salvar todos no storage
            .addCase(saveTodosToStorage.fulfilled, (state, action) => {
                // Todos já salvos, não precisa fazer nada
            })
            //  Remover todos do storage
            .addCase(removeTodosFromStorage.fulfilled, (state) => {
                state.todos = [];
            });
    }
});

export const { addTodo, removeTodo, toggleTodo, clearTodos, editTodo } = todoSlice.actions;

//  Selectors
export const selectTodos = (state: RootState) => state.todo.todos;
export const selectTodosLoaded = (state: RootState) => state.todo.isLoaded;
export const selectCurrentUser = (state: RootState) => state.todo.currentUser;

export default todoSlice.reducer;