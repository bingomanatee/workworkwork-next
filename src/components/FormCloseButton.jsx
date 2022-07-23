import { Button } from 'grommet';
import { Close } from 'grommet-icons';
import React from 'react';


const CloseButton =  ({ onClick }) => (
  <Button plain icon={<Close/>} onClick={onClick}/>
);

export default CloseButton;
