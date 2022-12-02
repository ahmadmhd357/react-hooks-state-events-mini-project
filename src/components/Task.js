import React from "react";

function Task({text, category, hanldRemoveTasks }) {
  return ( 
    <div className="task"   >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button name={text} className="delete" onClick={hanldRemoveTasks}>X</button>
    </div>
    
  );
}

export default Task;
