import React from "react";
import Task from './Task'

function TaskList({tasks, selectedCategory, hanldRemoveTasks, }) {
 const toDisplayTasks = tasks.filter(task => selectedCategory === 'All' || task.category === selectedCategory)
  .map((task,index)=>
  <Task text={task.text} category={task.category} key={index} hanldRemoveTasks={hanldRemoveTasks} /> )
  return (
    <div className="tasks">
      {toDisplayTasks}
    </div>
  );
}

export default TaskList;
