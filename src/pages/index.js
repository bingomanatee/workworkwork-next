import React from 'react';
import Link from 'next/link';
import { Anchor, Box, Nav, Paragraph } from 'grommet';
import { Tasks } from 'grommet-icons';

const Index = () => (
    <Box pad="large">
      <Paragraph>
       A task runner
      </Paragraph>
      <Nav direction="column" align="start">
        {/* Need to pass href because of:
         * https://github.com/zeit/next.js/#forcing-the-link-to-expose-href-to-its-child */}
        <Link href="/taskTypes" passHref>
          <Anchor label="Task Types" icon={<Tasks />} />
        </Link>
        <Link href="/tasks" passHref>
          <Anchor label="Tasks" icon={<Tasks />} />
        </Link>
      </Nav>
    </Box>
);

export default Index;
