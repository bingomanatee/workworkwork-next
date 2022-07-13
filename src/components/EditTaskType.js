import {
  Box,
  Button,
  Form,
  FormField,
  Heading,
  TextArea,
  TextInput,
} from 'grommet';
import { Add, Close } from 'grommet-icons';
import React, { useEffect, useState } from 'react';
import model from '../model';

export default ({ setShow , update }) => {
  const [ctrl, setCtrl] = useState(null);
  const [validation, setValidation] = useState({ valid: false });
  const [newTaskType, setNewTaskType] = useState(null);
  // const [children, setChildren] = useState([]);

  useEffect(() => {
    const newCtrl = model();
    setCtrl(newCtrl);
    const newRecord = newCtrl.initNewTaskType();
    setNewTaskType(newRecord.data);
  }, []);
  if (!(ctrl && newTaskType)) {
    return '';
  }
  console.log('ntt:', newTaskType);
  return (
    <Box pad="large" fill>
      <Heading level={2}>Create a new TaskType
        <div style={{ float: 'right' }}>
          <Button plain icon={<Close/>} onClick={() => setShow(false)}/>
        </div>
      </Heading>
      <Form
        style={{ minWidth: '80vw', minHeight: '80vh' }}
        value={newTaskType}
        onValidate={setValidation}
        onChange={(value) => {
          console.log('changing value', value);
          setNewTaskType(value);
          ctrl.updateNewTaskType(value);
        }}
        validate="change"
        onSubmit={({ value }) => {
          console.log('submitting value:', value);
          try {
            ctrl.createTaskType(value)
              .then (() => {
              update();
              setShow(false);
            });
          } catch (err) {
            console.log('error onSubmit: ', err);
          }
        }}
      >
        <FormField
          validate={(name) => name && ctrl.hasTaskType(name) ? {
            property: 'name',
            message: 'Name must be unique.',
            status: 'error',
          } : false}
          name="name" htmlFor="name-input-id" label="Name">
          <TextInput id="name-input-id" name="name"/>
        </FormField>
        <FormField name="notes" htmlFor="notes-input-id" label="Notes">
          <TextArea id="notes-input-id" name="notes"/>
        </FormField>
        <Box direction="row" gap="medium">
          <Button
            disabled={!validation.valid} type="submit"
            icon={<Add/>} primary label="Submit"/>
        </Box>
      </Form>
    </Box>
  );
};
