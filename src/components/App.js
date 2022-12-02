import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  let categories = CATEGORIES.map(cat=>{return {name:cat, state:'not-selected'}} )
  const  [updatCateg, setUpdatCateg] = useState(categories)
  const [formData,setFormData] = useState({text:'', category:'Code'});
  const [newTask,setNewTask] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  

  function handlCategoryChange(e){
    setSelectedCategory(e.target.name)
    let btn = categories.map(cat=>cat.name === e.target.name?cat = {name:cat.name, state:'selected'}:cat)
    setUpdatCateg(btn)
    console.log(categories)  
  }

  function hanldRemoveTasks(event){
    const targetTask = newTask.map(task => task.text === event.target.name ?
       task = {text:task.text, category:task.category, status:'removed'}:
       task = {text:task.text, category:task.category})
    .filter(task=>task.status !== 'removed'  )
    setNewTask(targetTask)
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
      <CategoryFilter categories = {updatCateg} handlCategoryChange={handlCategoryChange} />
      <NewTaskForm categories = {CATEGORIES} handlChange={handlChangeForm} onTaskFormSubmit = {handlFormSubmit} text={formData.text} category={formData.category} />
      <TaskList tasks = {newTask} selectedCategory={selectedCategory} hanldRemoveTasks={hanldRemoveTasks}  />
    </div>
  );
}

export default App;
