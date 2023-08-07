import React, { useState } from "react";
import "./SingleTodo.css";
const SingleTodo = ({ todo, strikeHandler, deleteTodo, editTodo }) => {
  return (
    <div>
      <h3 style={{ paddingLeft: "20px" }}>
        Task : {todo.checked ? <span>Completed</span> : <span>Pending</span>}
      </h3>
      <div className="todo-container">
        <div>
          <div style={{ display: "flex" }}>
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.checked}
              onChange={(e) => strikeHandler(todo.id)}
            />
            {todo.checked ? (
              <strike>
                <h3 className="todo-title">{todo.title}</h3>
              </strike>
            ) : (
              <h3 className="todo-title">{todo.title}</h3>
            )}
          </div>
          <h3 className="todo-description">{todo.description}</h3>
          <span className="todo-points">Points : {todo.points}</span>
        </div>
        <div>
          <button className="edit-btn" onClick={() => editTodo(todo.id)}>
            Edit
          </button>
          &nbsp;&nbsp;
          <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
