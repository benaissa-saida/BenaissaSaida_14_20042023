import { createContext, useEffect, useState } from "react";

export const EmployeesContext = createContext({
  employeesList: [],
});

function SaveEmployees({ children }) {
  const [employeesList, setEmployeesList] = useState([]);

  useEffect(() => {
    if (!localStorage.employeesList) {
      return;
    }
    const employeesInfos = JSON.parse(localStorage.employeesList);

    if (employeesInfos) {
      setEmployeesList(employeesInfos);
    }
  }, []);

  const handleSaveEmployee = () => {
    localStorage.employeesList = JSON.stringify(employeesList);
  };

  console.log("list in provider", employeesList);
  return (
    <EmployeesContext.Provider
      value={{ employeesList, setEmployeesList: handleSaveEmployee }}
    >
      {children}
    </EmployeesContext.Provider>
  );
}

export default SaveEmployees;
