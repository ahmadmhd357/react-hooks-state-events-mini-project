

function CategoryFilter({categories, handlCategoryChange, selectedCategory}) {
  
  
  const categoriesToDisplay = categories.map((category,index)=>
      { const classNamee = (category === selectedCategory?'selected':'')
       console.log(selectedCategory) 
        
        return<button   key={index}
           onClick={()=>handlCategoryChange(category)} className={classNamee}> {category} </button>})
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesToDisplay}
    </div>
  );
}

export default CategoryFilter;
