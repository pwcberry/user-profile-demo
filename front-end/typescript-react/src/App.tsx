import { useEffect } from "react";
import { Route, Routes } from "react-router";
import type { KeyedObject } from "./types";
import { useUserProfileDispatch } from "./context/UserProfileContext.ts";
import Navigation from "./layout/Navigation";
import DetailsCanvas from "./layout/DetailsCanvas";
import Profile from "./page/Profile";
import PersonalDetails from "./page/PersonalDetails";
import AddressHistory from "./page/AddressHistory";
import WorkHistory from "./page/WorkHistory";
import GovernmentIdentity from "./page/GovernmentIdentity";

function App() {
  const userProfileDispatch = useUserProfileDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4000/api/profile");
      if (response.ok && !ignore) {
        const profile: KeyedObject = await response.json();
        userProfileDispatch({ type: "LOAD", payload: profile });
      }
    }
    let ignore = false;
    fetchData();
    return () => {
      ignore = true;
    };
  });

  return (
    <main className="grid slds-container_large">
      <Navigation />
      <Routes>
        <Route path="/" element={<DetailsCanvas />}>
          <Route index element={<Profile />} />
          <Route path="personal-details" element={<PersonalDetails />} />
          <Route path="address-history" element={<AddressHistory />} />
          <Route path="work-history" element={<WorkHistory />} />
          <Route path="government-identity" element={<GovernmentIdentity />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
