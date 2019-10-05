import React from "react"

export default function CreatedTask(props) {
  return (
    <div>
      <input type="checkbox" checked={props.completed}/>
      <p>{props.task}</p>
    </div>
  )
}
