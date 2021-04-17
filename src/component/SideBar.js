import React, { useState, useEffect } from 'react';
import { Link, withRouter, useRouteMatch } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CollapsibleTable from "./UserCurrentPlans";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../Mshoping.png"
import Sidebar from './SideBar';
import Header from "./Header";
import Profile from "./Profile"
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NavbarBrand, Card, CardBody } from 'reactstrap'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import UserPanel from "./UserPanel";
import ReferedBy from "./ReferedBy";
import MyReferals from "./MyReferals";
import MyPlans from "./MyPlans";
import ByPlans from "./ByPlans";
import ProfileEdit from "./ProfileEdit";
import Checkout from './Checkout';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const sideBarItems = [
  { name: 'Dashborad', links: '/dashboard', icon: <DashboardIcon /> },
  { name: 'My Referals', links: '/dashboard/MyReferals', icon: <AccountBoxIcon /> },
  { name: 'Buy Plans', links: '/dashboard/ByPlans', icon: <AccountTreeIcon /> },
  { name: 'My Plans', links: '/dashboard/MyPlans', icon: <AddToQueueIcon /> },
  { name: 'My Profile', links: '/dashboard/Profile', icon: <AccountCircleIcon /> },
]


function SideBar(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  let { path, url } = useRouteMatch();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setOpen(!open);
  }

  useEffect(() => {
    return () => {
    }
  }, [open])

  // if (props)

  const Component = ({ match }) => {
    console.log(match.params.loc)
    var comp = match.params.loc
    if (comp === 'MyReferals')
      return (
        <MyReferals />
      )
    else if (comp === 'ByPlans')
      return (
        <ByPlans />
      )
    else if (comp === 'ReferedBy')
      return (
        <ReferedBy />
      )
    else if (comp === 'MyPlans')
      return (
        <MyPlans />
      )
    else if (comp === 'Profile')
      return (
        <Profile />
      )
    else if (comp === 'ProfileEdit')
      return (
        <ProfileEdit />
      )
    else if (comp === 'Checkout')
      return (
        <Checkout />
      )
  }

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <div>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar style={{ backgroundColor: 'white' }} >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                edge="start"
                className={clsx(classes.menuButton)}
              >
                <MenuIcon style={{ color: '#cc6c2c' }} />
              </IconButton>
              <Header />
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
          >
            <Toolbar />
            <Toolbar />
            <div className={classes.drawerContainer}>
              <Divider />
              {sideBarItems.map((item, index) => {
                return (
                  <List style={{ color: "#cc6c2c" }}>
                    <Link to={item.links}>
                      <ListItem
                        button
                      >
                        <ListItemIcon>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} style={{ color: "#cc6c2c", textDecorationStyle: 'none' }} />
                      </ListItem>
                    </Link>
                  </List>
                )
              })}

              {/* <List>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Widthdrawls"} />
              </ListItem>
            </List> */}

            </div>
          </Drawer>
        </div>
        <main className={classes.content}>
          <Card style={{ background: 'transparent' }} >
          </Card>
          <Switch>
            <Route exact path={'/dashboard'} component={UserPanel} />
            <Route exact path={`${path}/:loc`} component={Component} />
            {/* <Route path={`${path}/UserPanel`} component={UserPanel} />
            <Route path={`${path}/ReferedBy`} component={ReferedBy} />
            <Route path={`${path}/MyReferals`} component={MyReferals} />
            <Route path={`${path}/ByPlans`} component={ByPlans} />
            <Route path={`${path}/MyPlans`} component={MyPlans} />
            <Route path={`${path}/Profile`} component={Profile} />
            <Route path={`${path}/ProfileEdit`} component={ProfileEdit} /> */}
          </Switch>
        </main>
      </div >
    </>



  )
}

export default withRouter(SideBar)
