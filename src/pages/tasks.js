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
import TaskEvents from '../components/TaskEvents';
import JsonNode from '../components/JsonNode';

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
      render: (({ data }) => <JsonNode expand={false} data={data} size="xsmall" else="---" />),
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

    let onTimeout = null;
    function delayedPoll () {
      model.pollTasks();
      onTimeout = setTimeout(() => {
        delayedPoll();
      }, 60 * 1000);
    }
    delayedPoll();

    model.pollTaskTypes();

    return () => {
      clearTimeout(onTimeout);
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
          data={(tasks && taskTypes) && tasks.filter((t) => !t.parent_task_id)}
          cols={TASK_COLS}
          tableParams={{
            sort: { direction: 'desc', property: 'createdAt' },
            rowDetails: (row) => (
              <Box>
                <TaskEvents task={row} />
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
