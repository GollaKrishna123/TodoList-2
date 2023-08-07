import React, { useEffect, useState } from "react";
import './SearchBar.css'
const SearchBar = ({ todos, setTodos }) => {
  const [search, setsearch] = useState("");
  
  useEffect(() => {
    if (search) {
      const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
      );
      setTodos(filteredTodos);
    }
  }, [search]);

  return (
    <div className="search-container">
      <input className="search-input"
        type="text"
        placeholder="Search Your Task Here..."
        onChange={(e) => setsearch(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default SearchBar;
