import '../../styles/globals.css';

import { Grommet, Page, Header, Heading, PageContent, Nav } from 'grommet';
import { Home } from 'grommet-icons';
import theme from '../grommet-theme';
import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={theme} full>
      <Page kind="full"  margin="0">
        <PageContent margin="0">
            <Nav background="brand" size="small" direction="row" pad="small" gap="large">
              <Link href="/"><Home color="white" /></Link>

             <Heading size="small" pad="0" margin="0">
               Work Work Work      </Heading>
          </Nav>
          <Component {...pageProps} />
        </PageContent>
      </Page>
    </Grommet>
  );
}
