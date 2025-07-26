import Form from "../component/Form.tsx";

async function translate(formData: FormData) {
  return {
    json() {
      return {
        identificationValue: formData.get("identificationValue"),
      };
    },
  };
}

async function submitForm(formData: FormData) {
  console.log("Government identity submitted");
  const response = await translate(formData);
  console.log(response.json());
}

function GovernmentIdentity() {
  return (
    <>
      <h1>Tax File Number</h1>
      <Form action={submitForm}>
        <fieldset>
          <div className="field-group">
            <label>What is your tax file number?</label>
            <input type="text" name="identificationValue" />
          </div>
        </fieldset>
      </Form>
    </>
  );
}
export default GovernmentIdentity;
