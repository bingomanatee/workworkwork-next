/* eslint-disable react/no-array-index-key */
import {
  Box,
  Button,
  Grid,
  Heading,
  Layer,
  ResponsiveContext, Spinner,
  Text,
  TextInput,
} from 'grommet';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Add, FormDown, FormUp } from 'grommet-icons';
import sortBy from 'lodash.sortby';
import Link from 'next/link';
import createModel from '../../../components/model';
import FormLabel from '../../../components/FormLabel';
import {
  getCell,
  getTaskTypeGrid,
  ROW_BOX,
  TABLE_BOX,
} from '../../../components/ux-constants';
import EditTaskType from '../../../components/EditTaskType';
import Ticket from '../Ticket';
import LabelValue from '../../../components/LabelValue';
import DeleteButton from '../../../components/DeleteButton';
import ModelContext from '../../../components/ModelContext';
import EditButton from '../../../components/EditButton';
import ParentButton from '../../../components/ParentButton';


const TaskById = () => {
  const [taskTypes, setTT] = useState([]);
  const [current, setCurrent] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showAddChild, setShowAddChild] = useState(false);
  const [children, setChildren] = useState([]);

  const model = useContext(ModelContext);
  const router = useRouter();
  const { id } = router.query;
  const size = React.useContext(ResponsiveContext);

  const CELL = useMemo(() => getCell(size), [size]);
  const GRID = useMemo(() => getTaskTypeGrid(size), [size]);

  const local = useMemo(() => ({
    // eslint-disable-next-line camelcase
    addChild: (parent_id, name, notes) => {
      model.saveTaskType({
        parent_id,
        name,
        notes,
      });
    },
    deleteTaskType(idToDelete) {
      model.deleteTaskType(idToDelete)
        .then(() => {
          if (idToDelete === id) {
            router.push('/');
          }
        });
    },
  }), [model, id]);

  useEffect(() => {
    const sub = model.base.stream({
      tableName: 'task_types',
    }, (records) => {
      setTT(records.map(r => r.data));
    });
    model.pollTaskTypes();

    return () => {
      sub.unsubscribe();
    };
  }, [id, model]);

  useEffect(() => {
      if (id && taskTypes) {
        setCurrent(taskTypes.find((tt) => tt.id === id));
        setChildren(taskTypes.filter((tt) => tt.parent_id === id));
      }
    },
    [id, taskTypes]);

  if (!current) {
    return <Spinner/>;
  }

  console.log('current: ', current);

  return <Box {...TABLE_BOX}>
    <Box direction="row" align="center" fill="horizontal" alignContent="start" gap="medium" pad="medium">
      <Heading level={1}>
        <Link href={"/taskTypes"}><Text size="inherit" color="link">Task Types</Text></Link>
        /
        &quot;{current.name}&quot;
      </Heading>
      <Text weight="normal">( {id})</Text>
    </Box>
    <Ticket id={id} local={local} current={current}>
      <>
        <DeleteButton onClick={() => local.deleteTaskType(id)}/>
        <EditButton id={current.id} onClick={() => setShowEdit(true)}/>
        {current.parent_id ? <ParentButton onClick={() => router.push(`/taskTypes/edit/${current.parent_id}`)}/> : ''}
      </>
    </Ticket>
      {sortBy(children, 'order', 'name')
        .map((tt, typeIndex) => (
          <Box
            key={`${tt.id}_${typeIndex}`}
            {...ROW_BOX}
            background={(typeIndex % 2 === 0) ? 'stripe' : 'white'}>
            <Grid{...GRID}>
              <Box gridArea="id" {...CELL}>
                <LabelValue label="ID">
                  <Link href={tt.id}><Text truncate>{tt.order}: {tt.id}</Text></Link>
                </LabelValue>
              </Box>
              <Box
                gridArea="name"  {...CELL}>
                <LabelValue label="Name">
                  {tt.name}
                </LabelValue>
              </Box>
              <Box
                gridArea="notes" {...CELL}>
                <LabelValue label="Notes">
                  {tt.notes}
                </LabelValue>
              </Box>
              <Box
                gridArea="control" {...CELL} gap="small" align="center" direction="row-reverse">
                <Box direction="row">
                  <Button
                    size="small"
                    onClick={() => model.demoteTaskType(tt.id)}
                    icon={<FormUp pad="2px"/>}/>
                  <DeleteButton onClick={() => model.deleteTaskType(tt.id)}/>
                  <Button
                    size="small"
                    onClick={() => model.promoteTaskType(tt.id)}
                    icon={<FormDown pad="2px"/>}/>
                </Box>
              </Box>
            </Grid>
          </Box>
        ))
      }
    {showEdit && <Layer>
      <EditTaskType
        id={id}
        update={() => {
          setShowEdit(false);
        }
        }/>
    </Layer>}
    {showAddChild && <Layer>
      <EditTaskType
        parent_id={id}
        update={() => {
          setShowAddChild(false);
        }
        }/>
    </Layer>}
  </Box>;
};

export default TaskById;
