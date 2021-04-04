import React from "react";
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
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CollapsibleTable from "./UserCurrentPlans";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../Mshoping.png"

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
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
        <Toolbar>
         <img src={logo} alt="logo" width="25px"/>

          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: "auto" }}
            onClick={() => {
              props.history.push("Login");
            }}
          >
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <List style={{backgroundColor:"#1A5276", color:"white"}}>
            <ListItem
              button
              onClick={() => {
                props.history.push("UserPanel");
              }}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"DASHBOARD"} />
            </ListItem>
          </List>
          <List>
            
              <ListItem button  onClick={() => {
                  props.history.push("ReferedBy");}}>
                <ListItemIcon>
                 <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Refered By"} />
              </ListItem>
          
          </List>
         
          <List>
            
              <ListItem button onClick={() => {
                  props.history.push("MyReferals");}}>
                <ListItemIcon>
                 <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"My Referels"} />
              </ListItem>
          
          </List>
          <List>
            
              <ListItem button onClick={() => {
                  props.history.push("ByPlans");}}>
                <ListItemIcon>
                 <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Buy Plans"} />
              </ListItem>
          
          </List>
          <Divider />
     
            <List>
            
              <ListItem button>
                <ListItemIcon>
                 <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Withdrawls"} />
              </ListItem>
          
          </List>

          <List>
            
              <ListItem button>
                <ListItemIcon>
                 <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"My Profile"} />
              </ListItem>
          
          </List>

          
        </div>
      </Drawer>
      <main className={classes.content}>
         <Toolbar />
                <br />
                <Typography variant="h5" style={{ textAlign: "left" }}>
              Refered By  |  Uzma Khan
              <hr />
              </Typography>
              
        <Grid item >
            <Paper >
          <CollapsibleTable />
          </Paper>
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
