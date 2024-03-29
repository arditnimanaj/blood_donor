import React from "react";
import {
  Link,
  Navigate,
  redirect,
  useLocation,
  useParams,
} from "react-router-dom";

export default function () {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];

  if (subpage === undefined) {
    subpage = "profile";
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
  return (
    <>
      <nav className="w-full flex justify-center mt-8 mb-9 gap-2">
        <Link
          className="absolute left-5"
          to={"/"}
          onClick={() => window.history.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-9 h-9 rounded-full bg-primary p-1 hover:bg-black hover:text-white "
          >
            <path
              fill-rule="evenodd"
              d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
              clip-rule="evenodd"
            />
          </svg>
        </Link>
        <Link className={linkClasses("profile")} to={"/account"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
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
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          Kerko gjak
        </Link>
      </nav>
    </>
  );
}
