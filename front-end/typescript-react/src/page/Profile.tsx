import { useContext } from "react";
import UserProfileContext from "../context/UserProfileContext";

function Profile() {
  const profile = useContext(UserProfileContext);

  if (profile !== null) {
    return (
      <>
        <h1>Your Profile</h1>
        <p>
          {profile!.personalDetails.firstName} {profile!.personalDetails.lastName}
        </p>
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
}
export default Profile;
