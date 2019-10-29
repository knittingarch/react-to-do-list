import React from "react"

import CreatedTask from "./CreatedTask"
import Header from "./Header"

export default function CompletedTaskList(props) {
  return (
    <div>
      <Header title="Completed Tasks" />
      <CreatedTask task={props.task} completed="completed" />
    </div>
  )
}