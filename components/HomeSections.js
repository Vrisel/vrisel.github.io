import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HistoryIcon from '@mui/icons-material/History';
import InventoryIcon from '@mui/icons-material/Inventory';
import ContactsIcon from '@mui/icons-material/Contacts';
import EMailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import NoteIcon from '@mui/icons-material/NoteAlt';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArticleIcon from '@mui/icons-material/Article';
import classes from './HomeSections.module.css';
import Image from 'next/image';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

const TOP_MARGIN = 4;
const Header = (props) => {
  return (
    <Typography
      color="#fd9c0d" // AT Field Orange
      mb={1}
      sx={[
        { fontWeight: 600 },
        props.id && {
          '&::before': {
            content: `""`,
            display: 'block',
            height: `${TOP_MARGIN * 8}px`,
            marginTop: `${TOP_MARGIN * -8}px`,
            visibility: 'hidden',
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
          모두에게 편리한 프로그램을 만들기 위해 노력하는 프론트엔드 주니어,{' '}
          <strong>임진섭</strong>
          입니다.
        </Typography>
        <Box component="ul">
          <Box component="li">
            잠깐 사용하더라도 사용자가 불편함을 느끼지 않기를 바랍니다.
          </Box>
          <Box component="li">
            최상의 UX는 아니더라도 최소한의 접근성을 보장하고자 합니다.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const flexThree = {
  WebkitFlex: '3',
  MsFlex: '3',
  flex: '3',
};
const History = (props) => {
  return (
    <Box
      component="section"
      mb={props.mb}
      aria-labelledby="history"
      sx={{ position: 'relative' }}
    >
      <Header component={props.headerComponent} variant="h5" id="history">
        <HistoryIcon />
        이력
      </Header>
      <Timeline>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            `21.08 ~ 현재
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ ...flexThree }}>
            <Typography variant="h6" component="h3">
              실로암시각장애인복지관
            </Typography>
            <Box component="ul">
              <Box component="li">근로지원인</Box>
              <Box component="li">시각장애인의 업무 보조</Box>
            </Box>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            `18.12 ~ `20.10
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={flexThree}>
            <Typography variant="h6" component="h3">
              바우뫼주간보호센터
            </Typography>
            <Box component="ul">
              <Box component="li">사회복무요원</Box>
              <Box component="li">발달장애인의 센터 내 생활 보조</Box>
            </Box>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            `13.03 ~ `18.12
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={flexThree}>
            <Typography variant="h6" component="h3">
              가천대학교 일반대학원
            </Typography>
            <Box component="ul">
              <Box component="li">
                나노화학과 나노화학 전공 (석·박사통합과정 수료)
              </Box>
              <Box component="li">8학기 course work 수료 후 연구 지속</Box>
              <Box component="li">연구실 내 행정처리 담당 (2013~2018)</Box>
              <Box component="li">Lab장 (2014~2018)</Box>
              <Box component="li">
                학부수업 &quot;유기화학실험&quot; 조교 (2014학년도 1학기)
              </Box>
              <Box component="li">
                보건복지부 및 한국연구재단 지원 과제에 참여
              </Box>
              <Box component="li">
                출간 논문
                <Box component="ul">
                  <Box component="li">
                    <b>RIM, Jinseob</b>; JANG, Chang-Hyun.
                    <br />
                    <a
                      href="https://doi.org/10.1016/j.ab.2018.08.010"
                      rel="nofollow noopener noreferrer"
                    >
                      Detection of catalase activity with aldehyde-doped liquid
                      crystals confined in microcapillaries.
                    </a>
                    <br />
                    Analytical biochemistry, 2018, 560: 19-23.
                  </Box>
                  <Box component="li">
                    KIM, Hyeong Jin; <b>RIM, Jinseob</b>; JANG, Chang-Hyun.
                    <br />
                    <a
                      href="https://doi.org/10.1021/acsami.7b06189"
                      rel="nofollow noopener noreferrer"
                    >
                      Liquid-crystal-based immunosensor for diagnosis of
                      tuberculosis in clinical specimens.
                    </a>
                    <br />
                    ACS Applied Materials & Interfaces, 2017, 9.25: 21209-21215.
                  </Box>
                  <Box component="li">
                    <b>RIM, Jinseob</b>; KIM, Hyeong Jin; JANG, Chang-Hyun.
                    <br />
                    <a
                      href="https://doi.org/10.1002/bkcs.10922"
                      rel="nofollow noopener noreferrer"
                    >
                      Parallel Detection of Anti-Tuberculosis Antibodies upon a
                      Liquid Crystal-based Optical Sensor.
                    </a>
                    <br />
                    Bulletin of the Korean Chemical Society, 2016, 37.10:
                    1644-1651.
                  </Box>
                  <Box component="li">
                    KIM, Hyeong Jin; <b>RIM, Jinseob</b>; JANG, Chang-Hyun.
                    <br />
                    <a
                      href="https://doi.org/10.1007/s13233-016-4019-3"
                      rel="nofollow noopener noreferrer"
                    >
                      Diagnosis of tuberculosis using a liquid crystal-based
                      optical sensor.
                    </a>
                    <br />
                    Macromolecular Research, 2016, 24.2: 123-130.
                  </Box>
                </Box>
              </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            `09.03 ~ `13.02
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={flexThree}>
            <Typography variant="h6" component="h3">
              가천대학교
            </Typography>
            <Box component="ul">
              <Box component="li">
                바이오나노학부 나노시스템전공 (바이오나노공학사)
              </Box>
              <Box component="li">
                <s>최초합격 장학생 (1년)</s>
              </Box>
              <Box component="li">2011년 08월부터 연구실 생활 시작</Box>
              <Box component="li">
                <s>과 수석 졸업 (2명 중 1등)</s>
              </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            `06.03 ~ `09.02
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={flexThree}>
            <Typography variant="h6" component="h3">
              서울 중앙고등학교
            </Typography>
            <Box component="ul">
              <Box component="li">100회 졸업생</Box>
            </Box>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            `91.07.17
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="warning" />
          </TimelineSeparator>
          <TimelineContent sx={flexThree}>
            <Typography variant="h6" component="h3">
              서울 출생
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

const Projects = (props) => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('md'));
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
          listStyle: 'none',
          p: 0,
          // alignItems: "stretch",
        }}
      >
        {[
          {
            title: '개인 홈페이지',
            src: '/gitpage.png',
            href: 'https://vrisel.vercel.app/',
            desc: (
              <ul>
                <li>자기소개 및 포트폴리오 용 홈페이지(현재 페이지)</li>
                <li>연습을 겸하여 NEXT(React)로 제작</li>
                <li>스크립트 동작을 위해 GitPage가 아닌 Vercel로 배포</li>
              </ul>
            ),
            main: 'NEXT',
            ui: 'Material-UI',
          },
          {
            title: '절대음감 챌린지',
            src: '/ppc.png',
            href: 'https://vrisel.github.io/perfect-pitch-challenge',
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
            main: 'Nuxt, tone.js',
            ui: 'Vuetify',
          },
          {
            title: '퀘탈레(Quettale)',
            src: '/quettale.png',
            href: 'https://quettale.vercel.app',
            desc: (
              <ul>
                <li>
                  오픈소스를 클론하여 퀘냐 버전으로 만든 워들(Wordle) 게임
                  <ul>
                    <li>
                      <a
                        href="https://www.powerlanguage.co.uk/wordle/"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                      >
                        원조 워들 by Josh Wardle
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/cwackerfuss/react-wordle"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                      >
                        원본 소스 by Hannah Park
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://folk.uib.no/hnohf/"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                      >
                        단어 리스트 from Ardalambion
                      </a>
                    </li>
                  </ul>
                </li>
                <li>영어 번역 페이지 제공</li>
                <li>
                  워들 네트워크에 등록
                  <ul>
                    <li>
                      <a
                        href="https://wordles.miraheze.org/wiki/https://quettale.vercel.app/"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                      >
                        Wordle Hub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://rwmpelstilzchen.gitlab.io/wordles/#qya"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                      >
                        Wordles of the World
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            ),
            main: 'React, TypeScript, i18next',
            ui: 'Tailwind',
          },
          {
            title: '무신사 스토어 클론 (개발 중)',
            src: '/mss.png',
            href: 'https://vrisel.github.io/mss_a11y',
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
                  동료 개발자 및 협업의 필요성을 느끼고 천천히 개발 중
                  {/* <ul>
                    <li>함께 개선사항에 대에 토의할 기획자, 디자이너</li>
                    <li>백엔드 개발자</li>
                  </ul> */}
                </li>
              </ul>
            ),
            main: 'Nuxt',
            ui: 'Bootstrap-vue',
            etc: 'vuex, (jest), (express), (MySQL)',
          },
        ].map((atc, index) => (
          <Grid
            item
            component="li"
            sx={{
              width: '100%',
            }}
            key={index}
          >
            <Card
              component="article"
              sx={{
                height: '100%',
                width: '100%',
                position: 'relative',
                /* "&:hover": {
                  top: "2px",
                }, */
                display: 'flex',
                ...(downSm && {
                  flexDirection: 'column',
                  alignItems: 'center',
                }),
              }}
            >
              <CardMedia sx={{ flex: 'none', p: '16px' }}>
                <Image
                  src={atc.src}
                  width={3 * 100}
                  height={2 * 100}
                  alt={`${atc.title} 썸네일`}
                />
              </CardMedia>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  component="h3"
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    /* ...(downSm && { textAlign: "center" }) */
                  }}
                >
                  <Link href={atc.href}>{atc.title}</Link>
                </Typography>
                <Box mb={1.5}>{atc.desc}</Box>
                <Box
                  component="ul"
                  my={1}
                  sx={{ listStyle: 'none', m: 0, p: 0 }}
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
            title: '이메일: vrisel.p@gmail.com',
            icon: <EMailIcon />,
            href: 'mailto:vrisel.p@gmail.com',
          },
          {
            title: '깃허브(GitHub)',
            icon: <GitHubIcon />,
            href: 'https://www.github.com/vrisel',
            target: '_blank',
          },
          {
            title: '벨로그(Velog) - 공부노트',
            icon: <NoteIcon />,
            href: 'https://velog.io/@vrisel',
            target: '_blank',
          },
          {
            title: '트위터',
            icon: <TwitterIcon />,
            href: 'https://www.twitter.com/vrisel_p',
            target: '_blank',
          },
        ].map((item, index) => (
          <Box component="li" key={index}>
            {item.icon}
            <Link
              href={item.href}
              {...(item.target && { target: item.target, rel: 'noopener' })}
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
      88;
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
            <q>
              <dfn title="새 사도신경">
                나는 전능하신 아버지 하나님, 천지의 창조주를 믿습니다.
              </dfn>
            </q>
          </Box>
          <Box component="li">
            <strong>Vrisel</strong>이란 닉네임은 silver의{' '}
            <Link
              href="https://ko.wikipedia.org/wiki/%EC%96%B4%EA%B5%AC%EC%A0%84%EC%B2%A0"
              target="_blank"
              rel="noreferrer nopener nofollow"
            >
              애너그램
            </Link>
            입니다. <br />
            (이름 지을 당시에 사용하던 노트북이 은색)
          </Box>
          <Box component="li">
            본 페이지의 색상 테마는{' '}
            <Link
              href="https://ko.wikipedia.org/wiki/%EC%97%90%EB%B0%98%EA%B2%8C%EB%A6%AC%EC%98%A8_(%EA%B0%80%EA%B3%B5%EC%9D%98_%EB%B3%91%EA%B8%B0)#%EC%97%90%EB%B0%94_%EC%B4%88%ED%98%B8%EA%B8%B0"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <strong>에반게리온 초호기</strong>
            </Link>
            입니다.
          </Box>
          <Box component="li">
            <s>잘 보이시겠지만 디자인 쪽 스탯은 안 찍었습니다.</s>
          </Box>
          {/* <Box component="li">
            가볍게 다뤄본 프로그래밍/스크립팅 언어들:
            <Box component="ul">
              <Box component="li">
                <Link
                  href="https://www.mirc.com/"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
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
                  rel="noreferrer noopener nofollow"
                >
                  AutoHotKey
                </Link>
                ,{" "}
                <Link
                  href="https://www.autoitscript.com/"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  AutoIt
                </Link>
              </Box>
            </Box>
          </Box> */}
          <Box component="li">
            새로이 <strong>배우는 것</strong>을 좋아합니다.
            <Box component="ul">
              <Box component="li">
                하나가 궁금했는데 결국 열 가지를 찾아보는 타입
              </Box>
              <Box component="li">
                시간이 조금 걸릴 때도 있지만, 기반이 탄탄할수록 지식 활용성도
                커지는 것 같습니다.
              </Box>
              <Box component="li">
                배움이 지식에서 끝나지 않고 다른 사람들에게 도움이 될 때 기쁨과
                보람을 느낍니다.
              </Box>
            </Box>
          </Box>
          <Box component="li">
            프로그래밍 언어 외에도 각종 언어들을 좋아합니다.
            <Box component="ul">
              <Box component="li">
                <Link
                  href="https://www.duolingo.com/"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  듀오링고
                </Link>{' '}
                {duolingo()}일차
              </Box>
              <Box component="li">
                일상 대화가 가능한 수준:{' '}
                <strong>
                  <dfn title="영어">English</dfn>,{' '}
                  <dfn title="일본어">日本語</dfn>
                </strong>
              </Box>
              <Box component="li">
                기초적인 수준:{' '}
                <strong>
                  <dfn title="독일어">Deutsch</dfn>,{' '}
                  <dfn title="중국어">普通话</dfn>
                </strong>
              </Box>
              {/* <Box component="li">
                조금 배워본 정도:
                <strong>
                  <dfn title="스페인어">Español</dfn>,{' '}
                  <dfn title="아랍어">العربية</dfn>
                </strong>
              </Box> */}
              <Box component="li">
                <Link
                  href="https://ko.wikipedia.org/wiki/%EC%9D%B8%EA%B3%B5%EC%96%B4"
                  target="blank"
                  title=""
                >
                  인공어
                </Link>
                :{' '}
                <strong>
                  <dfn title="퀘냐: 「반지의 제왕」으로 유명한 J.R.R. 톨킨의 작품에 등장하는 요정어 중 하나">
                    <Link
                      href="https://ko.wikipedia.org/wiki/%EA%BF%B0%EB%83%90"
                      target="blank"
                    >
                      Quenya
                    </Link>
                  </dfn>
                </strong>
              </Box>
              <Box component="li">다음 목표: 아랍어, 스페인어 등</Box>
            </Box>
          </Box>
          <Box component="li">
            헷갈리면 사전을 찾아볼 정도로 맞춤법을 잘 지키려고 합니다.
          </Box>
          <Box component="li">
            <Link
              href="https://cafe.daum.net/3bulsik/JMKX/34"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              세벌식(3-2015)
            </Link>{' '}
            자판을 사용합니다.
          </Box>
          <Box component="li">왼손잡이입니다. 식사는 오른손으로 합니다.</Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Home, History, Projects, Contacts, TMI };
