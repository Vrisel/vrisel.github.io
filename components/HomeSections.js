import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DevIcon from "@mui/icons-material/LogoDev";
import InventoryIcon from "@mui/icons-material/Inventory";
import ContactsIcon from "@mui/icons-material/Contacts";
import EMailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import NoteIcon from "@mui/icons-material/NoteAlt";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArticleIcon from "@mui/icons-material/Article";
import classes from "./HomeSections.module.css";
import Image from "next/image";

const TOP_MARGIN = 4;
const Header = (props) => {
  return (
    <Typography
      color="#fd9c0d" // AT Field Orange
      mb={1}
      sx={[
        { fontWeight: 600 },
        props.id && {
          "&::before": {
            content: `""`,
            display: "block",
            height: `${TOP_MARGIN * 8}px`,
            marginTop: `${TOP_MARGIN * -8}px`,
            visibility: "hidden",
          },
        },
      ]}
      {...props}
    />
  );
};

const Home = (props) => {
  return (
    <Box
      component="section"
      mt={TOP_MARGIN}
      mb={props.mb}
      aria-labelledby="home"
    >
      <Header component={props.headerComponent} variant="h4" id="home">
        🎉Hello, World!
      </Header>
      <Box>
        <Typography paragraph>
          풀스택도 프론트부터!
          <br />
          프론트&백 풀스택 프로그래머를 지망하는 <strong>Vrisel</strong>
          입니다.
        </Typography>
        <Box component="ul" className={classes.mbList}>
          <Typography component="li">
            <q>
              <dfn title="새 사도신경">
                나는 전능하신 아버지 하나님, 천지의 창조주를 믿습니다.
              </dfn>
            </q>
          </Typography>
          <Typography component="li">
            모든 <strong>사람이 사람답게</strong> 살 수 있는 세상을 꿈꿉니다.
            <Box component="ul">
              <Typography component="li">
                프로그래머의 <strong>사회적 역할</strong>에 대해 고민합니다.
              </Typography>
              <Typography component="li">
                웹 접근성에 큰 관심을 가지고 있습니다.
              </Typography>
            </Box>
          </Typography>
          <Typography component="li">
            새로이 <strong>배우는 것</strong>을 좋아합니다.
            <Box component="ul">
              <Typography component="li">
                <strong>배워서 남 주는 사람</strong>이 되고 싶습니다.
              </Typography>
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const Skills = (props) => {
  return (
    <Box
      component="section"
      mb={props.mb}
      aria-labelledby="skills"
      sx={{ position: "relative" }}
    >
      <Header component={props.headerComponent} variant="h5" id="skills">
        <DevIcon />
        사용중인 기술
      </Header>
      <Box component="dl" className={classes.dataList}>
        <Typography component="dt">Front-end framework(library):</Typography>
        <Typography component="dd">Nuxt(Vue.js), NEXT(React)</Typography>

        <Typography component="dt">Database:</Typography>
        <Typography component="dd">SQL(SQL Server, MySQL), MongoDB</Typography>

        <Typography component="dt">Middleware:</Typography>
        <Typography component="dd">express</Typography>

        <Typography component="dt">Full-stack:</Typography>
        <Typography component="dd">C# ASP.NET Framwork</Typography>
      </Box>
    </Box>
  );
};

const Projects = (props) => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box component="section" mb={props.mb} aria-labelledby="projects">
      <Header component={props.headerComponent} variant="h5" id="projects">
        <InventoryIcon />
        프로젝트
      </Header>
      <Grid
        container
        component="ol"
        spacing={1}
        sx={{
          listStyle: "none",
          p: 0,
          // alignItems: "stretch",
        }}
      >
        {[
          {
            title: "개인 홈페이지",
            src: "/gitpage.png",
            href: "https://vrisel.vercel.app/",
            desc: (
              <ul>
                <li>자기소개 및 포트폴리오 용 홈페이지(현재 페이지)</li>
                <li>연습을 겸하여 NEXT(React)로 제작</li>
                <li>스크립트 동작을 위해 GitPage가 아닌 Vercel로 배포</li>
              </ul>
            ),
            main: "NEXT",
            ui: "Material-UI",
          },
          {
            title: "절대음감 챌린지",
            src: "/ppc.png",
            href: "https://vrisel.github.io/perfect-pitch-challenge",
            desc: (
              <ul>
                <li>
                  배포 및 공유 경험에 중점을 둔 만든 미니 게임
                  <ul>
                    <li>주어지는 소리를 듣고 음이름을 맞히는 게임</li>
                    <li>
                      <code>tone.js</code>라는 라이브러리를 사용하여 음 발생
                    </li>
                  </ul>
                </li>
                <li>
                  <s>디자이너 구합니다</s>
                </li>
              </ul>
            ),
            main: "Nuxt, tone.js",
            ui: "Vuetify",
          },
          {
            title: "무신사 스토어 클론 (미완성)",
            src: "/mss.png",
            href: "https://vrisel.github.io/mss_a11y",
            desc: (
              <ul>
                <li>
                  웹 접근성 향상에 중점을 둔 클로닝 프로젝트
                  <ul>
                    <li>
                      기존 무신사 스토어 홈페이지를 디자인 시안처럼 사용
                      <ul>
                        <li>
                          퍼블리싱이 주 목표가 아니기 때문에, 외관은
                          라이브러리를 이용하여 <u>비슷한 정도로만</u> 구현
                        </li>
                        <li>
                          원본 인터페이스가 반응형이 아니라서 본 프로젝트도
                          반응형으로 구현하지 않음
                        </li>
                      </ul>
                    </li>
                    <li>
                      접근성 관점에서 개선이 필요해보이는 부분은 임의로 수정함
                    </li>
                  </ul>
                </li>
                <li>
                  bootstrap-vue 라이브러리에서 제공되는 컴포넌트 외에 추가
                  기능이나 컴포넌트를 직접 구현함
                  <br />
                  <Link
                    href="https://github.com/Vrisel/mss_a11y#%ED%8A%B9%EB%B3%84%ED%9E%88-%EA%B5%AC%ED%98%84%ED%95%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8"
                    target="_blank"
                  >
                    (관련 README)
                  </Link>
                </li>
                <li>
                  동료 개발자 및 협업의 필요성을 느끼고 잠시 중단함
                  <ul>
                    <li>함께 개선사항에 대에 토의할 기획자, 디자이너</li>
                    <li>백엔드 개발자</li>
                  </ul>
                </li>
              </ul>
            ),
            main: "Nuxt",
            ui: "Bootstrap-vue",
            etc: "vuex, (jest), (express), (MySQL)",
          },
        ].map((atc, index) => (
          <Grid
            item
            component="li"
            sx={{
              width: "100%",
            }}
            key={index}
          >
            <Card
              component="article"
              sx={{
                height: "100%",
                width: "100%",
                position: "relative",
                /* "&:hover": {
                  top: "2px",
                }, */
                display: "flex",
                ...(downSm && {
                  flexDirection: "column",
                  alignItems: "center",
                }),
              }}
            >
              <CardMedia sx={{ flex: "none", p: "16px" }}>
                <Image
                  src={atc.src}
                  width={3 * 100}
                  height={2 * 100}
                  alt={`${atc.title} 썸네일`}
                />
              </CardMedia>
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  component="h3"
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    /* ...(downSm && { textAlign: "center" }) */
                  }}
                >
                  <Link href={atc.href}>{atc.title}</Link>
                </Typography>
                <Box mb={1.5}>{atc.desc}</Box>
                <Box
                  component="ul"
                  my={1}
                  sx={{ listStyle: "none", m: 0, p: 0 }}
                >
                  <li>
                    <strong>메인 기술</strong>: {atc.main}
                  </li>
                  <li>
                    <strong>UI 라이브러리</strong>: {atc.ui}
                  </li>
                  {atc.etc && (
                    <li>
                      <strong>기타</strong>: {atc.etc}
                    </li>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const Contacts = (props) => {
  return (
    <Box component="section" mb={props.mb} aria-labelledby="contacts">
      <Header component={props.headerComponent} variant="h5" id="contacts">
        <ContactsIcon />
        연락처 및 링크
      </Header>
      <Box component="ul">
        {[
          {
            title: "E-mail: vrisel.p@gmail.com",
            icon: <EMailIcon />,
            href: "mailto:vrisel.p@gmail.com",
          },
          {
            title: "GitHub",
            icon: <GitHubIcon />,
            href: "https://www.github.com/vrisel",
            target: "_blank",
          },
          {
            title: "Velog (공부노트)",
            icon: <NoteIcon />,
            href: "https://velog.io/@vrisel",
            target: "_blank",
          },
          {
            title: "Twitter",
            icon: <TwitterIcon />,
            href: "https://www.twitter.com/vrisel_p",
            target: "_blank",
          },
        ].map((item, index) => (
          <Box component="li" key={index}>
            {item.icon}
            <Link
              href={item.href}
              {...(item.target && { target: item.target, rel: "noopener" })}
            >
              {item.title}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const TMI = (props) => {
  const duolingo = () => {
    const today = new Date();
    const startDay = new Date(2020, 8 - 1, 14);
    const duration =
      Math.ceil((today.getTime() - startDay.getTime()) / 1000 / 60 / 60 / 24) -
      72;
    return duration;
  };

  return (
    <Box component="section" mb={props.mb} aria-labelledby="tmi">
      <Header component={props.headerComponent} variant="h5" id="tmi">
        <ArticleIcon />
        <abbr title="Too Much Information">TMI</abbr>
      </Header>
      <Box component="details">
        <summary>펼치기/접기</summary>
        <Box component="ul" className={classes.mbList}>
          <Box component="li">
            <strong>Vrisel</strong>은 silver의 애너그램입니다. <br />
            (이름 지을 당시에 사용하던 노트북이 은색)
          </Box>
          <Box component="li">
            본 페이지의 색상 테마는 <strong>에반게리온 초호기</strong>
            입니다.
          </Box>
          {/* <Box component="li">
            가볍게 다뤄본 프로그래밍/스크립팅 언어들:
            <Box component="ul">
              <Box component="li">
                <Link
                  href="https://www.mirc.com/"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  mIRC
                </Link>
                에서{" "}
                <abbr title="mIRC Scripting Language">
                  <strong>mSL</strong>
                </abbr>
              </Box>
              <Box component="li">
                Microsoft PowerPoint에서{" "}
                <abbr title="Visual Basic for Applications">
                  <strong>VBA</strong>
                </abbr>
              </Box>
              <Box component="li">
                <Link
                  href="https://www.autohotkey.com/"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  AutoHotKey
                </Link>
                ,{" "}
                <Link
                  href="https://www.autoitscript.com/"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  AutoIt
                </Link>
              </Box>
            </Box>
          </Box> */}
          <Box component="li">
            프로그래밍 언어 외에도 각종 언어들을 좋아합니다.
            <Box component="ul">
              <Box component="li">
                <Link
                  href="https://www.duolingo.com/"
                  target="_blank"
                  rel="nofollows"
                >
                  듀오링고
                </Link>{" "}
                <u>{duolingo()}일차</u>
              </Box>
              <Box component="li">
                일상 대화가 가능한 수준:
                <strong>
                  <dfn title="영어">English</dfn>,{" "}
                  <dfn title="일본어">日本語</dfn>
                </strong>
              </Box>
              <Box component="li">
                기초적인 수준:
                <strong>
                  <dfn title="독일어">Deutsch</dfn>,{" "}
                  <dfn title="중국 표준어">普通话</dfn>
                </strong>
              </Box>
              <Box component="li">
                조금 배워본 것들:
                <strong>
                  <dfn title="스페인어">Español</dfn>,{" "}
                  <dfn title="아랍어">العربية</dfn>
                </strong>
              </Box>
              <Box component="li">
                <Link
                  href="https://ko.wikipedia.org/wiki/%EC%9D%B8%EA%B3%B5%EC%96%B4"
                  target="blank"
                  title=""
                >
                  인공어
                </Link>
                :{" "}
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
              </Box>
            </Box>
          </Box>
          <Box component="li">세벌식(3-2015) 자판을 사용합니다.</Box>
          <Box component="li">왼손잡이입니다. 식사는 오른손으로 합니다.</Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Home, Skills, Projects, Contacts, TMI };
