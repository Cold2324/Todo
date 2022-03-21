import React from 'react'

function TaskItem({ task }) {
  return (
    <div className="body--task-item">
      <span>{task.text}</span>
    </div>
  )
}

export default TaskItem