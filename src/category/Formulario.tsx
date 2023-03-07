import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Formu: React.FC = () => (
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
      label="Desciption"
      name="description"
      rules={[{ required: true, message: 'Enter description!' }]}
    >
    <Input />
    </Form.Item>

    

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Guardar cambios
      </Button>
    </Form.Item>
  </Form>
);

export default Formu;