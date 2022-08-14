import React from 'react';
import Link from 'next/link';
import { Anchor, Box, Nav, Paragraph } from 'grommet';
import { Map, Tasks } from 'grommet-icons';

const Navigation = () => (
    <Box pad="large">
      <Paragraph>
       An analytics engine describing the Covid pogress
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
        <Link href="/locations" passHref>
          <Anchor label="Locations" icon={<Map />} />
        </Link>
      </Nav>
    </Box>
);

export default Navigation;
