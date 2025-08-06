import { format } from "date-fns";

type DatePickerProps = {
  value?: string;
  name: string;
  id: string;
  label: string;
};

/**
 * Render a Date Picker component.
 *
 * @param id {string} The ID for the component
 * @param label {string} The text label to apply for the component
 * @param name {string} The name that specified the data field for the component
 * @param value {string} The date to display, supplied in ISO format.
 */
function DatePicker({ id, label, name, value }: DatePickerProps) {
  const formattedValue = typeof value === "string" ? format(value, "d MMM yyyy") : "";
  return (
    <div className="slds-form-element slds-form-element_stacked">
      <label className="slds-form-element__label" htmlFor={id}>
        {label}
      </label>
      <div className="slds-form-element__control">
        <input type="text" id={id} className="slds-input" value={formattedValue} />
      </div>
      <input type="hidden" name={name} value={value} />
    </div>
  );
}

export default DatePicker;
