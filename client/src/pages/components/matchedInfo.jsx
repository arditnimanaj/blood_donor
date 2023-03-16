import React from "react";

export default function MatchedInfo() {
  return (
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
        Ne kete modul do shfaqen vetem ata persona qe ju mund t'i dhuroni gjak,
        pra personat qe gjaku juaj eshte kompatibil me grupin e tyre te gjakut.
        Per te shikuar detajet klikoni mbi kornizat.
      </span>
    </div>
  );
}
