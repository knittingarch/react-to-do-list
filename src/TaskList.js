import React from "react"

import AddTaskButton from "./AddTaskButton"
import ColorPicker from "./ColorPicker"
import Header from "./Header"
import LaunchModalButton from "./LaunchModalButton"
import TaskInput from "./TaskInput"

export default function TaskList() {
  return (
    <div>
      <Header title="Today's To Dos" />
      <div>
        <TaskInput />
        <ColorPicker />
        <AddTaskButton />
        <LaunchModalButton />
      </div>
    </div>
  )
}
