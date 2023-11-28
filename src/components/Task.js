import React from "react";

function Task({name,category}) {

  const handleSubmit = (e)=> {
      e.preventDefault();
  }

  const deleteBT = (e)=> {
      e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="task">
      <ul>
        
        Text = {name} Categoty = {category}
        
      </ul>
      <button className="delete" onClick={deleteBT}>X</button>
    </div>
    </form>
   
  );
}

export default Task;
