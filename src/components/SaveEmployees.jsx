import {createContext, useEffect, useState } from 'react';


export const EmployeesContext = createContext({
    employeesList : []
});

function SaveEmployees({children}){
    const [employeesList, setEmployeesList] = useState([])

    
  useEffect(() => {
    if (localStorage.employeesList && !employeesList.length) {
        setEmployeesList(JSON.parse(localStorage.employeesList))
    }
  }, [employeesList]);

    return (
        <EmployeesContext.Provider value={{employeesList}}>
            {children}
          </EmployeesContext.Provider>
    )

}

export default SaveEmployees;