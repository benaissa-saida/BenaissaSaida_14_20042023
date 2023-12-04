import { Link } from "react-router-dom";
import { EmployeesContext } from "../components/SaveEmployees";
import { useContext } from "react";
import { DataTable } from "mik-datatable";

function Employees() {
  const employeesContext = useContext(EmployeesContext);
  const { employeesList } = employeesContext;
  const headers = [
    { name: "First Name", field: "firstName" },
    { name: "Last Name", field: "lastName" },
    { name: "Start Date", field: "startDate" },
    { name: "Department", field: "department" },
    { name: "Date of Birth", field: "dateBirth" },
    { name: "Street", field: "street" },
    { name: "City", field: "city" },
    { name: "State", field: "state" },
    { name: "Zip Code", field: "zip" },
  ];

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <DataTable data={employeesList} headers={headers} />
      <Link to="/">Home</Link>
    </div>
  );
}

export default Employees;
