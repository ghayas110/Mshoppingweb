import React,{useState} from "react";
import {useSelector} from 'react-redux'
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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
import { Avatar } from "@material-ui/core";
import { loggedInUser } from "../redux/loggedInUser";

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
    marginTop:40,
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

}));

export default function Profile(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { loggedInUser, userPlans } = useSelector((state) => state);
  
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
      <Header/>
      </AppBar>
    <SideBar/>
      <main className={classes.content}>
         <Toolbar />
                <br />
               
              
        <Grid item >
<div className={classes.iconsize}>
    <AccountCircleIcon fontSize="large"/>
    <h2>{loggedInUser.user.firstName + ' ' + loggedInUser.user.lastName}</h2>
    <p>{loggedInUser.user.userEmail}</p>
    <p>{loggedInUser.user.phone_number}</p>
   
</div>
        </Grid>
      </main>
       {/* whatsapp icon */}
       <a
       href="https://wa.me/+447949549043"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <i class="fa fa-whatsapp" aria-hidden="true"></i> */}
        <FaWhatsapp style={{textAlign:'center',height: '4.5em',width: '2.8em'}} />
      </a>
    </div>
  );
}
