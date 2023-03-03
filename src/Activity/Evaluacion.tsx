import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Evaluacion4 from './Modal';
import Evaluacion5 from './Delate';
import Modal4 from  "./Modal4";
import useSWR from 'swr';
import {fetchApiPiensa, tableEvaluacion} from "../service/apiPiensa";


interface EvaluacionData {
  id: number|string ;
  description: string;
  fecha: number;
  oportunity_id: string;
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
    key: 'fecha',
  },

  {
    title: 'Oportunity_id',
    key: 'oportunity',
    dataIndex: 'oportunity',
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