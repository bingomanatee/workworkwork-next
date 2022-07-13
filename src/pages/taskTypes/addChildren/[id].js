import {
  Box,
  Paragraph,
  Spinner,
  DataTable,
  Text,
  Button,
  Heading,
  Layer,
  FormField,
  TextInput,
  Form,
  TextArea, Grid, ResponsiveContext,
} from 'grommet';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Add, Close, FormClose, FormDown, FormUp } from 'grommet-icons';
import sortBy from 'lodash.sortby';
import model from '../../../model';
import FormLabel from '../../../components/FormLabel';

const TABLE_BOX = {
  align: 'center',
  direction: 'row',
  fill: 'horizontal',
  justify: 'stretch',
  gap: 'medium',
};

const ROW_BOX = {
  align: 'center',
  direction: 'row',
  fill: 'horizontal',
  justify: 'stretch',
  gap: 'medium',
  pad: 'small',
};

const CELL_BOX = {
  direction: 'row',
  gap: 'small',
  justify: 'stretch',
  align: 'center',
  fill: 'horizontal',
};
const CELL_BOX_SMALL = {
  ...CELL_BOX,
  pad: {
    top: '0.5rem',
    right: '2px',
    left: '2px',
    bottom: '0.5rem',
  },
};

const LV_GRID_LARGE = {
  columns: ['10rem', '1fr'],
  rows: ['auto'],
  justify: 'stretch',
  align: 'center',
  fill: 'horizontal',
  areas: [
    {
      name: 'label',
      start: [0, 0], end: [0, 0],
    },
    {
      name: 'info',
      start: [1, 0], end: [1, 0],
    },
  ],
};

const LV_GRID_SMALL = {
  rows: ['auto', 'auto'],
  columns: ['auto'],
  justify: 'stretch',
  align: 'center',
  fill: 'horizontal',
  areas: [
    {
      name: 'label',
      start: [0, 0], end: [0, 0],
    },
    {
      name: 'info',
      start: [0, 1], end: [0, 1],
    },
  ],
};

const GRID_LARGE = {
  rows: ['auto'],
  columns: ['2fr', '3fr', '10rem'],
  gap: 'small',
  fill: 'horizontal',
  areas: [{
    name: 'name',
    start: [0, 0],
    end: [0, 0],
  },
    {
      name: 'notes',
      start: [1, 0],
      end: [1, 0],
    },
    {
      name: 'control',
      start: [2, 0],
      end: [2, 0],
    },
  ],
};

const GRID_MEDIUM = {
  rows: ['auto', 'auto'],
  columns: ['75%', '25%'],
  gap: 'small',
  fill: 'horizontal',
  areas: [{
    name: 'name',
    start: [0, 0],
    end: [0, 0],
  },
    {
      name: 'notes',
      start: [0, 1],
      end: [0, 1],
    },
    {
      name: 'control',
      start: [1, 0],
      end: [1, 1],
    },
  ],
};

const GRID_SMALL = {
  rows: ['auto', 'auto', 'auto'],
  columns: ['auto'],
  justify: 'stretch',
  align: 'center',
  fill: 'horizontal',
  areas: [
    {
      name: 'name',
      start: [0, 0], end: [0, 0],
    },
    {
      name: 'notes',
      start: [0, 1], end: [0, 1],
    },
    {
      name: 'control',
      start: [0, 2], end: [0, 2],
    },
  ],
};


