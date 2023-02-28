import React, { useState } from "react";
import { useContext } from "react";
import { Link, Navigate, redirect, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import KerkoGjak from "./KerkoGjak";

export default function AccountPage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logOut() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading...";
  }
  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  function linkClasses(type = null) {
    let classes = "inline-flex gap-1  py-2 px-4";
    if (type === subpage) {
      classes =
        classes + " hover:bg-red-700 bg-primary text-white rounded-full";
      return classes;
    } else {
      classes = classes + " bg-gray-300 text-white rounded-full";
      return classes;
    }
  }
  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <nav className="w-full flex justify-center mt-8 mb-9 gap-2">
        <Link className={linkClasses("profile")} to={"/account"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          Profili im
        </Link>
        <Link className={linkClasses("kerkogjak")} to={"/account/kerkogjak"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          Kerko gjak
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Jeni te kycur si {user.emri + " " + user.mbiemri} ({user.email})
          <button
            onClick={logOut}
            className="primary mt-5 max-w-sm hover:bg-red-700"
          >
            Shkycuni
          </button>
        </div>
      )}
      {subpage === "kerkogjak" && (
        <div>
          <KerkoGjak />
        </div>
      )}
    </div>
  );
}
