import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";
import { useContext } from "react";
export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className="p-6 flex justify-between bg-red-500 w-510">
      <Link to={"/"} className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <span className="text-l text-sky-50 mx">DHURO GJAK SHPETO JETE</span>
      </Link>
      <div className="font-bold flex border border-white-300 rounded-full py-2 px-4 gap-5 bg-white shadow-md shadow-red-200 -ml-2">
        <div>Kerko Gjak</div>
        <div className="border-l border-red-500 "></div>
        <div>Dhuro gjak</div>
        <div className="border-l  border-red-500"></div>
        <div>Shiko te gjithe kerkuesit..</div>
        <button className="bg-primary text-white p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <Link
        to={user ? "/account" : "/login"}
        className="font-bold items-center flex border border-white-300 rounded-full py-2 px-4 gap-5 bg-white shadow-md shadow-red-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        {!!user && (
          <div>
            {user.emri + " " + user.mbiemri + "  "}
            <span className="font-bold text-red-500">{user?.bloodGroup}</span>
          </div>
        )}
      </Link>
    </header>
  );
}
