import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import DatePicker from "../../src/component/DatePicker.tsx";

describe("DatePicker", () => {
  const FIELD_LABEL = "A date";
  const FIELD_ID = "date_field";
  const FIELD_NAME = "date_field";

  it("should render correctly", () => {
    const { container, getByLabelText } = render(<DatePicker name={FIELD_NAME} id={FIELD_ID} label={FIELD_LABEL} />);
    const input = getByLabelText(FIELD_LABEL) as HTMLInputElement;
    const hiddenInput = container.querySelector("input[type=hidden]") as HTMLInputElement;
    const componentRoot = container.firstChild as HTMLElement;

    expect(input).not.toBeNull();
    expect(hiddenInput).not.toBeNull();
    expect(input.id).toBe(FIELD_ID);
    expect(hiddenInput.name).toBe(FIELD_NAME);
    expect(componentRoot.className).to.include("slds-form-element");
  });

  it("should not display a value when the input value is not specified", () => {
    const { container, getByLabelText } = render(<DatePicker name={FIELD_NAME} id={FIELD_ID} label={FIELD_LABEL} />);
    const input = getByLabelText(FIELD_LABEL) as HTMLInputElement;
    const hiddenInput = container.querySelector("input[type=hidden]") as HTMLInputElement;

    expect(input.value).toBe("");
    expect(hiddenInput.value).toBe("");
  });

  it("should render a formatted date in the field when the input value is specified", () => {
    const FIELD_VALUE = "1996-05-29T10:00:00+10:00";
    const { container, getByLabelText } = render(
      <DatePicker name={FIELD_NAME} id={FIELD_ID} label={FIELD_LABEL} value={FIELD_VALUE} />
    );
    const input = getByLabelText(FIELD_LABEL) as HTMLInputElement;
    const hiddenInput = container.querySelector("input[type=hidden]") as HTMLInputElement;

    expect(input.value).toBe("29 May 1996");
    expect(hiddenInput.value).toBe(FIELD_VALUE);
  });
});
