import React from "react";

function NewTaskForm({categories,handlChange, onTaskFormSubmit, text, category}) {
  const optionsToDisplay = categories.map((cat)=>cat !== 'All'?<option value={cat} key={cat}>{cat}</option>:null)
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handlChange} value={text} />
      </label>
      <label>
        Category
        <select name="category" onChange={handlChange} value={category}>
          {optionsToDisplay}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
