import React, { useEffect } from "react";

export default function AllDonations() {
  const [allDonations, setAllDonations] = useState([]);
  useEffect(() => {
    axios.get("/allDonations").then((response) => {
      setAllDonations(response.data);
    });
  }, []);
  return <div>AllDonations</div>;
}
