import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HistoricIcon from '@material-ui/icons/History';
import BellIcon from '@material-ui/icons/NotificationsNone';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import ScheduleIcon from '@material-ui/icons/Schedule';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import VideoIcon from '@material-ui/icons/VideoCall';
import AppIcons from '@material-ui/icons/Apps';
import {
  Container,
  LogoContainer,
  Logo,
  ItemForm,
  SearchContainer,
  Search,
  SearchIcon,
  PanelContainer,
  PanelPicture,
  LoginButton,
} from './styles';

const Picture = 'https://nemsmbr.org/wp-content/uploads/2019/03/no-image-icon-md-2.png';

const IconStyle = {
  marginLeft: 25,
  cursor: 'pointer',
  color: '#717478',
};

const DropdownIconStyle = {
  color: '#fff',
  position: 'absolute',
  top: 20,
  left: 20,
};

const DrawerIconStyle = {
  color: '#fff',
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#2c2c32',
    color: 'white',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    color: 'white',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    color: 'white',
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon style={DrawerIconStyle} />
          </IconButton>
          <Link to="/">
            {/* <Logo src={LogoImage} /> */}
          </Link>
        </div>
        <Divider />
        <List>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon style={DrawerIconStyle}><InboxIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><SubscriptionIcon /></ListItemIcon>
            <ListItemText primary="Subscriptions" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><VideoLibraryIcon /></ListItemIcon>
            <ListItemText primary="Library" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><HistoricIcon /></ListItemIcon>
            <ListItemText primary="History" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><ScheduleIcon /></ListItemIcon>
            <ListItemText primary="Watch later" />
          </ListItem>
        </List>
      </Drawer>
      <Container>
        <ItemForm>
          <MenuIcon onClick={handleDrawerOpen} style={DropdownIconStyle} />
          <LogoContainer>
            <Link to="/">
              {/* <Logo src={LogoImage} /> */}
            </Link>
          </LogoContainer>
          <SearchContainer>
            <Search placeholder="Search" />
            {/* <SearchIcon src={SearchLogoImage} /> */}
          </SearchContainer>
          <PanelContainer>
            <VideoIcon style={IconStyle} />
            <AppIcons style={IconStyle} />
            <BellIcon style={IconStyle} />
            <Link to="/profile">
              <PanelPicture src={Picture} />
            </Link>
          </PanelContainer>
        </ItemForm>
      </Container>
    </div>
  );
};

export default Navigation;
