import React, { useState } from "react";

function CategoryFilter({ categories, handleFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClick = (category) => {
    setSelectedCategory(category);
    handleFilter(category);
  };

  const categoryButtons = categories.map((category, index) => (
    <button
      key={index}
      type="button"
      className={selectedCategory === category ? "selected" : ""}
      onClick={() => handleClick(category)}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
