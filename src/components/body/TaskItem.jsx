import React from 'react'
import deleteIcon from '../../assets/icons/delete.svg'
import check from '../../assets/icons/check.svg'

function TaskItem({ task, onCheck, onDelete }) {
  return (
    <div className={!task.completed ? 'body--task-item' : 'body--task-item-check'} >
      <p className="body--task-content">
        <img
          src={check}
          className="body--task-icon-check"
          onClick={onCheck}
        />
        <span>{task.text}</span>
        <img
          src={deleteIcon}
          className="body--task-icon-delete"
          onClick={onDelete}
        />
      </p>
    </div>
  )
}

export default TaskItem