// material-ui
import { ThemeProvider, createTheme } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DevIcon from '@mui/icons-material/LogoDev';
import InventoryIcon from '@mui/icons-material/Inventory';
import HistoryIcon from '@mui/icons-material/History';
import ContactsIcon from '@mui/icons-material/Contacts';
import ArticleIcon from '@mui/icons-material/Article';
// native
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';

const drawerWidth = 150;
const evaColor = {
  blue: '#615aa8',
  violet: '#592661',
  green: '#a3da58',
  orange: '#f7ba2b',
  red: '#ff1e3c',
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  /* [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  }, */
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const drawerTheme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: evaColor.blue,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.2)' },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: `${evaColor.red}!important`,
            backgroundColor: 'rgba(0, 0, 0, 0.2)!important',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 600,
        },
      },
    },
  },
});

export default function Layout({ children }) {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (e, i) => {
    setSelectedIndex(i);
  };

  const [sectionTops, setSectionTops] = useState([]);
  /* useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector('main');
      let tops = [];
      container
        .querySelectorAll('section')
        .forEach((sec) => tops.push(sec.offsetTop));
      setSectionTops(tops);
      console.log(sectionTops);
    };
    window.addEventListener('resize', handleResize);
    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  }); */

  useEffect(() => {
    const container = document.querySelector('main');
    let tops = [];
    container
      .querySelectorAll('section')
      .forEach((sec) => tops.push(sec.offsetTop));
    setSectionTops(tops);
    console.log(tops);
  }, [selectedIndex]);

  const [currY, setCurrY] = useState(0);
  useEffect(() => {
    let currentIndex = 0;
    for (let i = 0; i < sectionTops.length; i++) {
      if (currY >= sectionTops[i] - sectionTops[0]) {
        currentIndex = i;
      } else {
        break;
      }
    }
    setSelectedIndex(currentIndex);
  }, [currY]);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{ color: evaColor.orange, backgroundColor: evaColor.violet }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label={open ? '사이드바 축소' : '사이드바 확장'}
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="h1"
              sx={{
                fontWeight: 600,
              }}
            >
              VRISEL
            </Typography>
          </Toolbar>
        </AppBar>
        <ThemeProvider theme={drawerTheme}>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {[
                { text: 'Home', href: '#home', icon: <HomeIcon /> },
                // { text: "Skills", href: "#skills", icon: <DevIcon /> },
                {
                  text: 'Projects',
                  href: '#projects',
                  icon: <InventoryIcon />,
                },
                { text: 'History', href: '#history', icon: <HistoryIcon /> },
                { text: 'Contacts', href: '#contacts', icon: <ContactsIcon /> },
                { text: 'TMI', href: '#tmi', icon: <ArticleIcon /> },
              ].map((item, index) => (
                <ListItem
                  button
                  key={item.text}
                  sx={{
                    color: evaColor.green,
                    p: 0,
                    '&:hover': { color: '#f7ba2b' },
                  }}
                >
                  <ListItemButton
                    component="a"
                    href={item.href}
                    selected={selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, index)}
                  >
                    <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </ThemeProvider>
        <Box
          component="main"
          sx={{
            px: 2,
            position: 'relative',
            marginTop: '64px',
            height: 'calc(100vh - 64px)',
            width: '100%',
            overflowY: 'auto',
          }}
          onScroll={({ target }) => setCurrY(target.scrollTop)}
        >
          {children}
          <Box
            component="footer"
            sx={{
              borderTop: '1px solid #000',
              py: '24px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography>
              Made by <strong>VRISEL</strong>
            </Typography>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/vrisel.png" alt="Vrisel Logo" height="24" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
