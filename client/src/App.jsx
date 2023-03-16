import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import AccountPage from "./pages/AccountPage";
import DonationPage from "./pages/DonationPage";
import IndexPage from "./pages/IndexPage";
import KerkoGjak from "./pages/KerkoGjak";
import AllDonations from "./pages/AllDonations";
import KerkoGjakForm from "./pages/KerkoGjakForm";
import LoginPage from "./pages/LoginPage";
import NonLoggedIn from "./pages/NonLoggedIn";
import RegisterPage from "./pages/RegisterPage";
import { UserContext, UserContextProvider } from "./UserContext";

axios.defaults.baseURL = "http://127.0.0.1:4000/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/:subpage?" element={<AccountPage />} />
          <Route path="/account/:subpage/:action" element={<AccountPage />} />
          <Route path="/account/kerkogjak/:id" element={<KerkoGjakForm />} />
          <Route path="/alldonations" element={<AllDonations />} />
          <Route path="/donations/:id" element={<DonationPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
