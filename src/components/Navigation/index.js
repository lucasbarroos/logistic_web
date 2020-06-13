import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppsIcon from '@material-ui/icons/Apps';
import PublicIcon from '@material-ui/icons/Public';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ReceiptIcon from '@material-ui/icons/Receipt';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HttpsIcon from '@material-ui/icons/Https';
import PeopleIcon from '@material-ui/icons/People';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LanguageIcon from '@material-ui/icons/Language';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BellIcon from '@material-ui/icons/NotificationsNone';
import VideoIcon from '@material-ui/icons/VideoCall';
import {
  Container,
  LogoContainer,
  Logo,
  ItemForm,
  SearchContainer,
  Search,
  // SearchIcon,
  PanelContainer,
  PanelPicture,
  // LoginButton,
} from './styles';

const LogoImage = 'https://images.squarespace-cdn.com/content/v1/5aa97ac8372b96325bb9ad66/1537555277213-R6PW0UYCEGF6C3XR1YWO/ke17ZwdGBToddI8pDm48kOWMDVCH3pn9oG0fWe6Lf3xZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIFJZVeT3Vvf9XrysqEetFkvqCauJ1HIXnUMq5k01M2JQ/JD+Logistics.png';
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
            <Logo src={LogoImage} />
          </Link>
        </div>
        <Divider />
        <List>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon style={DrawerIconStyle}><AppsIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><PublicIcon /></ListItemIcon>
            <ListItemText primary="World Overview" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><LocalShippingIcon /></ListItemIcon>
            <ListItemText primary="Containers" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><ReceiptIcon /></ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><TrendingUpIcon /></ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><HttpsIcon /></ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Clients" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Employess" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><StoreMallDirectoryIcon /></ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><LocationCityIcon /></ListItemIcon>
            <ListItemText primary="Cities" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><LanguageIcon /></ListItemIcon>
            <ListItemText primary="Countries" />
          </ListItem>
        </List>
      </Drawer>
      <Container style={{ height: 70 }}>
        <ItemForm>
          <MenuIcon onClick={handleDrawerOpen} style={DropdownIconStyle} />
          <LogoContainer>
            <Link to="/">
              <Logo src={LogoImage} />
            </Link>
          </LogoContainer>
          <SearchContainer>
            <Search placeholder="Search" />
            {/* <SearchIcon src={SearchLogoImage} /> */}
          </SearchContainer>
          <PanelContainer>
            <VideoIcon style={IconStyle} />
            <AppsIcon style={IconStyle} />
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
