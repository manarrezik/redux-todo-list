
import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>TODO</h1>
      </header>

      <main className="container">
        <TodoInput />
        <TodoList />
        <Footer />
      </main>
    </div>
  )
}
