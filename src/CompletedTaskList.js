import React from "react"

import CreatedTask from "./CreatedTask"
import Header from "./Header"
import todosData from "./todosData"

class CompletedTaskList extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const currentTodos = this.state.todos.map(todo =>
      <CreatedTask key={todo.id} id={todo.id} task={todo.text} completed={todo.completed} handleClick={this.handleClick} />
    )

    return (
      <div>
        <Header title="Completed Tasks" />
        {currentTodos}
      </div>
    )
  }
}

export default CompletedTaskList