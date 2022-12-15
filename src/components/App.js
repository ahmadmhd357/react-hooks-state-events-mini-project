import {React, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [ taskList, setNewTaskList ] = useState (TASKS)
  
  const [ theCategory, setTheCategory ] = useState ("All")

  
  const handleRemove = (taskk) => {
    
    setNewTaskList(taskList.filter(task => task.text !== taskk ))
  }

  const onTaskFormSubmit = (taskk) => {
    setNewTaskList([...taskList, taskk])
  }

  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  categories={CATEGORIES} setTheCategory={setTheCategory} theCategory={theCategory} />
      <NewTaskForm  categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={taskList} handleRemove={handleRemove} theCategory={theCategory} />
    </div>
  );
}

export default App;