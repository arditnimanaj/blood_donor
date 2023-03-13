import React, { useEffect, useState } from "react";
import axios from "axios";
import heartSvg from "../assets/blood-bank.svg";
import { format } from "date-fns";
import MatchedInfo from "./components/matchedInfo";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Homepage() {
  const [allDonations, setAllDonations] = useState([]);
  useEffect(() => {
    axios.get("/allDonations").then((response) => {
      setAllDonations(response.data);
    });
  }, []);
  return (
    <div>
      <Helmet>
        <body className="bg-donation"></body>
      </Helmet>
      <div className="matched-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 mx-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>

        <h1 className="text-2xl font-bold font-serif">KUJDES !</h1>
        <span className="text-xl font-serif">
          Ne kete modul do shfaqen te gjithe personat qe kane nevoje per gjak,
          pavaresisht grupit te tyre. Per te shikuar detajet klikoni mbi
          kornizat.
        </span>
      </div>
      <div className=" grid grid-cols-3 max-w-full md:grid-cols-3 lg:grid-cols-6 gap-3">
        {allDonations.length > 0 &&
          allDonations.map((donation) => (
            <Link
              to={"/donations/" + donation._id}
              key={donation._id}
              className="bg-red-100  rounded-2xl mx-3 p-2 flex-col cursor-pointer"
            >
              <img src={heartSvg} className="" />
              {donation.isAnonymous ? (
                <div>
                  <h1 className="text-red-800 text-xl font-bold ml-3 ">
                    Anonim
                  </h1>
                  <h3 className="items-center ml-3 font-bold text-red-800 font-sans">
                    Te dhenat e personit jane anonime. Klikoni per me shume
                    detaje.
                  </h3>
                </div>
              ) : (
                <div className="text-red-800  w-full text-lg font-sans  font-bold ml-3">
                  {donation.kerkuesi.emri + " " + donation.kerkuesi.mbiemri}
                  <div className="flex items-center gap-2">
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

                    <h1 className="w-full">
                      Grupi i gjakut: {donation.kerkuesiGroup}
                    </h1>
                  </div>
                  <div className="flex items-center gap-2">
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
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                    <p className=" text-lg w-full">
                      Data:{" "}
                      {format(new Date(donation.createdAt), "dd MMMM yyyy")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <p>{donation.address}</p>
                  </div>
                </div>
              )}
            </Link>
          ))}
      </div>
    </div>
  );
}
