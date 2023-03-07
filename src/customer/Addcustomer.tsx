import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Adduser: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  ><Form.Item
  label="Firstname"
  name="firstname"
  rules={[{ required: true, message: 'Enter firstname' }]}
>
  <Input />
</Form.Item>
<Form.Item
  label="Lastname"
  name="lastname"
  rules={[{ required: true, message: 'Enter lastname' }]}
>
  <Input />
</Form.Item>

<Form.Item
  label="Nui"
  name="nui"
  rules={[{ required: true, message: 'Enter nui' }]}
>
  <Input />
</Form.Item>

<Form.Item
  label="Email"
  name="email"
  rules={[{ required: true, message: 'Enter email' }]}
>
  <Input />
</Form.Item>

<Form.Item
  label="Phone"
  name="phone"
  rules={[{ required: true, message: 'Enter phone' }]}
>
  <Input />
</Form.Item>

<Form.Item
  label="Age"
  name="age"
  rules={[{ required: true, message: 'Enter age' }]}
>
  <Input />
</Form.Item>

<Form.Item
  label="Category_id"
  name="category_id"
  rules={[{ required: true, message: 'Enter age' }]}
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

export default Adduser;