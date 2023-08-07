import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ todos, setTodos }) => {
  return (
    <nav className="navbar">
      <h1>TODO Application</h1>
      <SearchBar todos={todos} setTodos={setTodos} />
      <ul className="menu-list">
        <Link className="item-link" to="#">
          <li>Home</li>
        </Link>
        <Link className="item-link" to="#">
          <li>About</li>
        </Link>
        <Link className="item-link" to="#">
          <li>Contact US</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
