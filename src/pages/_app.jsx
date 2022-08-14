import '../../styles/globals.css';
import React from 'react';
import { Grommet, Page, Heading, PageContent, Nav } from 'grommet';
import { Home } from 'grommet-icons';
import Link from "next/link";
import theme from '../grommet-theme';
import ModelContext from "../components/ModelContext";
import createModel from '../components/model';

export default function MyApp({ Component, pageProps }) {
  return (
    <ModelContext.Provider value={createModel()}>
      <Grommet theme={theme} full>
        <Page kind="full" margin="0" id="page" background="black" height={"100vh"} overflow="auto">
          <PageContent margin="0" pad="0" id="page-content">
            <Nav background="brand" size="small" direction="row" pad="small" gap="large">
              <Link href="/"><Home color="white"/></Link>
              <Heading size="small" pad="0" margin="0">
                COVID 19 Progress over time </Heading>
            </Nav>
            <Component {...pageProps} />
          </PageContent>
        </Page>
      </Grommet>
    </ModelContext.Provider>
  );
}
