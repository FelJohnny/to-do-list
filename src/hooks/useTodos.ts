import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { 
  selectUserName, 
  selectUserLoaded 
} from '../store/userSlice/userSlice';
import { 
  loadTodosFromStorage, 
  saveTodosToStorage,
  clearTodos,
  selectTodos,
  selectTodosLoaded 
} from '../store/todoSlice/todoSlice';

export const useTodos = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectUserName);
  const isUserLoaded = useAppSelector(selectUserLoaded);
  const todos = useAppSelector(selectTodos);
  const todosLoaded = useAppSelector(selectTodosLoaded);

  // Carregar todos quando usuário muda
  useEffect(() => {
    if (isUserLoaded && userName) {
      dispatch(loadTodosFromStorage(userName));
    } else if (isUserLoaded && !userName) {
      // Se não há usuário, limpar todos
      dispatch(clearTodos());
    }
  }, [dispatch, userName, isUserLoaded]);

  // Salvar todos automaticamente quando mudarem
  useEffect(() => {
    if (userName && todosLoaded && todos.length >= 0) {
        // Debounce para não salvar a cada mudança
      const timeoutId = setTimeout(() => {
        dispatch(saveTodosToStorage({ userName, todos }));
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [dispatch, userName, todos, todosLoaded]);

  return {
    todos,
    todosLoaded,
    userName,
  };
};