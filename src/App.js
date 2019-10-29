import React from 'react'

import CompletedTaskList from "./CompletedTaskList"
import TaskList from "./TaskList"

export default function App() {
  return (
    <div>
      <TaskList task="This uncompleted task is coming from App.js." />
      <CompletedTaskList />
    </div>
  )
}
