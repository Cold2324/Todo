import React from "react";
import { Header, Body, TaskItem } from './components/index'

function App() {
  const tasks = [
    { text: 'Terminar el curso de platzi', completed: false },
    { text: 'Hacer la comida', completed: false }
  ]
  return (
    <>
      <Header />
      <Body>
        <div className="body--tasks-containter">
          {
            tasks.map(task => (
              <TaskItem task={task} />
            ))
          }
        </div>
      </Body>
    </>
  );
}

export default App;
