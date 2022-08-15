import {
  Box,
  Button,
  Form,
  FormField,
  Heading, Select, Text,
  TextArea,
  TextInput,
} from 'grommet';
import { Add, Close, Save } from 'grommet-icons';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import ModelContext from './ModelContext';
import OptionBox from './OptionBox';
import SaveButton from './SaveButton';

const NONE = {
  id: 0,
  name: '(no parent)',
};

const EditTaskType = ({ update, id, parent_id = null }) => {
  const model = useContext(ModelContext);
  const table = model.base.table('task_types');

  const [validation, setValidation] = useState({ valid: false });
  const [taskType, setTaskType] = useState(table.createData({ parent_id, unit: 'seconds' }));
  const [taskTypes, setTaskTypes] = useState([]);

  // create a "temp" record - even if updating, clone the data temporarily
  useEffect(() => {
    if (id) {
      model.getTaskType(id)
        .then((record) => {
          if (!record) {
            return update(false);
          }
          console.log('record is ', record);
          const t2 = model.base.table('task_types');
          return setTaskType(t2.createData({ ...record.data, unit: 'seconds' }));
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

  const parentOptions = useMemo(() => [
    NONE,
    ...taskTypes,
  ].filter((item) => !!item), [taskTypes]);

  if (!(parentOptions && taskType)) {
    return '';
  }
  return (
    <Box pad="large" fill overflow="scroll">
      <Heading level={2}>{id ? 'Edit Task Type' : 'Create a new TaskType'}
        <div style={{ float: 'right' }}>
          <Button plain icon={<Close/>} onClick={() => update(false)}/>
        </div>
      </Heading>
      <Form
        style={{ minWidth: '80vw', minHeight: '80vh' }}
        value={taskType}
        onValidate={setValidation}
        onChange={setTaskType}
        validate="change"
        onSubmit={({ value }) => {
          // eslint-disable-next-line no-param-reassign
          let { interval, unit } = value;
          interval = Number.parseInt(value.interval, 10);
          switch(unit) {
            case 'minutes':
              // eslint-disable-next-line no-param-reassign
              interval *= 60;
              break;
            case 'hours':
              // eslint-disable-next-line no-param-reassign
              interval *= (60 ** 2);
              break;
          }
          // eslint-disable-next-line no-param-reassign
          delete value.unit;

          model.saveTaskType({ ...value, interval }, id)
            .then(() => update(true));
        }}
      >
        <FormField
          validate={(name) => (!id) && name && model.hasTaskType(name) ? {
            property: 'name',
            message: 'Name must be unique.',
            status: 'error',
          } : false}
          name="name" htmlFor="name-input-id" label="Name">
          <TextInput id="name-input-id" name="name"/>
        </FormField>
        {parentOptions.length > 1 ?  <FormField label="Parent" name="parent_id" htmlFor="parent-id-input" >
          <Select
            id="parent-id-input"
            name="parent_id"
            labelKey="name"
            value={taskType.parent_id || 0}
            valueKey={{ key: 'id', reduce: true }}

            onChange={({ value }) => {
              setTaskType({ ...taskType, parent_id: value });
            }}
            options={parentOptions}
          >{(option, _, __, { selected }) => (<OptionBox selected={selected} label={option.name} /> )}</Select>
        </FormField> : ''}
        <Box direction="row" fill="horizontal" gap="medium" align="stretch">
          <Box width="50%">
            <FormField name="interval" htmlFor="interval-input-id" label="Interval">
              <TextArea type="number" id="interval-input-id" name="interval"/>
            </FormField>
          </Box>
          <Box width="50%">
            <FormField name="unit" htmlFor="interval-units-input-id" label="Unit">
              <Select defaultValue="seconds" name="unit" options={['seconds', 'minutes', 'hours']} id="interval-units-input-id"  />
            </FormField>
          </Box>
        </Box>
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

export default EditTaskType;
