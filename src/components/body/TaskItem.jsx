import React from 'react'
import deleteIcon from '../../assets/icons/delete.svg'
import check from '../../assets/icons/check.svg'

function TaskItem({ task }) {
  return (
    <div className="body--task-item">
      <p className="body--task-content">
        <img src={check} className="body--task-icon-check" />
        <span>{task.text}</span>
        <img src={deleteIcon} className="body--task-icon-delete" />
      </p>
    </div>
  )
}

export default TaskItem