import { createContext, useContext } from "react";
import type { KeyedObject, UserProfile } from "../types";

export type UserProfileAction = {
  type: string;
  payload: KeyedObject;
};

type UserProfileReducer = (action: UserProfileAction) => UserProfile;

export const UserProfileContext = createContext<UserProfile | unknown>(null);
export const UserProfileDispatchContext = createContext<UserProfileReducer | unknown>(null);

export function useUserProfile() {
  return useContext(UserProfileContext) as UserProfile;
}

export function useUserProfileDispatch() {
  return useContext(UserProfileDispatchContext) as UserProfileReducer;
}
