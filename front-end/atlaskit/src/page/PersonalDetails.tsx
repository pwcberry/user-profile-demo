import Form from "../component/Form.tsx";

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
        }
    }
}

async function submitForm(formData: FormData) {
    console.log("Personal details submitted")
    const response = await translate(formData);
    console.log(response.json());
}

function PersonalDetails() {
    return (
        <>
            <h1>Personal Details</h1>
            <Form action={submitForm}>
                <fieldset>
                    <div>
                        <label>First name</label>
                        <input type="text" name="firstName"/>
                    </div>
                    <div>
                        <label>Last name</label>
                        <input type="text" name="lastName"/>
                    </div>
                    <div>
                        <label>Date of birth</label>
                        <input type="text" name="dateOfBirth"/>
                    </div>
                    <div>
                        <label>Phone number</label>
                        <input type="text" name="phoneNumber"/>
                    </div>
                </fieldset>
            </Form>
        </>
    )
}

export default PersonalDetails;
