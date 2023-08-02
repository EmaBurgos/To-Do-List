import "./App.css";
import Login from "./components/Login";
import ToDoList from "./components/ToDoList";

import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (name) => {
    setUsername(name);
    setLoggedIn(true);
  };

  return (
    <>
      {loggedIn ? (
        <ToDoList username={username} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
