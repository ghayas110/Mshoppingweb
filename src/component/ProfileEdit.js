import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { withRouter } from "react-router-dom";
import rocketImg from '../rocket.png';
import Signup from './Signup';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import table from './Table';
import Header from "./Header"
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CollapsibleTable from "./UserCurrentPlans";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../Mshoping.png"
import SideBar from "./SideBar";
import Whatsapp from './WhatsApp'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    marginTop: 40,
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ProfileEdit = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { loggedInUser } = useSelector((state) => state);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Header />
      </AppBar>
      <SideBar />
      <main className={classes.content}>
        <Toolbar />
        <br />
        <Typography variant="h5" style={{ textAlign: "left" }}>

          <hr />
        </Typography>

        <Grid item >
          <div className="container mt-1 ml-4">
            <div className="row">
              <div className="col-md-7.5">
                <Signup />
              </div>
            </div>
          </div>
        </Grid>
      </main>
      <Whatsapp />
    </div>
  );
}

export default withRouter(ProfileEdit)