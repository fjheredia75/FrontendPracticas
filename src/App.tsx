import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Category from "./category/Category";
import Guia from "./guia/Guia";
import Inicio from "./inicio/Inicio";
import Contactos from "./contactos/Contactos";
import Oportunity from "./oportunity/Oportunity";
import {Usuario} from "./customer/Customer";
import Activity from "./activity/Activity"



function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/inicio" element={<Inicio />} />   
      <Route path="/customer" element={<Guia />} />   
      <Route path="/customer" element={<Usuario />} /> 
        <Route path="/category" element={<Category />} /> 
        <Route path="/activity" element={<Activity />} /> 
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/oportunity" element={<Oportunity/>} />      
      </Routes>
    </BrowserRouter>   
  );
}




export default App;