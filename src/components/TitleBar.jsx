import { Box, Heading, Nav } from 'grommet';
import { Home } from 'grommet-icons';
import Link from 'next/link';
import EditButton from './EditButton';

export const TitleBar = ({ label, level = 1, children, onCreate, createId, createLabel = '' }) => (
  <Box justify="between" align="center" direction="row" fill="horizontal" gap="small">
   <Link href="/">
     <Home />
   </Link>
    <Heading level={level}>{label}</Heading>
    <Box direction="row-reverse" fill="horizontal">
      {onCreate ? <EditButton onClick={onCreate} label={createLabel} id={createId} />
        : children}
    </Box>
  </Box>
);

export default TitleBar;
