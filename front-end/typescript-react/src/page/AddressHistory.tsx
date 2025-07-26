import Form from "../component/Form.tsx";

async function translate(formData: FormData) {
  const fullAddress = formData.get("fullAddress");
  const startDate = {
    month: formData.get("month"),
    year: formData.get("year"),
  };
  return {
    json() {
      return {
        fullAddress,
        startDate,
        endDate: null,
      };
    },
  };
}

async function submitForm(formData: FormData) {
  console.log("Address submitted");
  const response = await translate(formData);
  console.log(response.json());
}

function AddressHistory() {
  return (
    <>
      <h1>Current address</h1>
      <Form action={submitForm}>
        <fieldset>
          <div className="field-group">
            <label htmlFor="">Address</label>
            <input type="text" name="fullAddress" className="field-text" />
          </div>
          <div className="field-group">
            <label htmlFor="">When did you move in?</label>
            <select name="month" className="field-select">
              <option value="*">Month</option>
              <option value="January">January</option>
            </select>
            <select name="year" className="field-select">
              <option value="*">Year</option>
              <option value="2025">2025</option>
            </select>
          </div>
          <div className="field-group">
            <label htmlFor="">Do you own the property?</label>
            <label>
              <input type="radio" name="homeOwner" value="true" />
              Yes
            </label>
            <label>
              <input type="radio" name="homeOwner" value="false" />
              No
            </label>
          </div>
        </fieldset>
      </Form>
    </>
  );
}

export default AddressHistory;
