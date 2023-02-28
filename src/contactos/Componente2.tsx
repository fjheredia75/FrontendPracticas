import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const richard = 
`
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;



const Descripcion: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse onChange={onChange}>
      <Panel header="Richard Martinez" key="1">
      <p>{richard}</p>
      </Panel>

    </Collapse>
  );
};

export default Descripcion;