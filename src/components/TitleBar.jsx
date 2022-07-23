import { Box, Heading, Nav } from 'grommet';
import EditButton from './EditButton';

export const TitleBar = ({ label, level = 1, children, onCreate, createId, createLabel = '' }) => (
  <Box justify="between" align="center" direction="row" fill="horizontal">
    <Heading level={level}>{label}</Heading>
    <Box direction="row-reverse">
      {onCreate ? <EditButton onClick={onCreate} label={createLabel} id={createId} />
        : children}
    </Box>
  </Box>
);

export default TitleBar;
