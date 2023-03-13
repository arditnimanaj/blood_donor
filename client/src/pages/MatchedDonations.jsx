import React, { useEffect, useState } from "react";
import axios from "axios";
import heartSvg from "../assets/blood-bank.svg";
import { format } from "date-fns";
import MatchedInfo from "./components/matchedInfo";

export default function Homepage() {
  const [matchedDonations, setMatchedDonations] = useState([]);
  useEffect(() => {
    axios.get("/matchedDonations").then((response) => {
      setMatchedDonations(response.data);
    });
  }, []);
  return (
    <div>
      <MatchedInfo />
      <div className="mt-4 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {matchedDonations.length > 0 &&
          matchedDonations.map((donation) => (
            <div
              key={donation._id}
              className="bg-red-100 rounded-2xl mx-3 p-2 flex-col cursor-pointer"
            >
              <img src={heartSvg} className="" />
              {donation.isAnonymous ? (
                <div>
                  <h1 className="text-red-800 text-xl font-bold ml-3 ">
                    Anonim
                  </h1>
                  <h3 className="items-center">
                    Te dhenat e personit jane anonime. Klikoni per me shume
                    detaje.
                  </h3>
                </div>
              ) : (
                <div className="text-red-800 text-xl  font-bold ml-3">
                  {donation.kerkuesi.emri + " " + donation.kerkuesi.mbiemri}
                  <h1>Grupi i gjakut: {donation.kerkuesiGroup}</h1>
                  <p className="">
                    Data: {format(new Date(donation.createdAt), "dd MMMM yyyy")}
                  </p>
                  <p>{donation.address}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
