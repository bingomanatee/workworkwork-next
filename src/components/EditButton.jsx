import { Add, Edit } from 'grommet-icons';
import { Button } from 'grommet';
import React from 'react';

const EditButton = ({ children, id = false, onClick, label }) => (<Button
  color="brand"
  icon={id ? <Edit/> : <Add />}
  type="button"
  onClick={onClick}
  label={label || React.Children.toArray(children)[0]}/>);

export default EditButton;
