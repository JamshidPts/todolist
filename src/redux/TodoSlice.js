import { createSlice } from '@reduxjs/toolkit';

const loadTodosFromLocalStorage = () => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const initialState = {
  todos: loadTodosFromLocalStorage(),
  searchTerm: ''
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { id: Date.now(), text: action.payload };
      state.todos.push(newTodo);
      saveTodosToLocalStorage(state.todos);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      saveTodosToLocalStorage(state.todos);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = newText;
        saveTodosToLocalStorage(state.todos);
      }
    }
  }
});

export const { addTodo, setSearchTerm, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
