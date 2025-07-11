import {useNavigate} from "react-router";
import {useFormStatus} from "react-dom";
import type {ReactNode} from "react";
import type {NavigateFunction} from "react-router";
import type {FormAction} from "../types";

interface FormProps {
    action: FormAction;
    children: ReactNode;
}

function handleSubmit(action: FormAction, navigate: NavigateFunction) {
    return async function (formData: FormData) {
        await action(formData);
        navigate("/");
    };
}

function SubmitButton() {
    const {pending} = useFormStatus();
    return <button type="submit" className="button button--primary" disabled={pending}>Save and exit</button>
}

function Form({action, children}: FormProps) {
    const navigate = useNavigate();

    return (
        <form action={handleSubmit(action, navigate)}>
            {children}
            <div className="form__footer">
                <button type="button" className="button button--secondary" onClick={() => navigate("/")}>Cancel</button>
                <SubmitButton/>
            </div>
        </form>
    );
}

export default Form;
