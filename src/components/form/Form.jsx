import {createContext, useState } from 'react';

export const FormContext = createContext({
  form: {}
});

function Form(props){
    const { children, submit = () => {}, initialValues } = props;
    const [form, setForm] = useState(initialValues);

    const handleFormChange = (event) => {
      // Get the name of the field that caused this change event
      // Get the new value of this field
      const { name, value } = event.target;
  
      // Update state
      // Assign new value to the appropriate form field
      setForm({
        ...form,
        [name]: value
      });
    };
    return (
        <div className='container'>
            <form className="Form">
              <FormContext.Provider value={{
                form,
                handleFormChange
              }}>
                {children}
              </FormContext.Provider>
        
            </form>
              <button type='submit' onClick={() => submit(form)}>Save</button>
        </div>
      );
}

export default Form;