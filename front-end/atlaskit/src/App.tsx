import { Routes, Route } from "react-router";
import Navigation from "./layout/Navigation.tsx";
import DetailsCanvas from "./layout/DetailsCanvas.tsx";
import Profile from "./page/Profile.tsx";
import PersonalDetails from "./page/PersonalDetails.tsx";
import AddressHistory from "./page/AddressHistory.tsx";
import WorkHistory from "./page/WorkHistory.tsx";
import GovernmentIdentity from "./page/GovernmentIdentity.tsx";

function App() {
  return (
    <main className="grid">
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
