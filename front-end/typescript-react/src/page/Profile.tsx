import { useUserProfile } from "../context/UserProfileContext.ts";

function Profile() {
  const profile = useUserProfile();

  if (profile !== null) {
    return (
      <>
        <h1>Your Profile</h1>
        <p>
          {profile.personalDetails.firstName} {profile.personalDetails.lastName}
        </p>
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
}
export default Profile;
