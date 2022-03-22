import React from 'react'
import '../../sass/body/createTask.scss'
function CreateTask() {
  return (
    <form className='Modal--create-task-form'>
      <p>Create a new Task</p>
      <textarea cols="35" rows="5">
      </textarea>
      <div className="Modal--create-task-form-button-container">
        <button className="Modal--create-task-button">
          cancel
        </button>
        <button className="Modal--create-task-button">
          create
        </button>
      </div>
    </form>
  )
}

export default CreateTask