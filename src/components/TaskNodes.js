import React, { useContext, useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import sortBy from 'lodash.sortby';
import { Box, Button, Grid, Heading, Text } from 'grommet';
import { FormDown, FormUp } from 'grommet-icons';
import { constants } from '@wonderlandlabs/carpenter';
import NotificationBadge , {Effect} from 'react-notification-badge';
import ModelContext from './ModelContext';

const { binaryOperator } = constants;

const GRID_DEF = {
  rows: ['auto', 'auto'],
  columns: ['20rem', 'auto'],
  areas: [
    {
      name: 'title',
      start: [0, 0],
      end: [0, 0],
    },
    {
      name: 'data',
      start: [0, 1],
      end: [0, 1],
    },
    {
      name: 'children',
      start: [1, 0],
      end: [1, 1],
    },
  ],
};

const Node = ({ child }) => {
  const model = useContext(ModelContext);
  const { task_type_id } = child;
  const type = model.base.table('task_types').getData(task_type_id);
  const [showData, setShow] = useState(false);

  const toggleShow = useMemo(() => () => {setShow(!showData);}, [showData]);

  const count = useMemo(() => model.taskChildrenCount(child.id), [child]);

  return <Box margin="small">
    <Grid {...GRID_DEF}>
      <Box gridArea="title">
        <Box direction="row" align="center" gap="medium" fill="horizontal">

          <Button icon={showData ? <FormUp /> : <FormDown />} onClick={toggleShow} />

            <Heading level={3} style={{ whiteSpace: 'nowrap' }}> {type ? type.name : '?'}
            </Heading>
          {count ?  <NotificationBadge count={count}effect={Effect.SCALE} /> : ''}

          <Text size="small">{child.status}</Text>
        </Box>
        <Text size="xsmall">{child.id}</Text>
      </Box>
      <Box gridArea="data" overflow="auto" >
        {
          showData ? <div>
            <Text size="xsmall"><pre>{JSON.stringify(child.data, true, 2)}</pre></Text>
        </div> : ''
        }
      </Box>
      <Box
gridArea="children" overflow="hidden">
        <NodeSet root={child.id} />
      </Box>
    </Grid>
  </Box>;
};

export const NodeSet = ({ root }) => {
  const model = useContext(ModelContext);

  const tasks = model.taskChildrenFor(root).map((r) => r.data);
  console.log('task children for', root, ':', tasks);

  const children = sortBy(tasks.map((child) => ({ ...child, createdTime: dayjs(child.createdAt).unix() }))
    , 'createdTime').reverse();


  return children.map((child) => <Node key={child.id} child={child}/>);

};
