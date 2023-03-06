import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import KerkoGjakForm from "./KerkoGjakForm";
import axios from "axios";
import heartSvg from "../assets/blood-bank.svg";
import { format } from "date-fns";

export default function KerkoGjak() {
  const { action } = useParams();
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    axios.get("/userDonations").then(({ data }) => {
      setDonations(data);
    });
  }, []);

  async function helloButton(event) {
    event.preventDefault();
    const donationID = event.currentTarget.id;
    console.log(donationID);
    try {
      await axios.post("/deleteDonation", { donationID });
    } catch (e) {
      console.log(e);
    }
  }

  // const [allDonations, setAllDonations] = useState([]);
  // useEffect(() => {
  //   axios.get("/alldonations").then(({ data }) => {
  //     setAllDonations(data);
  //   });
  // }, []);

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
          <div className="mt-4">
            {donations.length > 0 &&
              donations.map((donation) => (
                <div
                  key={donation._id}
                  className="bg-red-100 p-3 rounded-2xl flex gap-5 my-5 mx-5 items-center"
                >
                  <div className="w-32 h-32 bg-red-100">
                    <img src={heartSvg} />
                  </div>
                  <div className="p-2 flex-col">
                    <h2 className="text-xl text-red-800 font-bold">
                      {donation.kerkuesi.emri +
                        " " +
                        donation.kerkuesi.mbiemri +
                        " (" +
                        donation.gender.charAt(0).toUpperCase() +
                        "-" +
                        donation.age +
                        ") "}
                    </h2>
                    <p className="">
                      {format(new Date(donation.createdAt), "dd MMMM yyyy")}
                    </p>
                    <p className="text-3xl font-bold text-red-800">
                      {donation.kerkuesi.bloodGroup}
                    </p>
                    {/* <p className="">{donation.info}</p> */}
                    <p className="">{donation.address}</p>
                  </div>
                  <Link
                    className=" mr-3 ml-auto"
                    to={"/account/kerkogjak/" + donation._id}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-9 h-9"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </Link>
                  <button id={donation._id} onClick={helloButton}>
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
      {action === "new" && (
        <div>
          <KerkoGjakForm />
        </div>
      )}
    </div>
  );
}
