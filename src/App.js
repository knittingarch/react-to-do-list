import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

function App() {
  const todoItems =todosData.map(function(item) {
    return (
      <TodoItem
        key={item.id}
        text={item.text}
        completed={item.completed}
      />
    )
  })

  return (
    <div>
      {todoItems}
    </div>
  )
}

export default App
