
import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

export default function TodoList() {
  const items = useSelector((state) => state.todos.items)
  const filter = useSelector((state) => state.todos.filter)

  const filtered = items.filter((item) => {
    if (filter === 'Active') return !item.completed
    if (filter === 'Completed') return item.completed
    return true
  })

  return (
    <div className="todo-list">
      {filtered.length === 0 ? (
        <p className="empty">No todos</p>
      ) : (
        filtered.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  )
}
