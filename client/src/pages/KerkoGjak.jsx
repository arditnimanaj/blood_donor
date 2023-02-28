import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
export default function KerkoGjak() {
  const { action } = useParams();
  const [value, setValue] = useState(0);
  const changeValue = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-2 bg-primary text-white py-2 px-6 rounded-full text-center"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Kerko doza te reja te gjakut
          </Link>
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
          <form className="max-w-lg mx-auto">
            <h2 className="text-xl mt-4 flex gap-2 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 pt-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              Nr. i telefonit*
            </h2>
            <input
              type="tel"
              placeholder="Ju lutem shenoni numrin kontaktues..."
              required
            />
            <h2 className="text-xl mt-4 flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 pt-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Adresa*
            </h2>
            <input
              type="text"
              placeholder="Ju lutem shenoni adresen tuaj"
              required
            />
            <h2 className="text-xl mt-4 flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 pt-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clip-rule="evenodd"
                />
              </svg>
              Data
            </h2>
            <input type="date" placeholder="Shenoni daten..." />
            <h2 className="text-xl mt-4 flex gap-2 items-center">
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
              onChange={changeValue}
              required
            />
            <h2 className="flex text-xl mt-3  gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 pt-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              Informacione shtesë
              <span className="text-xs text-gray-900">
                (shkruani informacione shtese, nese keni)
              </span>
            </h2>
            <textarea />
            <h2 className="flex text-xl mt-3 gap-2 items-center">Mosha</h2>
            <input
              type="number"
              placeholder="Ju lutem shenoni moshen tuaj"
              min="0"
              max="150"
              required
            />

            <label className="genderGroupForm flex text-center  justify-right text-black-700 mt-3 ">
              Gjinia:
              <select required>
                <option value="male">Mashkull</option>
                <option value="female">Femer</option>
                <option value="other">Tjeter</option>
              </select>
            </label>
          </form>
        </div>
      )}
    </div>
  );
}
