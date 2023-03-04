import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import AccountNav from "./AccountNav";
export default function KerkoGjakForm() {
  const [value, setValue] = useState(0);
  const changeValue = (event) => {
    setValue(event.target.value);
  };
  function headerClassName() {
    return "text-xl mt-4 flex gap-2 items-center ";
  }

  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date().toLocaleString());
  const [sasia, setSasia] = useState("");
  const [info, setInfo] = useState("");
  const [age, setAge] = useState("18");
  const [gender, setGender] = useState("male");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const [redirectToDonationList, setRedirectToDonationList] = useState(false);

  async function addnewDonation(ev) {
    ev.preventDefault();

    const { data: responseData } = await axios.post("/donations", {
      phoneNumber,
      address,
      createdAt,
      sasia,
      info,
      age,
      gender,
      isAnonymous,
    });
    setRedirectToDonationList(true);
  }

  if (redirectToDonationList) {
    return <Navigate to={"/account/kerkogjak"} />;
  }

  return (
    <>
      <AccountNav />
      <div className="text-center font-bold text-white bg-gray-400 border max-w-xl mx-auto rounded-full px-5 py-5 hover:bg-red-400">
        <h1>Ju lutem jeni korrekt gjate mbushjes se formes !</h1>
        <h1>Fushat me yllin (*) jane te detyruara</h1>
        <h1>
          Grupi i juaj i gjakut miret automatikisht nga te dhenat e regjistrimit
        </h1>
      </div>
      <form className="max-w-lg mx-auto" onSubmit={addnewDonation}>
        <h2 className={headerClassName()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 pt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          Nr. i telefonit*
        </h2>
        <input
          type="tel"
          placeholder="Ju lutem shenoni numrin kontaktues..."
          required
          value={phoneNumber}
          onChange={(ev) => setPhoneNumber(ev.target.value)}
        />
        <h2 className={headerClassName()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 pt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Adresa*
        </h2>
        <input
          type="text"
          placeholder="Ju lutem shenoni adresen tuaj"
          required
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
        />
        <h2 className={headerClassName()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 pt-1"
          >
            <path
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              clipRule="evenodd"
            />
          </svg>
          Data
        </h2>
        <input
          type="date"
          placeholder="Shenoni daten..."
          value={createdAt}
          onChange={(ev) => setCreatedAt(ev.target.value)}
        />
        <h2 className={headerClassName()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 pt-1"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          Sasia e gjakut* (në ml){" "}
          <span className="font-bold text-primary">{value}</span>
        </h2>
        <input
          type="range"
          class="range pr-6 accent-red-500"
          placeholder="Shenoni daten..."
          min="0"
          step="10"
          max="500"
          value={sasia}
          onChange={(ev) => setSasia(ev.target.value)}
          required
        />
        <h2 className={headerClassName()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 pt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          Informacione shtesë
          <span className="text-xs text-gray-900">
            (shkruani informacione shtese, nese keni)
          </span>
        </h2>
        <textarea value={info} onChange={(ev) => setInfo(ev.target.value)} />
        <h2 className={headerClassName()}>Mosha*</h2>
        <input
          type="number"
          placeholder="Ju lutem shenoni moshen tuaj"
          min="0"
          max="150"
          required
          value={age}
          onChange={(ev) => setAge(ev.target.value)}
        />
        <h2 className={headerClassName()}>Gjinia:</h2>
        <label className="genderGroupForm flex text-center  justify-right text-black-700 mt-3 ">
          <select
            required
            value={gender}
            onChange={(ev) => setGender(ev.target.value)}
          >
            <option value="male">Mashkull</option>
            <option value="female">Femer</option>
            <option value="other">Tjeter</option>
          </select>
        </label>
        <div className="flex flex-col text-center bg-red-300 rounded-full my-4 py-3 px-4 max-w-full ">
          <input
            class="w-5 h-5 flex mx-auto bg-red-500 rounded-full enabled:hover:bg-red-500 checked:bg-red-500"
            type="checkbox"
            value={isAnonymous}
            onChange={(ev) => setIsAnonymous(ev.target.checked)}
          />

          <h1 className="font-bold text-xl">Anonim?</h1>
          <span>
            Me te qenurit anonim kuptojme qe dhuruesi i gjakut do shohe vetem te
            dhenat kontaktuese.
          </span>
        </div>
        <div>
          <button className="primary my-6 ">Ruaj</button>
        </div>
      </form>
    </>
  );
}
