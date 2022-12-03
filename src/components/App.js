import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [formData,setFormData] = useState({text:'', category:'Code'});
  const [newTask,setNewTask] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  

  function handlCategoryChange(cat){
    setSelectedCategory(cat)
    console.log(cat)  
  }

  function handlRemoveTask (tasks){
  setNewTask(newTask.filter(task=>task.text !== tasks))
  }

  function handlChangeForm (e){
    const name = e.target.name
    const value = e.target.value
    setFormData({...formData , [name]:value})
  }

  function addNewItems (element){
    setNewTask(TASKS=>[...TASKS,element])
  }
  
  function handlFormSubmit(e){
    e.preventDefault()
    addNewItems(formData)
    setFormData({text:'', category:'code'})
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} handlCategoryChange={handlCategoryChange} selectedCategory={selectedCategory} />
      <NewTaskForm categories = {CATEGORIES} handlChange={handlChangeForm} onTaskFormSubmit = {handlFormSubmit} text={formData.text} category={formData.category} />
      <TaskList tasks = {newTask} selectedCategory={selectedCategory} handlRemoveTask={handlRemoveTask}  />
    </div>
  );
}

export default App;
