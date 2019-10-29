import React from "react"

import './CreatedTask.css';

export default function CreatedTask(props) {
  return (
    <div>
      <input 
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleClick(props.id)}
      />
      <p class="strikethrough">{props.task}</p>
    </div>
  )
}
