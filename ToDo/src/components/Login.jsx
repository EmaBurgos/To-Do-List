import { useState } from "react";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(name);
  };

  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <div className="TodoWrapper">
          <h1 className="login">Login</h1>
          <div className="inputs">
            <label>Nombre</label>
            <input
              autoComplete="name"
              type="text"
              className="todo-input"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="inputs">
            <label>Contraseña</label>
            <input
              type="password"
              autoComplete="password"
              className="todo-input"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-form">
            <button type="submit">Entrar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
