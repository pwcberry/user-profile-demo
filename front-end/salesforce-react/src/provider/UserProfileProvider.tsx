import { type ReactNode, useReducer } from "react";
import {
  UserProfileContext,
  UserProfileDispatchContext,
  type UserProfileAction,
} from "../context/UserProfileContext.ts";
import { Gender, Jurisdiction, type UserProfile } from "../types";

const USER_PROFILE_DEFAULT: UserProfile = {
  jurisdiction: Jurisdiction.VIC,
  personalDetails: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dateOfBirth: "1970-01-01",
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
      return action.payload as unknown as UserProfile;
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
