

function CategoryFilter({categories, handlCategoryChange}) {
  
  
  const categoriesToDisplay = categories.map((category,index)=><button name={category.name}  key={index}
   onClick={handlCategoryChange} className={category.state}> {category.name} </button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesToDisplay}
    </div>
  );
}

export default CategoryFilter;
