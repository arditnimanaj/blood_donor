import React from "react";
import { Link } from "react-router-dom";

export default function NonLoggedIn() {
  return (
    <div>
      <div className="text-center flex-col opacity-90  my-8 py-6 px-5 rounded-3xl  mx-auto max-w-3xl bg-gray-300 ">
        <h1 className="text-3xl font-medium mb-4 uppercase ">
          Dhuro Gjak Shpeto jete
        </h1>
        <span className="text-l">
          Kjo platforme eshte krijuar ne menyre qe t'iu ndihmoj njerezve ne
          nevoje per gjak.
        </span>
        <br></br>
        <span className="text-bold text-red-800">
          Per te vazhduar me perdorimin e platformes ju duhet te
          kyceni/regjistroheni si perdorues.
        </span>
        <br></br>
        <button className="bg-slate-600 hover:bg-red-800 p-4 w-fit rounded-3xl my-4 text-white font-bold uppercase ">
          <Link to={"/login"}>Klikoni per tu kycur</Link>
        </button>
        <br></br>
        <h3 className="px-9 my-2 text-l">
          Tek lidhja{" "}
          <span className="text-bold text-red-800">'Kerko Gjak'</span> do te
          redirektoheni tek forma ku do parashtroni kerkesen per nje doze te
          gjakut.{" "}
        </h3>
        <h3 className="px-9 my-2 text-l">
          Tek lidhja{" "}
          <span className="text-bold text-red-800">'Dhuro Gjak'</span> do te
          redirektoheni tek lista e personave qe ju mund t'i dhuroni gjak, ky
          modul automatikisht filtron te gjithe personat qe kerkojne gjak, e ai
          grup perkon me grupin tuaj.
        </h3>
        <h3 className="px-9 my-2 text-l">
          Tek lidhja{" "}
          <span className="text-bold text-red-800">
            'Shiko te gjithe kerkuesit'
          </span>{" "}
          do te redirektoheni tek lista e te gjithe personave qe po kerkojne
          gjak momentalisht, pavaresisht grupit te gjakut.
        </h3>
      </div>
    </div>
  );
}
