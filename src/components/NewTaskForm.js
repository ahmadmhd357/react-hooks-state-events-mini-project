import {React, useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit}) {
  
 
  // const [ text, setText ] = useState(" ");
  // const [ category, setCategory ] = useState(" All ");
  const [formData, setFormData] = useState({text:'', category:'All'})
    const categoryList = categories.map((category) => {
      
    return (
      <option key={category}>
        {category}
      </option>
    )
  })

  const handleAdd = (e) => {
    e.preventDefault();
    onTaskFormSubmit(formData);
    // setText('');
    // setCategory(' All ')
    setFormData({text: '', category:'All'})
  }


  // const handleText = (e) => {
  //   setText(e.target.value)
  // }

  // const handleCategory = (e) => {
  //   setCategory(e.target.value)
  // }
  function handlFormChange(e){
     const name= e.target.name
     const value= e.target.value
     setFormData({...formData , [name]:value}) 
  }

  return (
    <form className="new-task-form" onSubmit={handleAdd}>
      <label>
        Details
        <input type="text" name="text" value={formData.text}  onChange={handlFormChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category}  onChange={handlFormChange}>
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;