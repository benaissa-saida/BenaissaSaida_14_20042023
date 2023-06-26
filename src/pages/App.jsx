import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Dropdown from "mik-dropdown/dist/Dropdown";
import AdressFieldset from "../components/form/AdressFieldset";
import BaseInput from "../components/form/BaseInput";
import Header from "../components/Header";
import Form from "../components/form/Form";
import { departments } from "../datas/department";
import { states } from "../datas/states";
import { EmployeesContext } from "../components/SaveEmployees";
import Modal from "mik-modal/dist/Modal";
import "../styles/App.css";

function App() {
  const id = uuid();
  const [open, setIsOpen] = useState(false);
  const employeesContext = useContext(EmployeesContext);
  const { setEmployeesList, employeesList } = employeesContext;
  const [state, setState] = useState(states[0]);
  const [department, setDepartment] = useState(departments[0]);
  const initialValues = {
    firstName: "",
    lastName: "",
    dateBirth: "",
    startDate: "",
    street: "",
    city: "",
    zip: "",
    state: "",
    department: "",
  };

  const onStateChange = (value) => {
    setState(value);
  };

  const onDptChange = (value) => {
    setDepartment(value);
  };

  const submit = (form) => {
    form.id = id;
    form.state = state.value;
    form.department = department.value;
    employeesList.push(form);
    if (employeesList.length) {
      setEmployeesList();
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="title">
        {" "}
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Header>
          <Link to="/table">View Current Employees</Link>
          <h2>Create Employee</h2>
        </Header>
        <Modal
          title="Employee Created!"
          isOpened={open}
          closeModal={closeModal}
        />
        <Form submit={submit} initialValues={initialValues}>
          <BaseInput inputType="text" label="First Name" name="firstName" />
          <BaseInput inputType="text" label="Last Name" name="lastName" />
          <div>DatePicker datebirth</div>
          <div>DatePicker startdate</div>
          <AdressFieldset>
            <legend>Adress</legend>
            <BaseInput inputType="text" label="Street" name="street" />
            <BaseInput inputType="text" label="City" name="city" />
            <Dropdown
              label="State"
              onChange={(value) => onStateChange(value)}
              defaultOpt={state.label}
              name="state"
              options={states}
              isSearchable
            />
            <BaseInput inputType="number" label="Zip Code" name="zip" />
          </AdressFieldset>
          <Dropdown
            label="Department"
            onChange={(value) => onDptChange(value)}
            defaultOpt={department.label}
            name="department"
            options={departments}
          />
        </Form>
      </div>
    </div>
  );
}

export default App;
