import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, Navigate, redirect, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import KerkoGjak from "./KerkoGjak";
import AccountNav from "./components/AccountNav";
import { Helmet } from "react-helmet";

export default function AccountPage() {
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);

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

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <AccountNav />
      <Helmet>
        <title>My profile</title>
        <body className="bg-donation"></body>
      </Helmet>
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
