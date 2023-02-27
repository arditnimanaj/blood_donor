import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      await axios.post("/login", {
        email,
        password,
      });
      alert("Login successful");
      setRedirect(true);
    } catch (e) {
      alert("Login Failed! ");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-6">Kycu </h1>
        <form className="max-w-lg mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder={"your@email.com"}
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Nuk keni llogari?
            <Link to={"/register"}>Regjistrohuni</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
