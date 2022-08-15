import React, { useContext, useMemo } from "react";
import { Box, ResponsiveContext } from "grommet";
import { getCell, getTaskTypeGrid } from "./ux-constants";
import LabelValue from "./LabelValue";
import * as PropTypes from "prop-types";

export function TicketCell({ name, item, children}) {
  const size = useContext(ResponsiveContext);
  const CELL = useMemo(() => getCell(size), [size]);
  return <Box
    gridArea={name}
    {...CELL}>
    <LabelValue label={name}>
      {React.Children.toArray(children).length? children: item[name]}
    </LabelValue>
  </Box>;
}

TicketCell.propTypes = { name: PropTypes.string };
