import React, { useState, useEffect } from "react";
import Login from './components/Login';
import TodoList from './components/TodoList';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      setLoggedIn(true);
      localStorage.setItem("loggedIn", "true");
    } else {
      alert("Incorrect username or password.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  useEffect(() => {
    const check = localStorage.getItem("loggedIn") === "true";
    if (check) setLoggedIn(true);
  }, []);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (i) => {
    const copy = [...todos];
    copy.splice(i, 1);
    setTodos(copy);
  };

  const editTodo = (i) => {
    setEditIndex(i);
    setEditValue(todos[i]);
  };

  const saveTodo = () => {
    const copy = [...todos];
    copy[editIndex] = editValue;
    setTodos(copy);
    setEditIndex(null);
    setEditValue("");
  };

  return loggedIn ? (
    <TodoList
      todos={todos}
      newTodo={newTodo}
      setNewTodo={setNewTodo}
      addTodo={addTodo}
      editIndex={editIndex}
      editValue={editValue}
      setEditValue={setEditValue}
      saveTodo={saveTodo}
      editTodo={editTodo}
      deleteTodo={deleteTodo}
      handleLogout={handleLogout}
    />
  ) : (
    <Login
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );
}

export default App
