import React, { useState, useEffect } from 'react';
import {
  Box,
  Paragraph,
  Spinner,
  DataTable,
  Text,
  Button,
  Heading,
  Layer,
  FormField,
  TextInput,
  Form,
  TextArea,
} from 'grommet';
import { Add, Close } from 'grommet-icons';
import Link from 'next/link';
import model from '../model';
import EditTaskType from "../components/EditTaskType";
// import Link from 'next/link';


const TaskTypes = () => {
  const [taskTypes, setTT] = useState(null);
  const [show, setShow] = useState(false);
  const [ctrl, setCtrl] = useState(null);

  const TT_COLS = [
    {
      property: 'id',
      primary: true,
      header: 'ID',
      sortable: true,
      size: '12rem',
      render: ({ id }) => (<Text truncate>{id}</Text>),
    },
    {
      property: 'name',
      sortable: true,
      header: 'Name',
    },
    {
      property: 'notes',
      primary: true,
      header: 'Notes',
      size: 'large',
      render: ({ notes }) => (<Text truncate>{notes || ''}</Text>),
    },
    {
      property: 'id',
      key: 'child-key-1',
      header: '',
      render: (row) => {
        const rowChildren = ctrl.ttChildrenFor(row.id);
        console.log('rowChildren:', rowChildren);
        return <Text style={{ whiteSpace: 'nowrap' }}
                     wordBreak="keep-all">{rowChildren.length}</Text>;
      },
    },
    {
      property: 'id',
      name: 'children',
      header: 'Children',
      key: 'child-key-2',
      render: (row) => <Link href={`taskTypes/addChildren/${row.id}`}>
        <Button color="brand" size="small" icon={<Add/>} label="Add"/>
      </Link>,
    },
  ];

  useEffect(() => {
    const newCtrl = model();

    const sub = newCtrl.base.stream({
      tableName: 'task_types',
    }, (records) => {
      setTT(records.map(r => r.data));
    });
    newCtrl.pollTaskTypes();

    setCtrl(newCtrl);

    return () => {
      sub.unsubscribe();
    };
  }, []);

  if (!ctrl) {
    return '';
  }
  return (
    <Box pad="large">
      <Heading level={1}>
        TaskTypes
        <div style={{ float: 'right' }}>
          <Button
            label="Add TaskType" onClick={() => {
            setShow(true);
          }} icon={<Add/>}/>
        </div>
      </Heading>
      <Box align="start">
        {!taskTypes && <>
          <Spinner/>
          <Paragraph size="small">Loading...</Paragraph></>}
        {taskTypes && <DataTable
          fill
          sort={{ property: 'name' }}
          columns={TT_COLS}
          data={taskTypes}/>}
      </Box>
      {show && <Layer>
        <EditTaskType setShow={setShow} update={() => {
          ctrl.pollTaskTypes();
        }
        }/>
      </Layer>}
    </Box>

  );
};

export default TaskTypes;
