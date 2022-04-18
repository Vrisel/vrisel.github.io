import Layout from '../components/layout.js';
import Head from 'next/head';
import Container from '@mui/material/Container';
import * as Sections from '../components/HomeSections.js';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>브리셀(Vrisel)의 홈페이지</title>
        <meta name="description" content="브리셀의 홈페이지" />
      </Head>
      <Container sx={{ width: '99%' }}>
        <Sections.Home mb={7} headerComponent="h2" />
        <Sections.Projects mb={7} headerComponent="h2" />
        <Sections.History mb={7} headerComponent="h2" />
        <Sections.Contacts mb={7} headerComponent="h2" />
        <Sections.TMI mb={7} headerComponent="h2" />
      </Container>
    </Layout>
  );
}
