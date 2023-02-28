import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Addpregunta from "./Addpregunta"
import Apipre from './Apipreguntas';

const Secondmodal: React.FC = () => {
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
        Agregar description
      </Button>
      <Modal title="Ingrese los datos" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Apipre/>
      </Modal>
    </>
  );
};

export default Secondmodal;