import {React} from "react";


function CategoryFilter({ categories, setTheCategory, theCategory}) {
  
  // const [ theCategory, setTheCategory ] = useState (" ")

  // const taskCategory = (category) => {
  //   setTheCategory(category)
  //   setNewTaskList(taskList.filter((taskk)=> taskk.category === category))
  //   if (category === "All") {
  //     setNewTaskList(TASKS)
  //   }
  // }
  function handleCategoryChange (cat){
    setTheCategory(cat)
  }

  const categoryList = categories.map((category) =>{
  const className = category === theCategory? "selected" : '';
    return (
      <button key={category}  className={className} onClick={()=>handleCategoryChange(category)}>
      {category}</button>
    )
  })


  return (
    <>
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  
    </>
  );
}

export default CategoryFilter;