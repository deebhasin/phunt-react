import React, { useState, useRef } from "react";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [err, setErr] = useState("");
  const container = useRef(null);

  async function login(event) {
    event.preventDefault();
    console.log("Login");
    console.log(username, password);

    const url = "https://pdhuntall1-production-abfe.up.railway.app/api/auth/login";
    const data = { email: username, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        container.current.classList.add("error");
        // container1.classList.add("error");
        throw new Error(result.message);
      }
      console.log(result.token);
      localStorage.setItem("token", result.token);
    } catch (error) {
      console.log("there is an error", error.message);
      setError(error.message);
      setErr("error");
    }
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <main>
      <div ref={container} id="container" className="container">
        <form onSubmit={login}>
          <h1 className={err}>Login</h1>

          {error && <p className="error">{error}</p>}
          <label htmlFor="username">Username</label>
          <input id="username" type="email" placeholder="Enter your Email" onChange={handleUsernameChange} required />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Enter your password" onChange={handlePassword} required />

          <button>Submit</button>
        </form>
      </div>
    </main>
  );
}
