
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  items: [
    
  ],
  filter: 'All', 
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        
        state.items.unshift(action.payload)
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
            createdAt: Date.now(),
          },
        }
      },
    },
    toggleTodo(state, action) {
      const todo = state.items.find((t) => t.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
    deleteTodo(state, action) {
      state.items = state.items.filter((t) => t.id !== action.payload)
    },
    editTodo(state, action) {
      const { id, text } = action.payload
      const todo = state.items.find((t) => t.id === id)
      if (todo) todo.text = text
    },
    clearCompleted(state) {
      state.items = state.items.filter((t) => !t.completed)
    },
    setFilter(state, action) {
      state.filter = action.payload
    },
  },
})

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  clearCompleted,
  setFilter,
} = todosSlice.actions

export default todosSlice.reducer
