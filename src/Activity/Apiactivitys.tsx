import React, { useState } from "react";
import "./Eva.css"


const Apieva = () => {
  const [data, setData] = useState({});

  const handleSubmit = (event:any) => {
    event.preventDefault();
    fetch("http://localhost:8081/activity", {
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
        className="datapre"
        type="description"
        name="description"
        placeholder="description...."
        onChange={handleChange}
      />
      <input
        className="datapre"
        type="fecha"
        name="fecha"
        placeholder="Fecha...."
        onChange={handleChange}
      />
     
       <input
        className="datapre"
        type="oportunityId"
        name="oportunityId"
        placeholder="Usuario...."
        onChange={handleChange}
      />
    
      <button className="botsave" type="submit">Guardar</button>
    </form>
  );
};

export default Apieva;
