import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Formul: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Firstname"
      name="Firstname"
      rules={[{ required: true, message: 'Ingresa el nombre' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Lastname"
      name="Lastname"
      rules={[{ required: true, message: 'Ingresa el apellido' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Nui"
      name="Nui"
      rules={[{ required: true, message: 'Ingresa tu edad' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="Email"
      rules={[{ required: true, message: 'Ingresa tu edad' }]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      label="Phone"
      name="Phone"
      rules={[{ required: true, message: 'Ingresa tu edad' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Age"
      name="Age"
      rules={[{ required: true, message: 'Ingresa tu edad' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Category_id"
      name="Category_id"
      rules={[{ required: true, message: 'Ingresa tu edad' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Guardar
      </Button>
    </Form.Item>
  </Form>
);

export default Formul;