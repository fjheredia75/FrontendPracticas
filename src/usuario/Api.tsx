import React, { useState } from "react";
import "./User.css"


const Api = () => {
  const [data, setData] = useState({});

  const handleSubmit = (event:any) => {
    event.preventDefault();
    fetch("http://localhost:8081/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Data sent successfully:", result);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  const handleChange = (event:any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="datauser"
        type="firstname"
        name="firstname"
        placeholder="Firstname...."
        onChange={handleChange}
      />
      <input
        className="datauser"
        type="lastname"
        name="lastname"
        placeholder="Lastname...."
        onChange={handleChange}
        
      />

      <input
        className="datauser"
        type="nui"
        name="nui"
        placeholder="Nui...."
        onChange={handleChange}
        
      />

       <input
        className="datauser"
        type="email"
        name="email"
        placeholder="Email...."
        onChange={handleChange}
        
      />
   
   <input
        className="datauser"
        type="phone"
        name="phone"
        placeholder="Phone...."
        onChange={handleChange}
        
      />

      <input
        className="datauser"
        type="age"
        name="age"
        placeholder="Age...."
        onChange={handleChange}
      />
      
      <button className="botsave" type="submit">Save</button>
    </form>
  );
};

export default Api;
