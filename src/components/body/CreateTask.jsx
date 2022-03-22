import React from 'react'
import '../../sass/body/createTask.scss'
function CreateTask({ setOpenModal, onAdd }) {
  const [textValue, setTextValue] = React.useState('')

  const onChangeText = e => {
    setTextValue(e.target.value)
  }

  const onSubmitTask = e => {
    e.preventDefault()
    onAdd(textValue)
    setOpenModal(false)
  }

  return (
    <form className='Modal--create-task-form' onSubmit={e => onSubmitTask(e)}>
      <p>Create a new Task</p>
      <textarea cols="35" rows="5" onChange={e => onChangeText(e)}>
      </textarea>
      <div className="Modal--create-task-form-button-container">
        <button className="Modal--create-task-button" type='button' onClick={() => setOpenModal(false)}>
          cancel
        </button>
        <button className="Modal--create-task-button" type='submit'>
          create
        </button>
      </div>
    </form>
  )
}

export default CreateTask