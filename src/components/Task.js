import React from "react";

function Task({text, category, handlRemoveTask }) {
  return ( 
    <div className="task"   >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button name={text} className="delete" onClick={()=>handlRemoveTask(text)}>X</button>
    </div>
    
  );
}

export default Task;
