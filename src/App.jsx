import React, { useState } from "react";
import { Header, Body, TaskItem, InputSearch, NotTasks } from './components/index'
import useLocalStorage from './hooks/useLocalStorage'
import { v4 as uuid } from 'uuid'

function App() {
  const [tasks, setTasks] = useLocalStorage('Tasks', [])
  const [searchValue, setSearchValue] = useState('')
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
    const newTodos = [...tasks]
    newTodos[i].completed = !tasks[i].completed
    setTasks(newTodos)
  }

  const onDelete = id => {
    const i = tasks.findIndex(task => task.id === id)
    const newTodos = [...tasks]
    newTodos.splice(i, 1)
    setTasks(newTodos)
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
    </>
  );
}

export default App;
