import React, { useState, useEffect, useContext } from 'react';
import {
  Box,
  Text,
  Layer,
} from 'grommet';

import { useRouter } from 'next/router';
import EditTaskType from '../../components/EditTaskType';
import EditButton from '../../components/EditButton';
import ModelContext from '../../components/ModelContext';
import TitleBar from '../../components/TitleBar';
import DelayedDataTable from '../../components/DelayedDataTable';
// import Link from 'next/link';


const Index = () => {
  console.log('--- taskTypes index');
  const [taskTypes, setTT] = useState(null);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const model = useContext(ModelContext);
  function nameOf(id) {
    if (!id) return '';
    const data = taskTypes.find(r => r.id === id);
    return data? data.name : '';
  }

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
      property: 'parent_id',
      header: 'Parent',
      size: '12rem',
      sortable: true,
      // eslint-disable-next-line camelcase
      render: ({ parent_id }) => (
        // eslint-disable-next-line camelcase
        <Text truncate>{nameOf(parent_id) || '--'}</Text>
      ),
    },
    {
      property: 'order',
      header: 'Order',
      size: '6rem',
      // eslint-disable-next-line camelcase
      render: ({ order }) => (
        // eslint-disable-next-line camelcase
        <Text truncate>{Number.isNaN(order) ? '--' : order}</Text>
      ),
    },
    {
      property: 'children',
      key: 'child-key-1',
      header: 'Children',
      render: (row) => {
        const rowChildren = model.ttChildrenFor(row.id);
        return <Text
          style={{ whiteSpace: 'nowrap' }}
          wordBreak="keep-all">{rowChildren.length || ''}</Text>;
      },
    },
    {
      property: 'interval',
      header: 'Interval',
      sortable: true,
    },
    {
      property: 'controls',
      header: '',
      key: 'child-key-2',
      render: (row) => <Box direction="row-reverse" align="start">
        <EditButton id={row.id} onClick={() => router.push(`taskTypes/edit/${row.id}`)}/>
      </Box>,
    },
  ];

  useEffect(() => {
    const sub = model.base.stream({ tableName: 'task_types' }, (records) => {
      setTT(records.map(r => r.data));
    });
    model.pollTaskTypes();

    return () => {
      sub.unsubscribe();
    };
  }, [model]);

  console.log('--- task types: ', taskTypes);

  return (
    <Box pad="large">
      <TitleBar
        label="Task Types"
        createLabel="Create Task Type"
        onCreate={() => setShow(true)}
        />
      <Box align="start">
        <DelayedDataTable data={taskTypes} cols={TT_COLS} />
      </Box>
      {show && <Layer>
        <EditTaskType
          update={() => {
            setShow(false);
            }
          } />
      </Layer>}
    </Box>
  );
};

export default Index;
