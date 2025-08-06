import type { NavigateFunction } from "react-router";
import { useNavigate } from "react-router";
import { useFormStatus } from "react-dom";
import type { ReactNode } from "react";
import type { FormAction } from "../types";

interface FormProps {
  action: FormAction;
  isChanged?: boolean;
  children: ReactNode;
}

function handleSubmit(action: FormAction, navigate: NavigateFunction) {
  return async function (formData: FormData) {
    await action(formData);
    navigate("/");
  };
}

function Form({ action, isChanged = false, children }: FormProps) {
  const navigate = useNavigate();
  const { pending } = useFormStatus();
  const isSubmitButtonDisabled = !isChanged || pending;

  return (
    <form action={handleSubmit(action, navigate)}>
      {children}
      <footer className="form__footer slds-grid slds-nowrap">
        <span className="slds-col slds-size_1-of-3">
          <button type="button" className="slds-button slds-button_neutral" onClick={() => navigate("/")}>
            Cancel
          </button>
        </span>
        <span className="slds-col slds-size_1-of-3 slds-col_bump-left">
          <button type="submit" className="slds-button slds-button_brand" disabled={isSubmitButtonDisabled}>
            Save and exit
          </button>
        </span>
      </footer>
    </form>
  );
}

export default Form;
