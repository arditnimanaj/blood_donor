import React, { useEffect, useState, useContext } from "react";

import Header from "../Header";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function IndexPage() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {!user && <div> Nuk jeni i loguar</div>}
      {user && <div>Jeni i loguar</div>}
    </div>
  );
}
