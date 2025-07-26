import Form from "../component/Form.tsx";

async function translate(formData: FormData) {
    return {
        json() {
            return {
                status: formData.get("status"),
            };
        },
    };
}

async function submitForm(formData: FormData) {
    console.log("Employment submitted");
    const response = await translate(formData);
    console.log(response.json());
}

function WorkHistory() {
    return (
        <>
            <h1>Employment</h1>
            <Form action={submitForm}>
                <fieldset>
                    <div className="field-group">
                        <label>How are you currently employed?</label>
                        <select name="status" className="field-select">
                            <option value="*">Select</option>
                            <option value="full-time">Full-time employed</option>
                            <option value="part-time">Part-time employed</option>
                            <option value="self-employed">Self-employed</option>
                            <option value="unemployed">Unemployed</option>
                        </select>
                    </div>
                </fieldset>
            </Form>
        </>
    );
}

export default WorkHistory;
