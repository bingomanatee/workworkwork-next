import TitleBar from "../components/TitleBar";
import { Box } from "grommet";
import DelayedDataTable from "../components/DelayedDataTable";

const TASK_COLS = [
  {property: 'id', label: 'ID'}
]
const Logs = ({tasks}) => {


     return (
    <Box pad="large">
      <TitleBar
        label="Task Types"
      />
      <Box align="start">
        <DelayedDataTable data={tasks} cols={TASK_COLS} />
      </Box>
    </Box>
      );
}

export default Logs;
