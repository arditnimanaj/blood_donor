import React, { useState } from "react";
import { useContext } from "react";
import { Link, Navigate, redirect, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";

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
    let classes = "py-2 px-4";
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
          Profili im
        </Link>
        <Link className={linkClasses("kerkogjak")} to={"/account/kerkogjak"}>
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
    </div>
  );
}
