import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Evaluacion2 from './Modal';
import Evaluacion3 from './Delete';
import Modal2 from  "./Modal2";
import useSWR from 'swr';
import {fetchApiPiensa, tableActivity} from "../service/apiPiensa";


interface EvaluacionData {
  id: number|string ;
  description: string;
  fecha: number;
  customer_id: string;
}

const columns: ColumnsType<EvaluacionData> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Fecha',
    dataIndex: 'fecha',
    key: 'fecha}',
  },
  {
    title: 'Customer_id',
    key: 'customer',
    dataIndex: 'customer',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a><Evaluacion3/></a>
      </Space>
    ),
  },
];


const App: React.FC = () =>{

const { data, error } = useSWR<EvaluacionData[]>(tableActivity, fetchApiPiensa, {
  suspense: false,
});

return(
<>
<Modal2/>
<Table columns={columns} dataSource={data} />; 
</>
)
}

export default App;