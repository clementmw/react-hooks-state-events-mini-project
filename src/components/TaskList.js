import React, { useState } from "react";
import Task from "./Task";
// import CategoryFilter from "./CategoryFilter";

function TaskList({ TASKS }) {

const [task, setTask] = useState(TASKS);
//const [filteredTasks, setFilteredTasks] = useState(TASKS);

// const handleFilter = (category) => {
//   if (category === "All") {
//     setFilteredTasks(tasks);
//   } else {
//     const filtered = tasks.filter((task) => task.category === category);
//     setFilteredTasks(filtered);
//   }
// };

// const handleDelete  = (taskindex) => {
//   const updateTask = task.filter ((task,index)=> index == taskindex);
// setTask(updateTask)
// }

  const array = TASKS.map((task, index) => (
    <Task key={index} 
     name={task.text}
    category={task.category}
    //  onDelete = {handleDelete}
      />
    
     
  ));

  return (
    <div className="tasks">
      <ul>{array}</ul>
      {/* <CategoryFilter handleFilter={handleFilter}/> */}
    </div>
  );
}

export default TaskList;
