import { createRoot } from "react-dom/client";
import React from "react";
import { useState } from "react";

function MyForm(){
    const [inputs, setInputs] = useState({});
    const handlechange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values => ({...values, [name]:value}))
    }
    function handleSubmit(e){
        e.preventDefault();
        setInputs({});
        e.target.reset();
        alert("Application submitted successfully");
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>First name:
                <input 
                    type="text" 
                    name="firstname" 
                    value={inputs.firstname || ''} 
                    onChange={handlechange}
                />
            </label>
            <label>Last name:
                <input 
                    type="text" 
                    name="lastname" 
                    value={inputs.lastname || ''} 
                    onChange={handlechange}
                />
            </label>
            <label>mobile no:
                <input 
                    type="text" 
                    name="MobileNo" 
                    value={inputs.MobileNo || ''} 
                    onChange={handlechange}
                />
            </label>

            <input type="submit" value="submit"/>
            <p>Current values: {inputs.firstname} {inputs.lastname}</p>
        </form>
    )
}
const root = createRoot(document.getElementById('root'));
root.render(<MyForm />);