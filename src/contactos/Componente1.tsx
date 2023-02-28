import React from 'react';
import { Carousel } from 'antd';


const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'rgb(47 45 45)',
  };
  
  
  const Nombres: React.FC = () => (
    
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
Educacion Continua  </h3>
    </div>
    
    </Carousel>
);




export default Nombres;