import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [emri, setEmri] = useState("");
  const [mbiemri, setMbiemri] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        emri,
        mbiemri,
        email,
        password,
      });
      alert("Registrimi u krye me sukses!");
    } catch (e) {
      alert("Regjistrimi ka deshtuar. Provoni Perseri");
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-6">Regjistrohu </h1>
        <form className="max-w-lg mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Emri"
            value={emri}
            onChange={(ev) => setEmri(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Mbiemri"
            value={mbiemri}
            onChange={(ev) => setMbiemri(ev.target.value)}
          />
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
          <button className="primary">Regjistrohuni</button>
          <div className="text-center py-2 text-gray-500">
            Keni llogari?
            <Link to={"/login"}>Kycuni</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
