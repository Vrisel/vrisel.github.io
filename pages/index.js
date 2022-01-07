import Layout from "../components/layout.js";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Link,
  Typography,
} from "@mui/material";
import DevIcon from "@mui/icons-material/LogoDev";
import InventoryIcon from "@mui/icons-material/Inventory";
import ContactsIcon from "@mui/icons-material/Contacts";
import ArticleIcon from "@mui/icons-material/Article";

export default function Home() {
  const duolingo = () => {
    const today = new Date();
    const startDay = new Date(2020, 8 - 1, 14);
    const duration =
      Math.ceil((today.getTime() - startDay.getTime()) / 1000 / 60 / 60 / 24) -
      71;
    return duration;
  };

  return (
    <Layout>
      <Container className="body-font" sx={{ width: "99%" }}>
        <Box component="section" mb={5} aria-labelledby="home">
          <Typography
            component="h2"
            variant="h4"
            id="home"
            className="text-violet"
          >
            Hello, World! 🎉
          </Typography>
          <Typography paragraph>
            백&프론트 풀스택 프로그래머를 지망하는 <strong>Vrisel</strong>
            입니다.
            <ul>
              <li>
                <dfn title="새 사도신경">
                  {'"나는 전능하신 아버지 하나님, 천지의 창조주를 믿습니다."'}
                </dfn>
              </li>
              <li>모든 사람이 사람답게 살 수 있는 세상을 꿈꿉니다.</li>
              <li>
                프로그래머의 <strong>사회적 역할</strong>에 대해 고민합니다.
              </li>
              <li>
                새로이 배우는 것을 좋아합니다. <br />
                <strong>배워서 남 주는 사람</strong>이 되고 싶습니다.
              </li>
            </ul>
          </Typography>
        </Box>
        <Box component="section" mb={5} aria-labelledby="skills">
          <Typography
            component="h2"
            variant="h5"
            id="skills"
            className="text-violet"
          >
            <DevIcon />
            Skills
          </Typography>
          <ul>
            <li>
              <strong>Front:</strong> Vue, Nuxt
            </li>
            <li>
              <strong>DB:</strong> SQL, MongoDB
            </li>
            <li>
              <strong>Middleware:</strong> Express
            </li>
            <li>
              <strong>Full-stack:</strong> C# ASP.NET Framwork
            </li>
          </ul>
        </Box>
        <Box component="section" mb={5} aria-labelledby="projects">
          <Typography
            component="h2"
            variant="h5"
            id="projects"
            className="text-violet"
          >
            <InventoryIcon />
            Projects
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "stretch",
            }}
          >
            <Box component="li" mr={1} mb={1}>
              <Card
                component="article"
                sx={{ maxWidth: "240px", height: "100%" }}
              >
                <CardMedia
                  component="img"
                  src="https://via.placeholder.com/240x160"
                  alt=""
                />
                <CardContent>
                  <Typography component="h3" variant="h6" gutterBottom>
                    <Link href="https://vrisel.github.io/mss_a11y">
                      무신사 스토어 클론
                    </Link>
                  </Typography>
                  <Typography variant="body2">
                    : 무신사 스토어 사이트를 이용하며 불편했던 점들을 (특히
                    접근성 관점에서) 개선해본 프로젝트 (미완성)
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box component="li" mr={1} mb={1}>
              <Card
                component="article"
                sx={{ maxWidth: "240px", height: "100%" }}
              >
                <CardMedia
                  component="img"
                  src="https://via.placeholder.com/240x160"
                  alt=""
                />
                <CardContent>
                  <Typography component="h3" variant="h6" gutterBottom>
                    <Link href="https://vrisel.github.io/perfect-pitch-challenge">
                      절대음감 챌린지
                    </Link>
                  </Typography>
                  <Typography variant="body2">
                    : 주어지는 소리의 음이름을 맞히는 미니 게임
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
        <Box component="section" mb={5} aria-labelledby="contacts">
          <Typography
            component="h2"
            variant="h5"
            id="contacts"
            className="text-violet"
          >
            <ContactsIcon />
            Contacts
          </Typography>
          <address>
            <ul>
              <li>
                E-mail:{" "}
                <Link href="mailto:vrisel.p@gmail.com">vrisel.p@gmail.com</Link>
              </li>
              <li>
                GitHub:{" "}
                <Link href="https://github.com/vrisel" target="blank">
                  Vrisel
                </Link>
              </li>
            </ul>
          </address>
        </Box>
        <Box component="section" mb={5} aria-labelledby="tmi">
          <Typography
            component="h2"
            variant="h5"
            id="tmi"
            className="text-violet"
          >
            <ArticleIcon />
            <abbr title="Too Much Information">TMI</abbr>
          </Typography>
          <details>
            <summary>펼치기/접기</summary>
            <ul>
              <li>
                <strong>Vrisel</strong>은 silver의 애너그램입니다. <br />
                이름 지을 당시에 사용하던 노트북이 은색이라서...
              </li>
              <li>
                가볍게 다뤄본 프로그래밍/스크립팅 언어들:
                <ul>
                  <li>
                    mIRC에서{" "}
                    <abbr title="mIRC Scripting Language">
                      <strong>mSL</strong>
                    </abbr>
                  </li>
                  <li>
                    Microsoft PowerPoint에서{" "}
                    <abbr title="Visual Basic for Applications">
                      <strong>VBA</strong>
                    </abbr>
                  </li>
                  <li>
                    <abbr title="AutoHotKey">
                      <strong>AHK</strong>
                    </abbr>
                    , <strong>AutoIt</strong>
                  </li>
                </ul>
              </li>
              <li>
                <Typography>
                  프로그래밍 언어 외에도 각종 언어들을 좋아합니다. (듀오링고{" "}
                  <u>{duolingo()}일차</u>)
                </Typography>
                <ul>
                  <li>
                    일상 대화가 가능한 수준:
                    <strong>
                      <dfn title="영어">English</dfn>,{" "}
                      <dfn title="일본어">日本語</dfn>
                    </strong>
                  </li>
                  <li>
                    기초적인 수준:
                    <strong>
                      <dfn title="독일어">Deutsch</dfn>,{" "}
                      <dfn title="중국 표준어">普通话</dfn>
                    </strong>
                  </li>
                  <li>
                    조금 배워본 것들:
                    <strong>
                      <dfn title="스페인어">Español</dfn>,{" "}
                      <dfn title="아랍어">العربية</dfn>
                    </strong>
                  </li>
                  <li>
                    <Link
                      href="https://ko.wikipedia.org/wiki/%EC%9D%B8%EA%B3%B5%EC%96%B4"
                      target="blank"
                      title=""
                    >
                      인공어
                    </Link>
                    :
                    <strong>
                      <dfn title="퀘냐: 「반지의 제왕」으로 유명한 JRR톨킨의 작품에 등장하는 요정어 중 하나">
                        <Link
                          href="https://ko.wikipedia.org/wiki/%EA%BF%B0%EB%83%90"
                          target="blank"
                        >
                          Quenya
                        </Link>
                      </dfn>
                    </strong>
                  </li>
                </ul>
              </li>
              <li>세벌식(3-2015) 자판을 사용합니다.</li>
              <li>왼손잡이입니다. 식사는 오른손으로 합니다.</li>
            </ul>
          </details>
        </Box>
      </Container>
    </Layout>
  );
}