export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [taskTypes, setTT] = useState([]);
  const [parentId, setParentId] = useState(id);
  const [ctrl, setCtrl] = useState({});
  const [current, setCurrent] = useState(null);
  const [newName, setNewName] = useState('');
  const [newNotes, setNewNotes] = useState('');
  const [local, setLocal] = useState({});


  useEffect(() => {
    const newCtrl = model();

    const sub = newCtrl.base.stream({
      tableName: 'task_types',
    }, (records) => {
      setTT(records.map(r => r.data));
    });
    newCtrl.pollTaskTypes();

    setCtrl(newCtrl);

    setLocal({
      addChild: (parent_id, name, notes) => {
        const data = {
          parent_id,
          name: name.target.value,
          notes: notes.target.value,
        };
        console.log('sending ', data);
        newCtrl.createTaskType(data);
        setNewName('');
        setNewNotes('');
      },
    });

    return () => {
      sub.unsubscribe();
    };
  }, [parentId]);

  useEffect(() => {
      if (id && taskTypes) {
        setCurrent(taskTypes.find((tt) => tt.id === id));
      }
    },
    [id, taskTypes]);
  const size = React.useContext(ResponsiveContext);

  const LV = size === 'small' ? LV_GRID_SMALL : LV_GRID_LARGE;
  const GRID = ({
    large: GRID_LARGE,
    medium: GRID_MEDIUM,
    small: GRID_SMALL,
  })[size] || GRID_MEDIUM;
  const CELL = (size === 'small') ? CELL_BOX_SMALL : CELL_BOX;

  return <Box>
    <Heading level={1}>
      Task Type &quot;{current ? current.name : ''}&quot;
    </Heading>
    <Paragraph>id = &quot;{id}&quot;</Paragraph>
    <form>
      <Box
        {...TABLE_BOX}
        gap="0"
        direction="column">
        <Box {...ROW_BOX}>
          <Grid {...GRID}>
            <Box
              gridArea="name"
              {...CELL}>
              <Grid {...LV}>
                <Box gridArea="label">
                  <FormLabel>Name</FormLabel>
                </Box>
                <Box gridArea="info">
                  <TextInput
                    label="Name" name="new-name"
                    onChange={setNewName} value={newName}/>
                </Box>
              </Grid>
            </Box>
            <Box
              gridArea="notes"
              {...CELL} >
              <Grid {...LV}>
                <Box gridArea="label">
                  <FormLabel>Notes</FormLabel>
                </Box>
                <Box gridArea="info">
                  <TextInput
                    label="Notes" name="new-norwa"
                    onChange={setNewNotes} value={newNotes}/>
                </Box>
              </Grid>
            </Box>
            <Box
              gridArea="control"
              {...CELL} >
              <Button
                primary
                type="button" icon={<Add/>}
                onClick={() => local.addChild(id, newName, newNotes)}
                label="Add Child" className="noWrap"/>
            </Box>
          </Grid>
        </Box>
      </Box>
      {sortBy(taskTypes.filter((r) => r.parent_id === id)
        .map((tt, typeIndex) => (
          <Box
            {...ROW_BOX}
            background={(typeIndex % 2 === 0) ? 'stripe' : 'white'}>
            <Grid
              {...GRID}
            >
              <Box
                gridArea="name"  {...CELL}>
                <Grid {...LV}>
                  <Box gridArea="label">
                    <FormLabel color='black'>Name</FormLabel>
                  </Box>
                  <Box gridArea="info">
                    <Text>{tt.name}</Text>
                  </Box>
                </Grid>
              </Box>
              <Box
                gridArea="notes" {...CELL}>
                <Grid {...LV}>
                  <Box gridArea="label">
                    <FormLabel color="black">Notes</FormLabel>
                  </Box>
                  <Box gridArea="info">
                    <Text>{tt.notes}</Text>
                  </Box>
                </Grid>
              </Box>
              <Box
                gridArea="control" {...CELL} gap="medium">
                <Button
                  size="small"
                  onClick={() => ctrl.promoteTaskType(tt.id)}
                  icon={<FormUp pad="2px"/>}/>
                <Button
                  color="button-danger" size="small" label="Delete"
                  icon={<FormClose pad="2px" color="button-danger"/>}/>
                <Button
                  size="small"
                  onClick={() => ctrl.demoteTaskType(tt.id)}
                  icon={<FormDown pad="2px" />}/>
              </Box>
            </Grid>
          </Box>
        )), 'order', 'name')
      }
    </form>
  </Box>;
};
