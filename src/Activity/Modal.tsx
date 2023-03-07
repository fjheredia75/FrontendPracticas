import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Formulario from './Formulario';

const Evaluacion2: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Editar
      </Button>
      <Modal title="Editar evaluacion" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Formulario/>      
      </Modal>
    </>
  );
};

export default Evaluacion2;

































































/*const { Title } = Typography;

interface PreguntasData {
  id: string | number;
  descripcion: string;
  opcionone: string;
  opciontwo: string;
  opcionthree: string;
  respuesta: string;
  tipo: string;

}
const columns: ColumnsType<PreguntasData> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Descripcion',
    dataIndex: 'descripcion',
    key: 'descripcion',
  },
  {
    title: 'Opcion uno',
    dataIndex: 'opcionone',
    key: 'opcionone',
  },
  {
    title: 'Opcion dos',
    dataIndex: 'opciontwo',
    key: 'opciontwo',
  },
  {
    title: 'Opcion tres',
    dataIndex: 'opcionthree',
    key: 'opcionthree',
  },
  {
    title: 'Respuesta',
    dataIndex: 'respuesta',
    key: 'respuesta',
  },
  { 
    title: 'Tipo',
    key: 'tipo',
    dataIndex: 'tipo',
   
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>
          <Modals/>
        </a>
        <a>
          <Delete/>
        </a>
      </Space>
    ),
  },
];




const App: React.FC = () => {
  const [value, setValue] = useState();

  const { data, error } = useSWR<PreguntasData[]>(tablePreguntas, fetchApiPiensa, {
    suspense: false,
});

const onChange = (e: RadioChangeEvent) => {
  console.log('radio checked', e.target.value);
  setValue(e.target.value);
};



return(
  <>
  <Selectedusuario/>
  {/*<Table columns={columns} dataSource={data} />;
  data?.map(item => 
    <Radio.Group onChange={onChange} value={value}>
    <Space direction="vertical">
    <Title level={4}>{item.descripcion}</Title>
      <Radio value={1}>{item.opcionone}</Radio>
      <Radio value={2}>{item.opciontwo}</Radio>
      <Radio value={3}>{item.opcionthree}</Radio>
    </Space>
  </Radio.Group>
  )}
  <br></br>
  <hr></hr>
  <Botonsave/>
  </>
);
}

export default App;

*/