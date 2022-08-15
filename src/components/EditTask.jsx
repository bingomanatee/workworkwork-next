import { Box, Button, Form, FormField, Heading, Select, TextArea } from 'grommet';
import { Add, Close } from 'grommet-icons';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import ModelContext from './ModelContext';
import FormCloseButton from './FormCloseButton';
import OptionBox from './OptionBox';
import SaveButton from "./SaveButton";

const EditTask = ({ id, update }) => {
  const model = useContext(ModelContext);
  const table = model.base.table('tasks');
  const [taskTypes, setTaskTypes] = useState([]);
  const [task, setTask] = useState(table.createData({}));
  const [validation, setValidation] = useState({ valid: false });

  useEffect(() => {
    if (id) {
      model.getTask(id)
        .then((record) => {
          console.log('retrieved record for id', record);
          if (!record) {
            return update(false);
          }
          console.log('record is ', record);
          const t2 = model.base.table('task_types');
          return setTask(t2.createData(record.data));
        });
    }

    const sub = model.base.stream({ tableName: 'task_types' }, (records) => {
      setTaskTypes(records.map(r => r.data));
    });
    model.pollTaskTypes();
    return () => {
      sub.unsubscribe();
    };
  }, [model, id]);

  return (<Box pad="large" fill>
      <Box direction="row" align="between">
        <Heading level={2}>Create a new Task</Heading>
        <FormCloseButton onClick={() => update(false)}/>
      </Box>

      <Form
        style={{ minWidth: '80vw', minHeight: '80vh' }}
        value={task}
        onValidate={setValidation}
        validate="change"
        onChange={setTask}
        onSubmit={({ value }) => {
          model.saveTask(value, id)
            .then(() => update(true));
        }}
      >
        <FormField name="task_type_id" htmlFor="task_type-input-id" label="Type">
          <Select
            id="task_type-input-id"
            options={taskTypes}
            labelKey="name"
            valueKey={{ key: 'id', reduce: true }}
            name="task_type_id">{(option, _, __, { selected }) => (<OptionBox selected={selected} label={option.name} /> )}</Select>
        </FormField>
        <FormField name="notes" htmlFor="notes-input-id" label="Notes">
          <TextArea id="notes-input-id" name="notes"/>
        </FormField>
        <Box direction="row" gap="medium">
          <SaveButton id={id} valid={validation.valid} />
        </Box>
      </Form>
    </Box>
  );
};

export default EditTask;
