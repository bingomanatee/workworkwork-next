import { Box, Text } from "grommet";
import React from "react";


const OptionBox = ({selected, label})  => (
  <Box pad="2px"><Text weight={selected ? 'bold' : 'normal'}>{label}</Text></Box>
);

export default OptionBox;
