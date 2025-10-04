
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, clearCompleted } from '../features/todos/todosSlice'

export default function Footer() {
  const dispatch = useDispatch()
  const items = useSelector((s) => s.todos.items)
  const filter = useSelector((s) => s.todos.filter)
  const remaining = items.filter((i) => !i.completed).length

  return (
    <footer className="footer">
      <span>{remaining} items left</span>

      <div className="filters">
        {['All', 'Active', 'Completed'].map((f) => (
          <button
            key={f}
            className={filter === f ? 'active' : ''}
            onClick={() => dispatch(setFilter(f))}
          >
            {f}
          </button>
        ))}
      </div>

      <button className='clear-btn' onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
    </footer>
  )
}
