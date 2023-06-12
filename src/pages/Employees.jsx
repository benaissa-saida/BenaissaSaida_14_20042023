import { Link } from "react-router-dom";
import SaveEmployees, { EmployeesContext } from '../components/SaveEmployees';
import { useContext } from "react";

function Employees() {
  const employeesContext = useContext(EmployeesContext);
  const { employeesList } = employeesContext


  return (
    <div className="container">
      <SaveEmployees>
        <h1>Current Employees</h1>
        {employeesList.map(employee => 
          <div key={employee.firstName}>
            {employee.firstName}
          </div>
        )}
        <Link to="/">Home</Link>
        </SaveEmployees>
    </div>
  );
}

export default Employees;