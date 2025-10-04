
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo, editTodo } from '../features/todos/todosSlice'

export default function TodoItem({ todo }) {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(todo.text)

  const saveEdit = () => {
    const trimmed = text.trim()
    if (!trimmed) {
      // avoid empty todo text
      setText(todo.text)
      setEditing(false)
      return
    }
    dispatch(editTodo({ id: todo.id, text: trimmed }))
    setEditing(false)
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button className="check" onClick={() => dispatch(toggleTodo(todo.id))} aria-label="Toggle">
        {todo.completed ? '✓' : '○'}
      </button>

      {!editing ? (
        <span onDoubleClick={() => setEditing(true)}>{todo.text}</span>
      ) : (
        <input
          className="edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') saveEdit()
            if (e.key === 'Escape') {
              setText(todo.text)
              setEditing(false)
            }
          }}
          autoFocus
        />
      )}

      <button className="delete" onClick={() => dispatch(deleteTodo(todo.id))} aria-label="Delete">
        Delete
      </button>
    </div>
  )
}
