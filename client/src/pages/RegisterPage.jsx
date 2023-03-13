import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [emri, setEmri] = useState("");
  const [mbiemri, setMbiemri] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        emri,
        mbiemri,
        email,
        password,
        bloodGroup,
      });
      alert("Registrimi u krye me sukses!");
    } catch (e) {
      alert("Regjistrimi ka deshtuar. Provoni Perseri");
    }
  }

  return (
    <div className="mt-6 grow flex items-center justify-around">
      <div className="mb-64 bg-gray-400 rounded-2xl p-5 opacity-90">
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

          <label className="bloodGroupForm flex justify-center text-red-700 bg-white">
            Pick your blood group:
            <select
              value={bloodGroup}
              onChange={(ev) => setBloodGroup(ev.target.value)}
              required
            >
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="0+">0+</option>
              <option value="0-">0-</option>
            </select>
          </label>
          <button className="primary">Regjistrohuni</button>
          <div className="text-center py-2 text-white">
            Keni llogari?
            <Link to={"/login"}>Kycuni</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
