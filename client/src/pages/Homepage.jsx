import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Homepage() {
  const [allDonations, setAllDonations] = useState([]);
  useEffect(() => {
    axios.get("/allDonations").then((response) => {
      setAllDonations(response.data);
    });
  }, []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {allDonations.length > 0 &&
        allDonations.map((donation) => (
          <div key={donation._id}>
            {donation.kerkuesi.emri + " " + donation.kerkuesi.bloodGroup}
          </div>
        ))}
    </div>
  );
}
