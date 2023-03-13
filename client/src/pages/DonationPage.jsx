import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { Helmet } from "react-helmet";

export default function DonationPage() {
  const { id } = useParams();
  const [donation, setDonation] = useState(null);
  const { subpage } = useParams;
  console.log(subpage);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/donations/${id}`).then((response) => {
      setDonation(response.data);
    });
  }, [id]);

  if (!donation) {
    return "";
  }

  function divClassName() {
    return "flex gap-3 items-center ml-14 p-2 text-2xl text-red-800 font-serif max-w-3xl ";
  }

  function buttonClassName() {
    return "flex text-2xl items-center gap-4 bg-red-300 rounded-full p-3 mt-4 justify-around max-w-full";
  }
  return (
    <div className="flex ">
      <Helmet>
        <body className=" bg-donation "></body>
      </Helmet>
      <div className="mt-4 px-8 py-4">
        <div className="flex gap-4">
          <Link to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-9 h-9 rounded-full bg-primary p-1 hover:bg-black hover:text-white mt-3"
            >
              <path
                fill-rule="evenodd"
                d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-11 h-11 mt-2"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clip-rule="evenodd"
              />
            </svg>
            {!donation.isAnonymous && (
              <h1 className="text-5xl">
                {donation.kerkuesi.emri + " " + donation.kerkuesi.mbiemri}
              </h1>
            )}
            {donation.isAnonymous && <h1 className="text-5xl">Anonim</h1>}
          </div>
        </div>
        {!donation.isAnonymous && (
          <>
            <div className={divClassName() + " mt-4"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                class="w-6 h-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>

              <span className="flex gap-2.5">
                Grupi i gjakut:{" "}
                <p className="font-bold">{donation.kerkuesiGroup}</p>
              </span>
            </div>
            <div className={divClassName()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className=" first-letter:uppercase">
                {" "}
                {donation.gender + " " + donation.age}
              </span>
            </div>
            <div className={divClassName()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                class="w-6 h-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              <span className="flex gap-2.5">
                Sasia qe nevojitet:
                <p className="font-bold">{donation.sasia}</p> ml
              </span>
            </div>
            <div className={divClassName()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="flex gap-2.5">
                Lokacioni:<p className="font-bold">{donation.address}</p>{" "}
              </span>
            </div>
            <div className={divClassName()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="flex gap-2.5">
                Data e postuar:{" "}
                <p className="font-bold">
                  {format(new Date(donation.createdAt), "dd MMMM yyyy")}
                </p>
              </span>
            </div>
          </>
        )}
        {donation.info && (
          <div className="flex gap-3 items-center ml-14 p-2 text-2xl text-red-800 font-serif max-w-5xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="flex gap-2.5 max-w-3xl">
              Info:
              <p className="text-bold max-w-3xl">
                {donation.info && (
                  <small className=" max-w-sm">{donation.info}</small>
                )}
              </p>
            </span>
          </div>
        )}
        {donation.isAnonymous && (
          <div className="text-2xl text-red-700 font-serif ml-10 p-4 max-w-3xl">
            <h1>
              Ky perdorues ka zgjedhur te jete anonim. Grupi i gjakut te ketij
              perdoruesi perkon me grupin e gjakut tuaj, pra ju mund t'i dhuroni
              gjak. Kontakti i vetem i ketij personi eshte numri i telefonit.
            </h1>
          </div>
        )}
      </div>
      <div className="mt-9 px-8 py-4 mr-0 ml-auto">
        <a href="tel:{donation.phoneNumber}">
          <div className={buttonClassName()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 mt-1 -ml-1"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd"
              />
            </svg>
            {donation.phoneNumber}
          </div>
        </a>
        {!donation.isAnonymous && (
          <a href="mailto:{donation.kerkuesi.email}">
            <div className={buttonClassName()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 mt-1"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <span>{donation.kerkuesi.email}</span>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
