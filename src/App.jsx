import React, { useState } from "react";
import { Header, Body, TaskItem, InputSearch, NotTasks, Button, Modal, CreateTask } from './components/index'
import useLocalStorage from './hooks/useLocalStorage'
import { v4 as uuid } from 'uuid'

function App() {
  const [tasks, setTasks] = useLocalStorage('Tasks', [])
  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)
  let searchedTasks = []

  if (!searchValue.length >= 1) {
    searchedTasks = tasks
  } else {
    searchedTasks = tasks.filter(task => {
      const searchTextLower = searchValue.toLowerCase()
      const taskText = task.text.toLowerCase()

      return taskText.includes(searchTextLower)
    })
  }

  const onCheck = id => {
    const i = tasks.findIndex(task => task.id === id)
    const newTasks = [...tasks]
    newTasks[i].completed = !tasks[i].completed
    setTasks(newTasks)
  }

  const onDelete = id => {
    const i = tasks.findIndex(task => task.id === id)
    const newTasks = [...tasks]
    newTasks.splice(i, 1)
    setTasks(newTasks)
  }

  const onAdd = text => {
    const newTasks = [...tasks]
    newTasks.push({
      id: uuid(),
      text: text,
      completed: false
    })
    setTasks(newTasks)
  }

  return (
    <>
      <Header>
        <InputSearch
          searchedTasks={searchedTasks}
          setTasks={setTasks}
          setSearchValue={setSearchValue}
        />
      </Header>
      {
        tasks.length === 0
          ? <NotTasks />
          : <Body>
            <div className="body--tasks-containter">
              {
                searchedTasks.map(task => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onCheck={() => onCheck(task.id)}
                    onDelete={() => onDelete(task.id)}
                  />
                ))
              }
            </div>
          </Body>
      }

      {
        !!openModal && (
          <Modal>
            <CreateTask
              setOpenModal={setOpenModal}
              onAdd={onAdd}
            />
          </Modal>
        )
      }

      <Button
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export default App;
