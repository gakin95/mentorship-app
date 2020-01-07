import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FeedbackIcon from '@material-ui/icons/Feedback';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import SubjectIcon from '@material-ui/icons/Subject';
import Button from '@material-ui/core/Button';
import FemaleUser from '../FemaleUser.png';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Profile from './Profile'
import PopOver from './popOver'
import cibn from '../cibn.png'





const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // backgroundColor: "transparent",
    background: 'hsl(144, 100%, 33%)',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    background: 'hsl(144, 100%, 21%)',
    color:'white',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    background: 'hsl(144, 100%, 21%)',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,

    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // backgroundColor:'white'
  },
  nav: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


const links = [
  {
    name: "Dashboard",
    icon: <HomeIcon />,
    link: "/tita"
  },
  {
    name: "Message",
    icon: <MessageIcon />,
    link: "/message"
  },
  {
    name: "Mentors",
    icon: <PeopleIcon />,
    link: "/mentors",
    children: [
      {
        name: "View Request",
        icon: <VisibilityIcon />,
        link: "/request",
      }
    ]
  },
  {
    name: "Meeting Report",
    icon: <FeedbackIcon />,
    link: "/meeting"
  },
  {
    name: "Feedback",
    icon: <SubjectIcon />,
    link: "/feedback"
  },
];

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" className={classes.title}>
            {props.name}
          </Typography>
          <Avatar src={FemaleUser} alt="femaleUser" />
          <PopOver />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
       >
        <div className={classes.toolbar} style={{color: 'white',display: 'flex',alignItems:'center',justifyContent: 'space-evenly'}}>
        <Avatar src={cibn} alt="cibn" />
          <p>The chatterred institute of bankers</p>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List >
          {links.map((nav, index) => (
            <React.Fragment>
              {nav.children? 
              <div>
              <ListItemLink button onClick={handleClick}
               href={nav.link} key={nav.name}>
                <ListItemIcon style={{color:'white'}}>
                {nav.icon}
                </ListItemIcon>
                <ListItemText primary={nav.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemLink>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemLink button 
                  href={nav.children[0].link} 
                  key={nav.name} 
                  className={classes.nested}
                  >
                    <ListItemIcon>
                    {nav.children[0].icon}
                    </ListItemIcon>
                    <ListItemText primary={nav.children[0].name} />
                  </ListItemLink>
                </List>
                </Collapse>
                </div>
                
             : <ListItemLink href={nav.link} key={nav.name}>
             <ListItemIcon style={{color:'white'}}>{nav.icon}</ListItemIcon>
             <ListItemText primary={nav.name} />
             </ListItemLink>
              } 

            </React.Fragment>
            
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
MiniDrawer.defaultProps = {
  name: 'CIBN-MENTUP'
}
