import React from "react";
import Task from "./Task";


function TaskList({tasks, handleRemove, theCategory }) {
  

  // const tasksList = tasks.filter(task=>task.category === theCategory || theCategory === 'All')
  
  return (
    <>
    <div className="tasks">
      {tasks.map((task) => ( theCategory === 'All' || task.category === theCategory ?
    <Task key={task.text} text={task.text} category={task.category} handleRemove={handleRemove}/>:null
  ))}
    </div>
    </>
  );
}

export default TaskList;