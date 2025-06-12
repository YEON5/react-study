import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// npm install axios 해줘야 함

// 비동기 액션 작성
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
    return response.data;
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
        state.todos.push({ id: Date.now(), title: action.payload, completed: false });
    },
    removeTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
        const todo = state.todos.find(todo => todo.id === action.payload);
        if (todo) todo.completed = !todo.completed;
    }
},
  extraReducers: (builder) => {
    builder
        // 로딩중일때
        .addCase(fetchTodos.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        // 완료
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
        })
        // 실패했을경우
        .addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;