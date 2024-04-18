import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import "./Profile.css";

function Profile() {
  const [originalTodos, setOriginalTodos] = useState([]);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const initialData = [];
    setOriginalTodos(initialData);
    setTodos(initialData);
  }, []);

  const currentDate = new Date(); // Get the current date
  const options = { weekday: "long" };
  const currentDay = currentDate.toLocaleDateString("en-US", options);

  const handleAddTodo = () => {
    if (todo.trim() !== "" && description.trim() !== "") {
      const newTodo = {
        text: todo,
        description: description,
        date: new Date().toLocaleDateString(),
        status: "Pending", // Initial status
      };
      setOriginalTodos([...originalTodos, newTodo]);
      setTodos([...todos, newTodo]);
      setTodo("");
      setDescription("");
    }
  };
  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleUpdateStatus = (index, newStatus) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status = newStatus;
    setTodos(updatedTodos);
  };

  const handleSearch = () => {
    // Filter todos based on search term
    const filteredTodos = originalTodos.filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTodos(filteredTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") {
      return true;
    } else {
      return todo.status === filter;
    }
  });

  const handleClearSearch = () => {
    setSearchTerm("");
    setTodos(originalTodos);
  };

  return (
    <div className="col-10 col-sm-8 col-lg-6">
      <div className="app">
        <div class="logo">
          <img src={logo} alt="logo" width="40" height="50" />
        </div>
        <div className="container">
          <div className="left-side">
            <h1 style={{ textAlign: "center" }}>TODO</h1>
            <h2 style={{ textAlign: "center" }}>Hey, it's {currentDay} 🌝 </h2>
            <div className="input-container">
              <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                placeholder="Add item..."
                className="input-field"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description..."
                rows="4"
                className="input-field"
              />
              <button onClick={handleAddTodo} className="add-button">
                Add
              </button>
            </div>
          </div>
          <div class="center-line"></div>
          <div className="right-side">
            <div className="dashboard-container">
              <div className="search-filter">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
                <button onClick={handleClearSearch}>Clear Search</button>
              </div>
              <select
                className="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">Filter By</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Deleted">Deleted</option>
              </select>
              {filteredTodos.map((value, index) => (
                <div key={index} className="todos">
                  <div className="todo">
                    <div className="left">
                      <label style={{ backgroundColor: "yellow" }}>
                        {value.text}
                      </label>
                      <p>{value.description}</p>
                    </div>
                    <div className="options">
                      <select
                        value={value.status}
                        onChange={(e) =>
                          handleUpdateStatus(index, e.target.value)
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Deleted">Deleted</option>
                      </select>
                      <i
                        onClick={() => handleDeleteTodo(index)}
                        className="fas fa-times"
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link to="/login">
          {" "}
          <button className="back" style={{ backgroundColor: "violet" }}>
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
