import Form from "../component/Form.tsx";
import DatePicker from "../component/DatePicker.tsx";

interface DataObject {
  [key: string]: string | number;
}

async function translate(formData: FormData) {
  const result: DataObject = {};
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
  return (
    <>
      <h1>Personal Details</h1>
      <Form action={submitForm}>
        <fieldset>
          <div className="slds-form-element slds-form-element_stacked">
            <label className="slds-form-element__label" htmlFor="input__first_name">
              First name
            </label>
            <div className="slds-form-element__control">
              <input type="text" name="firstName" id="input__first_name" className="slds-input" />
            </div>
          </div>
          <div className="slds-form-element slds-form-element_stacked">
            <label className="slds-form-element__label" htmlFor="input__last_name">
              Last name
            </label>
            <div className="slds-form-element__control">
              <input type="text" name="lastName" id="input__last_name" className="slds-input" />
            </div>
          </div>
          <DatePicker id="input__date_of_birth" name="dateOfBirth" label="Date of birth" />
          <div className="slds-form-element slds-form-element_stacked">
            <label className="slds-form-element__label" htmlFor="input__phone_number">
              Phone number
            </label>
            <div className="slds-form-element__control">
              <input type="text" name="phoneNumber" id="input__phone_number" className="slds-input" />
            </div>
          </div>
        </fieldset>
      </Form>
    </>
  );
}

export default PersonalDetails;
