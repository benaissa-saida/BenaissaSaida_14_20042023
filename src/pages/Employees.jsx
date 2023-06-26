import { Link } from "react-router-dom";
import { EmployeesContext } from "../components/SaveEmployees";
import { useContext } from "react";

function Employees() {
  const employeesContext = useContext(EmployeesContext);
  const { employeesList } = employeesContext;

  return (
    <div className="container">
      <h1>Current Employees</h1>
      {employeesList.length}
      {employeesList.map((employee) => (
        <div key={employee.id}>{employee.firstName}</div>
      ))}
      <Link to="/">Home</Link>
    </div>
  );
}

export default Employees;
