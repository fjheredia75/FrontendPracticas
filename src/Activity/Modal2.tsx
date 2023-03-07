import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Addactivity from './Addactivity';
import Apieva from './Apiactivitys';

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
        Agregar activity
      </Button>
      <Modal title="Ingrese los datos para agregar actividad" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Apieva/>      
      </Modal>
    </>
  );
};

export default Modal2;


