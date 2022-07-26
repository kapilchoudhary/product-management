import React, { useState } from "react";
import axios from "axios";

export default function NewProducts() {
  const [inputList, setInputList] = useState([{ name: "", value: "" }]);
  const [inputs, setInputs] = useState({ name: "", upc: "", available_on: '' });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value })
  }

  const createProduct = (e) => {
    e.preventDefault()
    const createParams = { product: inputs, properties: inputList }
    axios.post('/api/products', createParams)
    .then(response => {
      console.log(response)
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { name: "", value: "" }]);
  };

  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2><b>Products</b></h2>
         <fieldset>
            <label>
               <p>Name</p>
               <input
                  type="text"
                  name="name"
                  value={inputs.name || ""}
                  onChange={handleChange}
                />
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p>UPC</p>
              <input 
                type="text" 
                name="upc" 
                value={inputs.upc || ""} 
                onChange={handleChange}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p>Available on</p>
              <input 
                type="date" 
                name="available_on" 
                value={inputs.available_on || ""} 
                onChange={handleChange}
              />
            </label>
          </fieldset>
          <br />
          <h3><b>Properties</b></h3>
          {inputList.map((input, i) => {
            return (
              <div key={i}>
                <fieldset>
                  <label>Property Name:</label>
                  <input
                    name="name"
                    value={input.name}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <br />
                  <br />
                  <label>Property Value:</label>
                  <input
                    name="value"
                    value={input.value}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <div>
                    {inputList.length - 1 === i && <button onClick={handleAddClick}>Add More Properties</button>}
                  </div>
                </fieldset>
              </div>
            );
          })}
          <br />
          <button type="submit" onClick={(e) => createProduct(e)}>Submit</button>
        </form>
      </div >

      <a href="/">
        Products
      </a>
    </>
  );
}
