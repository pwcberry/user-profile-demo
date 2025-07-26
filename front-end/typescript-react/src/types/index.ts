export type FormAction = (formData: FormData) => Promise<void>;
export type NonValue = null | undefined;
export type Primitive = string | number | boolean;
export type KeyedObject = {
  [key: string]: Primitive | NonValue;
};
