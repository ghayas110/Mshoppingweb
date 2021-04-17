import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
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
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { FaWhatsapp } from "react-icons/fa";
import logo from "../Mshoping.png"
import SideBar from "./SideBar";
import { Avatar } from "@material-ui/core";
import { loggedInUser } from "../redux/loggedInUser";
import Signup from "./Signup";
import ProfileEdit from "./ProfileEdit";

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
  con: {
    textAlign: "left",
    fontSize: 18
  }

}));

const Profile = (props) => {
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
      
      <main className={classes.content}>
        <Toolbar />
        <br />


        <Grid item >
          <div >
          <Card>
          <AccountCircleIcon  style={{ fontSize: 60 ,alignItems:'center',justifyContent:'center' }} color="primary"  />
        <CardBody>
          <CardTitle tag="h5">{loggedInUser.user.userName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{loggedInUser.user.firstName + ' ' + loggedInUser.user.lastName}</CardSubtitle>
          <CardText>
            <ul style={{textAlign:"left"}}>
              <li>Email:{loggedInUser.user.userEmail}</li>
              <li>Phone No:{loggedInUser.user.phone_number}</li>
              <li>User Code:{loggedInUser.user.userCode}</li>
              <li>Invite Link: <a style={{fontStyle: 'italic'}} href={`http://member.mshoppingworld.com/register/${loggedInUser.user.userCode}`}>http://member.mshoppingworld.com/register/${loggedInUser.user.userCode}</a></li>
            </ul>
          </CardText>
          <Button variant="outlined" color="primary" onClick={() => props.history.push('ProfileEdit')}>Edit Profile</Button>
        </CardBody>
      </Card>
            {/* <AccountCircleIcon  style={{ fontSize: 60 }} color="primary" />
            <div >
              <h2>{loggedInUser.user.userName}</h2>
              <div className={classes.con}>
                <p>Name:{loggedInUser.user.firstName + ' ' + loggedInUser.user.lastName}</p>

                <p >Email:{loggedInUser.user.userEmail}</p>
                <p>Phone No:{loggedInUser.user.phone_number}</p>
                <p>User Code:{loggedInUser.user.userCode}</p>
                <p>Invite Link: <a style={{fontStyle: 'italic'}} href={`http://member.mshoppingworld.com/register/${loggedInUser.user.userCode}`}>http://member.mshoppingworld.com/register/${loggedInUser.user.userCode}</a></p>
              </div>
              <div>
                <Button variant="outlined" color="primary" onClick={() => props.history.push('ProfileEdit')}>Edit Profile</Button>
              </div>
            </div> */}


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
        <FaWhatsapp style={{ textAlign: 'center', height: '4.5em', width: '2.8em' }} />
      </a>
    </div>
  );
}

export default withRouter(Profile)