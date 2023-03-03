import React, { useEffect, useState, useContext } from "react";

import Header from "../Header";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import NonLoggedIn from "./NonLoggedIn";

export default function IndexPage() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {!user && (
        <div>
          <NonLoggedIn />
        </div>
      )}
      {user && <div>Jeni i loguar</div>}
    </div>
  );
}
