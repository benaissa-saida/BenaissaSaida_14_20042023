import PropTypes from "prop-types";
import { FormContext } from "./Form";
import { useContext } from "react";

function BaseInput({ inputType, label, name }) {
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={inputType}
        value={form[name]}
        onChange={handleFormChange}
        name={name}
        id={label}
      />
    </div>
  );
}

BaseInput.propTypes = {
  inputType: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
};
export default BaseInput;
