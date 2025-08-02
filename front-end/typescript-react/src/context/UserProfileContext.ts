import { createContext } from "react";
import type { Nullable, UserProfile } from "../types";

const UserProfileContext = createContext<Nullable<UserProfile>>(null);

export default UserProfileContext;
