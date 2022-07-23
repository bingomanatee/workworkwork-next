import {  FormUp } from 'grommet-icons';
import { Button } from 'grommet';
import React from 'react';

const ParentButton = ({ children, onClick }) => (<Button
  color="brand"
  icon={<FormUp/>}
  type="button"
  onClick={onClick}
  label={React.Children.toArray(children)[0]}/>);

export default ParentButton;
