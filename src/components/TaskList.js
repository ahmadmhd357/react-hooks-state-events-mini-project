import React from "react";
import Task from './Task'

function TaskList({tasks, selectedCategory, handlRemoveTask, }) {
 const toDisplayTasks = tasks.filter(task => selectedCategory === 'All' || task.category === selectedCategory)
  .map((task,index)=>
  <Task text={task.text} category={task.category} key={index} handlRemoveTask={handlRemoveTask} /> )
  return (
    <div className="tasks">
      {toDisplayTasks}
    </div>
  );
}

export default TaskList;
