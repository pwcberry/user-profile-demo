import { useEffect } from "react";
import { Route, Routes } from "react-router";
import type { KeyedObject, Nullable } from "./types";
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
    let ignore = false;

    fetch("http://localhost:4000/api/profile")
      .then((response): Promise<Nullable<KeyedObject>> => {
        if (response.ok && !ignore) {
          return response.json() as Promise<KeyedObject>;
        }
        return Promise.resolve(null);
      })
      .then((data: Nullable<KeyedObject>) => {
        if (data !== null) {
          userProfileDispatch({ type: "LOAD", payload: data });
        }
      });

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
