import React from "react";
import { v4 as uuid } from "uuid";
import './AddTodo.css'
const AddTodo = ({ todos, setTodos, title,setTitle,description,setDescription, editItemId, isEdit }) => {

  const submitHandler = () => {
    if (title === "" || description==="") {
      alert("Please Fill the Fields");
    } else if (isEdit) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === editItemId) {
            return { ...todo, title: title,description:description };
          }
          return todo;
        })
      );
      setTitle("");
      setDescription("")
    } 
    else {
      setTodos([...todos, { title:title,description:description, id: uuid(), checked: false,points : 10 }]);
      setTitle("");
      setDescription("");
    }
  };

  const clearHandler = ()=>{
    setTitle("");
    setDescription("")
  }

  return (
    <div className="form-container" >
    <div className="form" >
      <h3>Add TODO</h3>
      <div className="form-input">
      <label >Title</label>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Todo" />
      </div>
      <div className="form-input">
      <label >Description</label>
      <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter Description"/>
      </div>
      <button className="submit-btn" onClick={submitHandler}>Submit</button>
      <button className="clr-btn" onClick={clearHandler}>Clear All</button>
    </div>
    </div>
  );
};

export default AddTodo;
