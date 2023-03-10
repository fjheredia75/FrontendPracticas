import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Modals from "./Modal"
import Delete from "./Botondelete"
import Secondmodal from './Modal2';
import useSWR from 'swr';
import {fetchApiPiensa, tableCategory} from "../service/apiPiensa";


interface PreguntasData {
  id: string | number;
  descripcion: string;
  

}

const columns: ColumnsType<PreguntasData> = [
  {
    title: 'id',
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

/*const datapreguntas: Preguntaspiensa[] = [
  {
    key: '1',
    id: '1',
    descripcion: "¿Que es la catenaria activa?",
    opcionone: 'Es un cable aereo que permanece enegizado',
    opciontwo: 'Es un cable subterraneo',
    opcionthree: 'Es una señal',
    respuesta: 'Es un cable aereo que permanece enegizado',
    tipo: 'N',
  },
  {
    key: '2',
    id: '2',
    descripcion: "¿Que funcion cumple la prioridad tranviaria?",
    opcionone: 'Prioridad de parar',
    opciontwo: 'Prioridad de estacionamiento',
    opcionthree: 'Prioridad de circulacion',
    respuesta: 'Prioridad de circulacion',
    tipo: 'N',
  },
  {
      key: '3',
      id: '3',
      descripcion: "¿Para que sirven los semaforos?",
      opcionone: 'Para avisar cuando se acerca el tranvia',
      opciontwo: 'Para que los autos pasen a toda velocidad',
      opcionthree: 'Para que pasen los peatones',
      respuesta: 'Para avisar cuando se acerca el tranvia',
      tipo: 'N',
  },
  {
    key: '4',
    id: '4',
    descripcion: "¿Por que no debemos invadir rieles?",
    opcionone: 'Porque dañamos las rieles',
    opciontwo: 'Porque podemos causar un accidente',
    opcionthree: 'Porque no esta permitido',
    respuesta: 'Porque podemos causar un accidente',
    tipo: 'N',
},
{
  key: '5',
  id: '5',
  descripcion: "¿Que es la zona reticulada?",
  opcionone: 'Es una señal en forma de rejilla dibujada sobre la calzada.',
  opciontwo: 'Es un semaforo',
  opcionthree: 'Es una parada',
  respuesta: 'Es una señal en forma de rejilla dibujada sobre la calzada.',
  tipo: 'N',
},
{
  key: '6',
  id: '6',
  descripcion: "¿Para que es importante la velocidad maxima permitida?",
  opcionone: 'Para conducir mejor',
  opciontwo: 'Para ir mas rapido',
  opcionthree: 'Para evitar accidentes',
  respuesta: 'Para evitar accidentes',
  tipo: 'N',
},
];
*/

const App: React.FC = () => {
  const { data, error } = useSWR<PreguntasData[]>(tableCategory, fetchApiPiensa, {
    suspense: false,
});

return(
<>
<Secondmodal/>

<Table columns={columns} dataSource={data} />;
</>
);
};
export default App;