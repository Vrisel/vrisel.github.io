import Layout from "../components/layout.js";
import * as Sections from "../components/HomeSections.js";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Head from "next/head";

const useStyles = makeStyles({
  mbList: {
    "&>li": {
      marginBottom: "12px",
    },
  },
  dataList: {
    "&>dt": {
      fontWeight: 700,
      marginBottom: "-0.5em",
      /* "&::after": {
        content: ": ",
      }, */
    },
    "&>dd": {
      marginBottom: "0.5em",
      paddingLeft: "6em",
      paddingBottom: "0.5em",
      borderBottom: "1px solid #000",
    },
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <Head>
        <title>브리셀(Vrisel)의 깃페이지</title>
        <meta name="description" content="브리셀의 홈페이지" />
      </Head>
      <Container sx={{ width: "99%" }}>
        <Sections.Home mb={7} headerComponent="h2" />
        <Sections.Skills mb={7} headerComponent="h2" />
        <Sections.Projects mb={7} headerComponent="h2" />
        <Sections.Contacts mb={7} headerComponent="h2" />
        <Sections.TMI mb={7} headerComponent="h2" />
      </Container>
    </Layout>
  );
}
