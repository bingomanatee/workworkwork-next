import { Box, Grid, ResponsiveContext, Text } from 'grommet';
import React, { useContext, useMemo } from 'react';
import { getCell, getTaskTypeGrid, ROW_BOX } from '../../components/ux-constants';
import { TicketCell } from '../../components/TicketCell';

const Ticket = ({ current, children }) => {
  const size = useContext(ResponsiveContext);
  const GRID = useMemo(() => getTaskTypeGrid(size), [size]);
  const CELL = useMemo(() => getCell(size), [size]);

  if (!current) {
    return null;
  }
  return (
    <Box
      {...ROW_BOX}
      background="ticket-bg"
      border={{
        color: 'ticket', size: '1px',
      }} margin={{ bottom: '1rem', top: '1rem' }}>
      <Grid {...GRID}>
        <TicketCell name="id" item={current} />
        <TicketCell name="name" item={current} />
        <TicketCell name="order" item={current}/>
        <TicketCell name="interval" item={current}/>
        <TicketCell name="notes" item={current} />
        <Box
          gridArea="control"
          {...CELL} direction="row-reverse">
          <Box direction="row">{children}</Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Ticket;
