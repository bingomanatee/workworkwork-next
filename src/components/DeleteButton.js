import { Button } from 'grommet';
import { FormClose } from 'grommet-icons';
import React from 'react';

const DeleteButton = ({ onClick, children }) =>( <Button
  color="button-danger" label={ React.Children.toArray(children)[0]}
  onClick={onClick}
  icon={<FormClose pad="2px" color="button-danger"/>}/>);

export default DeleteButton;
