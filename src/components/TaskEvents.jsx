import { List, Box, Text  } from 'grommet';
import JsonNode from './JsonNode';

const TaskEvent = ({ event }) =>(
  <div>
    <Text size="small">{event.event}</Text>
    <JsonNode data={event.data} />
  </div>
);
const TaskEvents = ({ task }) => (
  <Box fill="both" style={{ maxHeight: '20rem'}} overflow="scroll">
    <Box fill="both" >
    {
      task.task_events.map((event) => (<TaskEvent key={event.id} event={event} />))
    }
    </Box>
  </Box>
);

export default TaskEvents;
