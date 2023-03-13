import React, { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";
import { UserContext } from "./UserContext";

export default function Layout() {
  const { user } = useContext(UserContext);
  const { subpage } = useParams;
  console.log(subpage);
  function divClassName() {
    if (!user) {
      return " flex flex-col min-h-screen bg-blood bg-contain";
    }
  }

  return (
    <div className={divClassName()}>
      <Header />
      <Outlet />
    </div>
  );
}
