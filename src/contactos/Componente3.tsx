import React from 'react';
import { Descriptions } from 'antd';
import './Contactos.css';

const Desc: React.FC = () => (
    <div className='descrip'>
  <Descriptions title="Lic. Richard Martinez">
    <Descriptions.Item label="Phone">	(07) 283-8323 | +(593) 98-867-5748</Descriptions.Item>
    <Descriptions.Item label="Direccon ">Simón Bolívar 1-62, Cuenca 010107</Descriptions.Item>
    <Descriptions.Item label="Email">
      educontinua@sudamericano.edu.ec
    </Descriptions.Item>
  </Descriptions>
  </div>
);
export default Desc;