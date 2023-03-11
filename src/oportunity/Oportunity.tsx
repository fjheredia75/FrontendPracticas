import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Evaluacion2 from './Modal';
import Evaluacion3 from './Delate';
import Modal2 from  "./Modal2";
import useSWR from 'swr';
import {fetchApiPiensa, tableOportunity} from "../service/apiPiensa";


interface EvaluacionData {
  id: number|string ;
  description: string;
  fecha_inicio: number;
  fecha_fin: number;
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
    title: 'Fecha_inicio',
    dataIndex: 'fecha_inicio',
    key: 'fecha_inicio',
  },
  {
    title: 'Fecha_fin',
    key: 'fecha_fin',
    dataIndex: 'fecha_fin',
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

const { data, error } = useSWR<EvaluacionData[]>(tableOportunity, fetchApiPiensa, {
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