import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import KerkoGjakForm from "./KerkoGjakForm";
import axios from "axios";

export default function KerkoGjak() {
  const { action } = useParams();
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    axios.get("/donations").then(({ data }) => {
      setDonations(data);
    });
  }, []);

  return (
    <div>
      {action !== "new" && (
        <div>
          <div className="text-center">
            <Link
              className="inline-flex gap-2 bg-primary text-white py-2 px-6 rounded-full text-center hover:bg-red-700"
              to={"/account/kerkogjak/new"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Kerko doza te reja te gjakut
            </Link>
          </div>
          <div>
            {donations.length > 0 &&
              donations.map((donation) => (
                <div key={donation._id}>{donation.address}</div>
              ))}
          </div>
        </div>
      )}
      {action === "new" && (
        <div>
          <div className="text-center font-bold text-white bg-gray-400 border max-w-xl mx-auto rounded-full px-5 py-5 hover:bg-red-400">
            <h1>Ju lutem jeni korrekt gjate mbushjes se formes !</h1>
            <h1>Fushat me yllin (*) jane te detyruara</h1>
            <h1>
              Grupi i juaj i gjakut miret automatikisht nga te dhenat e
              regjistrimit
            </h1>
          </div>
          <KerkoGjakForm />
        </div>
      )}
    </div>
  );
}
