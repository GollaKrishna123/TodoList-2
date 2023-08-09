import React, { useState } from "react";
import SingleTodo from "../SingleTodo/SingleTodo";
import "./TodoList.css";
import PointsModal from "../../models/PointsModal";

const TodoList = ({
  todos,
  setTodos,
  setTitle,
  setDescription,
  setEditItemId,
  setIsEdit,
}) => {
  let scoredPoints = 0;
  let checkedCards = 0;
  let totalPoints = todos.reduce((points, todo) => (points += todo.points), 0);

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].checked) {
      scoredPoints += todos[i].points;
      checkedCards++;
    }
  }
 
  let yourRating = checkedCards > 0 ? Math.ceil(scoredPoints / checkedCards) : 0;

  let totalRating = Math.ceil(totalPoints / todos.length);

  let averageRating = totalRating !== 0 ? Math.ceil(yourRating / totalRating) : 0;

  const strikeHandler = (id) => {
    console.log(todos, "todos after checked");
    let checkedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(checkedTodo);
    console.log(todos, "todos after updated");
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filteredTodos);
  };

  const editTodo = (id) => {
    console.log("Hello");
    const itemToBeEdited = todos.find((todo) => todo.id === id);
    setTitle(itemToBeEdited.title);
    setDescription(itemToBeEdited.description);
    setEditItemId(id);
    setIsEdit(true);
  };

  const selectHandler = (e) => {
    if (e.target.value === "asc") {
      setTodos([...todos].sort((a, b) => a.points - b.points));
    } else if (e.target.value === "desc") {
      setTodos([...todos].sort((a, b) => b.points - a.points));
    }
  };

  return (
    <div>
      <div className="todo-flex1">
        <h2>TodoList - {todos.length}</h2>
        <div className="todo-flex2">
          <select onChange={selectHandler}>
            <option hidden>Select</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <h3>Average Rating : {averageRating}</h3>
          <h3>
            Points Scored : {scoredPoints}/{totalPoints}
          </h3>
        </div>
      </div>
      <div className="todo-items">
        {todos.length <= 0 && <h1>No Items to display</h1>}
      </div>
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          strikeHandler={strikeHandler}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
      {
        <PointsModal
          isOpen={scoredPoints === totalPoints}
          scoredPoints={scoredPoints}
          todos={todos}
          setTodos={setTodos}
          totalPoints={totalPoints}
        />
      }
    </div>
  );
};

export default TodoList;
