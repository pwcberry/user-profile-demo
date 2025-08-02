export type UUID = string;
export type FormAction = (formData: FormData) => Promise<void>;
export type NonValue = null | undefined;
export type Primitive = string | number | boolean;
export type KeyedObject = {
  [key: string]: Primitive | NonValue;
};
export type Nullable<T> = T | null;

export type User = {
  id: UUID;
  email: string;
};

export * from "./UserProfile.ts";
