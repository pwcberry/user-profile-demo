import { useState, type ChangeEvent } from "react";
import Form from "../component/Form.tsx";
import DatePicker from "../component/DatePicker.tsx";
import { useUserProfile } from "../context/UserProfileContext.ts";
import type * as UserProfile from "../types/UserProfile.ts";
import type { KeyedObject } from "../types";

async function translate(formData: FormData) {
  const result: KeyedObject = {};
  for (const [key, value] of formData.entries()) {
    result[key] = value as string;
  }

  return {
    json() {
      return result;
    },
  };
}

async function submitForm(formData: FormData) {
  console.log("Personal details submitted");
  const response = await translate(formData);
  console.log(response.json());
}

function PersonalDetails() {
  const profile = useUserProfile();
  const [data, setData] = useState<UserProfile.PersonalDetails>(profile.personalDetails);
  const [hasChanged, setHasChanged] = useState(false);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const changedData = data as unknown as KeyedObject;
    changedData[event.target.name] = event.target.value as string;
    setData(changedData as unknown as UserProfile.PersonalDetails);
    setHasChanged(true);
  }

  return (
    <>
      <h1>Personal Details</h1>
      <Form action={submitForm} isChanged={hasChanged}>
        <fieldset>
          <div className="slds-form-element slds-form-element_stacked">
            <label className="slds-form-element__label" htmlFor="input__first_name">
              First name
            </label>
            <div className="slds-form-element__control">
              <input
                type="text"
                value={data.firstName}
                onChange={handleInputChange}
                name="firstName"
                id="input__first_name"
                className="slds-input"
              />
            </div>
          </div>
          <div className="slds-form-element slds-form-element_stacked">
            <label className="slds-form-element__label" htmlFor="input__last_name">
              Last name
            </label>
            <div className="slds-form-element__control">
              <input
                type="text"
                value={data.lastName}
                onChange={handleInputChange}
                name="lastName"
                id="input__last_name"
                className="slds-input"
              />
            </div>
          </div>
          <DatePicker
            value={data.dateOfBirth.isoValue}
            id="input__date_of_birth"
            name="dateOfBirth"
            label="Date of birth"
          />
          <div className="slds-form-element slds-form-element_stacked">
            <label className="slds-form-element__label" htmlFor="input__phone_number">
              Phone number
            </label>
            <div className="slds-form-element__control">
              <input
                type="text"
                value={data.phoneNumber}
                onChange={handleInputChange}
                name="phoneNumber"
                id="input__phone_number"
                className="slds-input"
              />
            </div>
          </div>
        </fieldset>
      </Form>
    </>
  );
}

export default PersonalDetails;
