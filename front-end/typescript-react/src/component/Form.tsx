import "@salesforce-ux/design-system/css/buttons/base/index.css";
import "@salesforce-ux/design-system/css/buttons/stateful/index.css";
import { useNavigate } from "react-router";
import { useFormStatus } from "react-dom";
import type { ReactNode } from "react";
import type { NavigateFunction } from "react-router";
import type { FormAction } from "../types";

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
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="slds-button slds-button_brand" disabled={pending}>
      Save and exit
    </button>
  );
}

function Form({ action, children }: FormProps) {
  const navigate = useNavigate();

  return (
    <form action={handleSubmit(action, navigate)}>
      {children}
      <footer className="form__footer">
        <button type="button" className="slds-button slds-button_neutral" onClick={() => navigate("/")}>
          Cancel
        </button>
        <SubmitButton />
      </footer>
    </form>
  );
}

export default Form;
