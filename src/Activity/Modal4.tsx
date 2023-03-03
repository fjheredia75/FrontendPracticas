import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Addactivity from './Addactivity';
import Apieva from './Apiactivity';

const Modal2: React.FC = () => {
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
        Agregar evaluacion
      </Button>
      <Modal title="Ingrese los datos para agregar una evaluacion" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Apieva/>      
      </Modal>
    </>
  );
};

export default Modal2;


