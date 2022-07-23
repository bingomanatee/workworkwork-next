import React, { useState, useEffect, useContext } from 'react';
import {
  Box,
  Text,
  Layer, Heading,
} from 'grommet';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { create, enums } from '@wonderlandlabs/collect';
import { constants } from '@wonderlandlabs/carpenter';
import ModelContext from '../components/ModelContext';
import EditTask from '../components/EditTask';
import TitleBar from '../components/TitleBar';
import DelayedDataTable from '../components/DelayedDataTable';
import { NodeSet } from '../components/TaskNodes';

const { binaryOperator } = constants;

const { FormEnum } = enums;

dayjs.extend(relativeTime);

const Tasks = () => {
  const [taskTypes, setTT] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [tasksCounted, setTasksCounted] = useState(false);
  const [show, setShow] = React.useState();
  const model = useContext(ModelContext);

  const TASK_COLS = [
    {
      property: 'id',
      primary: true,
      header: 'ID',
      size: '12rem',
      render: ({ id }) => (<Text truncate>{id}</Text>),
    },
    {
      property: 'task_type_id',
      header: 'Type',
      render: ({ task_type_id }) => {
        const type = taskTypes.find((type) => type.id === task_type_id);
        return type ? type.name : '?';
      },
    },
    {
      property: 'createdAt',
      header: 'Created At',
      size: '20rem',
      render: ({ createdAt }) => {
        if (!createdAt) {
          return '';
        }
        let date = createdAt;
        if (typeof date === 'string') {
          date = new Date(date);
        }
        const d = dayjs(date);
       // const f = d.fromNow(true);
        return d.format('D.M.YY - HH:mm');
      },
    },
    {
      property: 'status', header: 'Status',
    },
    {
      property: 'childTasks',
      header: 'Children',
      size: '6rem',
      render: (({ id }) => model.taskChildrenCount(id) || ''),
    },
    {
      property: 'data',
      header: 'Data',
      render: (({ data }) => {
        try {
          if (create(data).form === FormEnum.object) {
            return <Text size="xsmall">
              <pre>{JSON.stringify(data, true, 2)
                .replace(/,/i, ',\n')}</pre>
            </Text>;
          }
        } catch (err) {
        }
        return '--';
      }),
    },
  ];
  useEffect(() => {
    const sub = model.base.stream({
      tableName: 'tasks',
    }, (records) => {
      setTasks(records.map(r => r.data));
    });

    const subTypes = model.base.stream({
      tableName: 'task_types',
    }, (records) => {
      setTT(records.map(r => r.data));
    });

    model.pollTasks();
    model.pollTaskTypes();

    return () => {
      sub.unsubscribe();
      subTypes.unsubscribe();
    };
  }, [model]);

  return (
    <Box pad="large">
      <TitleBar
        label="Tasks"
        createLabel="Create Task"
        onCreate={() => setShow(true)}
      />
      <Box align="start">
        <DelayedDataTable
          data={tasks && tasks.filter((t) => !t.parent_task_id)}
          cols={TASK_COLS}
          tableParams={{
            sort: { direction: 'desc', property: 'createdAt' },
            rowDetails: (row) => (
              <Box>
                <Heading level={2}>Detail</Heading>
                  <NodeSet root={row.id} />
              </Box>
            ),
          }}
        />
      </Box>
      {show && <Layer>
        <EditTask
          update={() => {
            setShow(false);
          }
          }/>
      </Layer>}
    </Box>

  );
};

export default Tasks;
