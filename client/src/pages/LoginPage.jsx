import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-6">Kycu </h1>
        <form className="max-w-lg mx-auto">
          <input type="email" placeholder={"your@email.com"} />
          <input type="password" placeholder="password" />
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
