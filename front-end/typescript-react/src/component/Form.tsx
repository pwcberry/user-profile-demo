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
    <button type="submit" className="slds-button slds-button_brand slds-col_bump-left" disabled={pending}>
      Save and exit
    </button>
  );
}

function Form({ action, children }: FormProps) {
  const navigate = useNavigate();

  return (
    <form className="slds-form" action={handleSubmit(action, navigate)}>
      {children}
      <footer className="slds-grid slds-nowrap">
        <button type="button" className="slds-button slds-button_neutral" onClick={() => navigate("/")}>
          Cancel
        </button>
        <SubmitButton />
      </footer>
    </form>
  );
}

export default Form;
