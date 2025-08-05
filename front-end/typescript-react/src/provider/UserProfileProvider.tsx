import { type ReactNode, useReducer } from "react";
import {
  UserProfileContext,
  UserProfileDispatchContext,
  type UserProfileAction,
} from "../context/UserProfileContext.ts";
import { Gender, Jurisdiction, StoredDate, type UserProfile } from "../types";

const DEFAULT_DATE_OF_BIRTH = new StoredDate(1970, 1, 1);

const USER_PROFILE_DEFAULT: UserProfile = {
  jurisdiction: Jurisdiction.VIC,
  personalDetails: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dateOfBirth: DEFAULT_DATE_OF_BIRTH,
    gender: Gender.NOT_SPECIFIED,
  },
  addressHistory: [],
  employmentHistory: [],
  dependents: [],
  governmentIdentity: [],
};

function userProfileReducer(currentProfile: UserProfile, action: UserProfileAction) {
  switch (action.type) {
    case "LOAD": {
      const loadedProfile = action.payload as unknown as UserProfile;
      const { day, month, year } = loadedProfile.personalDetails.dateOfBirth;
      loadedProfile.personalDetails.dateOfBirth = new StoredDate(year, month, day);
      return loadedProfile;
    }
  }
  return currentProfile;
}

export default function UserProfileProvider({ children }: { children: ReactNode }) {
  const [profile, dispatch] = useReducer(userProfileReducer, USER_PROFILE_DEFAULT);

  return (
    <UserProfileContext value={profile}>
      <UserProfileDispatchContext value={dispatch}>{children}</UserProfileDispatchContext>
    </UserProfileContext>
  );
}
