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
  TextArea, Select,
} from 'grommet';
import { Add, Close } from 'grommet-icons';
import { createCtrl } from  '../model';

// import Link from 'next/link';

const TASK_COLS = [
  {
    property: 'id',
    primary: true,
    header: 'ID',
    size: '12rem',
    render: ({ id }) => (<Text truncate>{id}</Text>),
  },
  {
    property: 'notes',
    primary: true,
    header: 'Notes',
    size: 'large',
    render: ({ notes }) => (<Text truncate>{notes || ''}</Text>),
  },
];

const TaskTypes = () => {
  const [taskTypes, setTT] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [show, setShow] = React.useState();
  const [ctrl, setCtrl] = React.useState({});

  useEffect(() => {
    const newCtrl = createCtrl();

    const sub = newCtrl.base.stream({
      tableName: 'tasks',
    }, (records) => {
      console.log('--- tasks streamed: ', records);
      setTasks(records.map(r => r.data));
    });

    const subTypes = newCtrl.base.stream({
      tableName: 'task_types',
    }, (records) => {
      console.log('--- task types streamed: ', records);
      setTT(records.map(r => r.data));
    });



    newCtrl.pollTasks();
    newCtrl.pollTaskTypes();

    setCtrl(newCtrl);

    return () => {
      sub.unsubscribe();
      subTypes.unsubscribe();
    };
  }, []);

  return (
    <Box pad="large">
      <Heading level={1}>
        Tasks
        <div style={{ float: 'right' }}>
          <Button
            label="Add Task"
            onClick={() => {
               ctrl.initNewTask();
               setShow(true);
            }} icon={<Add/>}/>
        </div>
      </Heading>
      <Box align="start">
        {!tasks && <><Spinner/><Paragraph size="small">Loading...</Paragraph></>}
        {tasks && <DataTable fill columns={TASK_COLS} data={tasks}/>}
      </Box>
      {show && <Layer>
        <Box pad="large" fill>
          <Heading level={2}>Create a new Task
            <div style={{ float: 'right' }}>
            <Button plain icon={<Close/>} onClick={() => setShow(false)}/>
          </div>
          </Heading>
          <Form
            style={{ minWidth: '80vw', minHeight: '80vh' }}
            value={ctrl.getNewTask().data}
            onChange={ctrl.updateNewTask}
            onSubmit={({ value }) => {
              ctrl.createTask(value);
              setShow(false);
            }}
          >
            <FormField name="name" htmlFor="task_type-input-id" label="Type">
              <Select
id="task_type-input-id"
                      options={taskTypes}
                      labelKey="name"
                      valueKey="id"
                      name="task_type_id"/>
            </FormField>
            <FormField name="notes" htmlFor="notes-input-id" label="Notes">
              <TextArea id="notes-input-id" name="notes"/>
            </FormField>
            <Box direction="row" gap="medium">
              <Button type="submit" icon={<Add/>} primary label="Submit"/>
            </Box>
          </Form>
        </Box>
      </Layer>}
    </Box>

  );
};

export default TaskTypes;
