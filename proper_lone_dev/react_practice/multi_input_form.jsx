import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  function handleSubmit(e){
        e.preventDefault();
        alert("application submitted successfully");
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>First name:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>
      <label>Last name:
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" value="submit"/>
        <p>Current values: {inputs.firstname} {inputs.lastname}</p>
    </form>
  )
}

const root=createRoot(document.getElementById('root'))
root.render(
  <MyForm />
);
