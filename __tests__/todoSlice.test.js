// __tests__/todoSlice.test.js
import todoReducer, {
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  clearTodos,
  loadTodosFromStorage,
  saveTodosToStorage,
  removeTodosFromStorage,
} from "../src/store/todoSlice/todoSlice"; // Ajuste o caminho conforme sua estrutura

// Mock do AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";
jest.mock("@react-native-async-storage/async-storage");

describe("todoSlice", () => {
  const initialState = {
    todos: [],
    isLoaded: false,
    currentUser: null,
  };

  // Mock de uma todo para testes
  const mockTodo = {
    id: 1,
    title: "Minha tarefa de teste",
    completed: false,
    dateCompleted: "",
    dateCreated: "2024-01-01",
    dateFinished: "",
  };

  const mockCompletedTodo = {
    id: 2,
    title: "Tarefa completada",
    completed: true,
    dateCompleted: "2024-01-02",
    dateCreated: "2024-01-01",
    dateFinished: "",
  };

  beforeEach(() => {
    // Limpa todos os mocks antes de cada teste
    jest.clearAllMocks();
  });

  describe("addTodo", () => {
    it("deve adicionar uma nova tarefa ao estado", () => {
      const newState = todoReducer(initialState, addTodo(mockTodo));

      expect(newState.todos).toHaveLength(1);
      expect(newState.todos[0]).toEqual(mockTodo);
    });

    it("deve adicionar múltiplas tarefas mantendo as anteriores", () => {
      const stateWithOneTodo = {
        ...initialState,
        todos: [mockTodo],
      };

      const secondTodo = {
        id: 3,
        title: "Segunda tarefa",
        completed: false,
        dateCompleted: "",
        dateCreated: "2024-01-01",
        dateFinished: "",
      };

      const newState = todoReducer(stateWithOneTodo, addTodo(secondTodo));

      expect(newState.todos).toHaveLength(2);
      expect(newState.todos[0]).toEqual(mockTodo);
      expect(newState.todos[1]).toEqual(secondTodo);
    });

    it("deve manter outros campos do estado inalterados", () => {
      const stateWithData = {
        todos: [],
        isLoaded: true,
        currentUser: "testUser",
      };

      const newState = todoReducer(stateWithData, addTodo(mockTodo));

      expect(newState.isLoaded).toBe(true);
      expect(newState.currentUser).toBe("testUser");
      expect(newState.todos).toHaveLength(1);
    });
  });

  describe("removeTodo", () => {
    it("deve remover uma tarefa específica", () => {
      const stateWithTodos = {
        ...initialState,
        todos: [mockTodo, mockCompletedTodo],
      };

      const newState = todoReducer(stateWithTodos, removeTodo({ id: 1 }));

      expect(newState.todos).toHaveLength(1);
      expect(newState.todos[0]).toEqual(mockCompletedTodo);
    });

    it("deve manter outras tarefas quando uma é removida", () => {
      const stateWithTodos = {
        ...initialState,
        todos: [mockTodo, mockCompletedTodo],
      };

      const newState = todoReducer(stateWithTodos, removeTodo({ id: 2 }));

      expect(newState.todos).toHaveLength(1);
      expect(newState.todos[0]).toEqual(mockTodo);
    });

    it("não deve alterar o estado se ID não existir", () => {
      const stateWithTodos = {
        ...initialState,
        todos: [mockTodo],
      };

      const newState = todoReducer(stateWithTodos, removeTodo({ id: 999 }));

      expect(newState.todos).toHaveLength(1);
      expect(newState.todos[0]).toEqual(mockTodo);
    });
  });

  describe("toggleTodo", () => {
    it("deve marcar tarefa como completada", () => {
      const stateWithTodo = {
        ...initialState,
        todos: [mockTodo],
      };

      const newState = todoReducer(stateWithTodo, toggleTodo({ id: 1 }));

      expect(newState.todos[0].completed).toBe(true);
      expect(newState.todos[0].dateCompleted).toBeTruthy();
      expect(newState.todos[0].dateCompleted).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    it("deve desmarcar tarefa completada", () => {
      const stateWithCompletedTodo = {
        ...initialState,
        todos: [mockCompletedTodo],
      };

      const newState = todoReducer(
        stateWithCompletedTodo,
        toggleTodo({ id: 2 })
      );

      expect(newState.todos[0].completed).toBe(false);
      expect(newState.todos[0].dateCompleted).toBe("");
    });

    it("não deve alterar tarefa inexistente", () => {
      const stateWithTodo = {
        ...initialState,
        todos: [mockTodo],
      };

      const newState = todoReducer(stateWithTodo, toggleTodo({ id: 999 }));

      expect(newState.todos[0]).toEqual(mockTodo);
    });
  });

  describe("editTodo", () => {
    it("deve editar o título de uma tarefa", () => {
      const stateWithTodo = {
        ...initialState,
        todos: [mockTodo],
      };

      const newTitle = "Título editado";
      const newState = todoReducer(
        stateWithTodo,
        editTodo({ id: 1, title: newTitle })
      );

      expect(newState.todos[0].title).toBe(newTitle);
      expect(newState.todos[0].id).toBe(1);
      expect(newState.todos[0].completed).toBe(false);
    });

    it("não deve alterar tarefa inexistente", () => {
      const stateWithTodo = {
        ...initialState,
        todos: [mockTodo],
      };

      const newState = todoReducer(
        stateWithTodo,
        editTodo({ id: 999, title: "Novo título" })
      );

      expect(newState.todos[0]).toEqual(mockTodo);
    });
  });

  describe("clearTodos", () => {
    it("deve limpar todas as tarefas e resetar estado", () => {
      const stateWithData = {
        todos: [mockTodo, mockCompletedTodo],
        isLoaded: true,
        currentUser: "testUser",
      };

      const newState = todoReducer(stateWithData, clearTodos());

      expect(newState.todos).toHaveLength(0);
      expect(newState.isLoaded).toBe(false);
      expect(newState.currentUser).toBe(null);
    });
  });

  describe("Async Actions", () => {
    describe("loadTodosFromStorage", () => {
      it("deve carregar tarefas do AsyncStorage com sucesso", () => {
        const mockTodos = [mockTodo, mockCompletedTodo];

        const action = {
          type: loadTodosFromStorage.fulfilled.type,
          payload: mockTodos,
        };

        const newState = todoReducer(initialState, action);

        expect(newState.todos).toEqual(mockTodos);
        expect(newState.isLoaded).toBe(true);
      });

      it("deve definir estado vazio quando falhar ao carregar", () => {
        const action = {
          type: loadTodosFromStorage.rejected.type,
        };

        const newState = todoReducer(initialState, action);

        expect(newState.todos).toEqual([]);
        expect(newState.isLoaded).toBe(true);
      });
    });

    describe("saveTodosToStorage", () => {
      it("deve manter estado após salvar com sucesso", () => {
        const stateWithTodos = {
          ...initialState,
          todos: [mockTodo],
        };

        const action = {
          type: saveTodosToStorage.fulfilled.type,
          payload: [mockTodo],
        };

        const newState = todoReducer(stateWithTodos, action);

        expect(newState.todos).toEqual([mockTodo]);
      });
    });

    describe("removeTodosFromStorage", () => {
      it("deve limpar todas as tarefas após remover do storage", () => {
        const stateWithTodos = {
          ...initialState,
          todos: [mockTodo, mockCompletedTodo],
        };

        const action = {
          type: removeTodosFromStorage.fulfilled.type,
        };

        const newState = todoReducer(stateWithTodos, action);

        expect(newState.todos).toEqual([]);
      });
    });
  });

  describe("Estado inicial", () => {
    it("deve retornar o estado inicial correto", () => {
      const state = todoReducer(undefined, { type: "unknown" });

      expect(state.todos).toEqual([]);
      expect(state.isLoaded).toBe(false);
      expect(state.currentUser).toBe(null);
    });
  });

  describe("Integração completa", () => {
    it("deve executar um fluxo completo de operações", () => {
      let state = initialState;

      // Adiciona tarefa
      state = todoReducer(state, addTodo(mockTodo));
      expect(state.todos).toHaveLength(1);

      // Edita tarefa
      state = todoReducer(state, editTodo({ id: 1, title: "Título editado" }));
      expect(state.todos[0].title).toBe("Título editado");

      // Completa tarefa
      state = todoReducer(state, toggleTodo({ id: 1 }));
      expect(state.todos[0].completed).toBe(true);

      // Adiciona segunda tarefa
      const secondTodo = { ...mockTodo, id: 2, title: "Segunda tarefa" };
      state = todoReducer(state, addTodo(secondTodo));
      expect(state.todos).toHaveLength(2);

      // Remove primeira tarefa
      state = todoReducer(state, removeTodo({ id: 1 }));
      expect(state.todos).toHaveLength(1);
      expect(state.todos[0].title).toBe("Segunda tarefa");

      // Limpa todas
      state = todoReducer(state, clearTodos());
      expect(state.todos).toHaveLength(0);
    });
  });
});
