import React, {useState}from "react";

export default function NewProducts() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      <br />
      </label>
      <label>UPC:
      <input 
        type="text" 
        name="upc" 
        value={inputs.upc || ""} 
        onChange={handleChange}
      />
      <br />
      </label>
      <label>Available on:
      <input 
        type="date" 
        name="available_on" 
        value={inputs.available_on || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}
