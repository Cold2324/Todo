import React, { useState } from "react";
import { Header, Body, TaskItem, InputSearch } from './components/index'
import { v4 as uuid } from 'uuid'

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Terminar el curso de platzi', completed: false },
    { text: 'Hacer la comida', completed: false }
  ])
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

  return (
    <>
      <Header>
        <InputSearch
          searchedTasks={searchedTasks}
          setTasks={setTasks}
          setSearchValue={setSearchValue}
        />
      </Header>
      <Body>
        <div className="body--tasks-containter">
          {
            searchedTasks.map(task => (
              <TaskItem task={task} />
            ))
          }
        </div>
      </Body>
    </>
  );
}

export default App;
