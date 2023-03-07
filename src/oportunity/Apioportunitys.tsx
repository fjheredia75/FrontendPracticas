import React, { useState } from "react";
import "./Eva.css"


const Apieva = () => {
  const [data, setData] = useState({});

  const handleSubmit = (event:any) => {
    event.preventDefault();
    fetch("http://localhost:8081/oportunity", {
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
        type="fecha_inicio"
        name="fecha_inicio"
        placeholder="Fech_inicio...."
        onChange={handleChange}
      />
      <input
        className="datapre"
        type="fecha_fin"
        name="fecha_fin"
        placeholder="Fech_fin...."
        onChange={handleChange}
      />
       <input
        className="datapre"
        type="customerId"
        name="customerId"
        placeholder="Usuario...."
        onChange={handleChange}
      />
    
      <button className="botsave" type="submit">Guardar</button>
    </form>
  );
};

export default Apieva;
