import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import mockData from "./mockData";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import ContactUs from "./routes/ContactUs";
import NotFound from "./routes/NotFound";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [todos, setTodos] = useState(mockData);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  
  return (
    <div>
      <Navbar todos={todos} setTodos={setTodos} />
      <Routes>
        <Route path="#" element={<Home />} />
        <Route path="#" element={<About />} />
        <Route path="#" element={<ContactUs />} />
        <Route path="#" element={<NotFound />} />
      </Routes>
      <AddTodo
        todos={todos}
        setTodos={setTodos}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        editItemId={editItemId}
        isEdit={isEdit}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setTitle={setTitle}
        setDescription={setDescription}
        setEditItemId={setEditItemId}
        setIsEdit={setIsEdit}
      />
      <Footer/>
    </div>
  );
};

export default App;
