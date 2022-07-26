import React, { useState } from "react";
import axios from "axios";
import './style.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function NewProducts() {
  const [inputList, setInputList] = useState([{ name: "", value: "" }]);
  const [inputs, setInputs] = useState({ name: "", upc: "", available_on: '' });
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value })
  }

  const validate_fields = () => {
    let errors = {};
    let formIsValid = true;
    let current_date = new Date();

    if (!inputs.name) {
      formIsValid = false;
      errors["name"] = "Name can't be blank";
    }

    if (!inputs.upc) {
      formIsValid = false;
      errors["upc"] = "Invalid UPC";
    }

    if (!inputs.available_on || current_date >= new Date(inputs.available_on)) {
      formIsValid = false;
      errors["available_on"] = "Invalid Date for Available on";
    }

    if (!inputList[0]?.name){
      formIsValid = false;
      errors["property_name"] = "Name can't be blank";
    }

    setErrors({
      errors: errors
    });
    return formIsValid;
  }

  const createProduct = (e) => {
    const valid = validate_fields() // validating fields

    if(valid){
      e.preventDefault()
      const createParams = { product: inputs, properties: inputList }
      axios.post('/api/products', createParams)
      .then(response => {
        if (response.data.status){
          return NotificationManager.success(response.data?.message);  
        }
        else{
          let error_msg = '' 
          Object.keys(response.data.message).forEach(function (key) { 
            error_msg += key + " " + response.data.message[key] + "." + "\n"
          })
          return NotificationManager.error(error_msg);
        }
      });
    }
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
      <NotificationContainer/>
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
                <div className="errorMsg">{errors?.errors?.name}</div>
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
              <div className="errorMsg">{errors?.errors?.upc}</div>
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
              <div className="errorMsg">{errors?.errors?.available_on}</div>
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
                  <div className="errorMsg">{errors?.errors?.property_name}</div>
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
