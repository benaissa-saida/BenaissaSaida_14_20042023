import { Link } from "react-router-dom";
import { FormContext } from "../components/form/Form"
import { useContext } from "react";

function Employees() {
  const formContext = useContext(FormContext);
  const { form } = formContext
  console.log(form)

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <div>
        {form.firstName}
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Employees;