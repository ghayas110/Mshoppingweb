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
  paper: {
    width: theme.spacing(30),
    height: theme.spacing(60),
    background:'white',
  },
  root2: {
    flexGrow: 1,
  },
}));

export default function Plans(props) {
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
          <Typography variant="h6" noWrap>
            User Name
          </Typography>

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
          <List style={{ backgroundColor: "#1A5276", color: "white" }}>
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
            <ListItem
              button
              onClick={() => {
                props.history.push("ReferedBy");
              }}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Refered By"} />
            </ListItem>
          </List>

          <List>
            <ListItem
              button
              onClick={() => {
                props.history.push("MyReferals");
              }}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"My Referels"} />
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"By Plans"} />
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
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper} style={{width:"100%"}}>
            <Typography variant="h3" style={{ textAlign: "center" }}>
             Preview Buy Plan
              <hr />
              <br />
              <Paper elevation={5} className={classes.paper} style={{height:"200px", width:"700px"}}>
                  <Grid item xs ={4}>
              <Typography varient="h4" style={{float:"left", marginLeft:"20px"}}>Plan Name :</Typography>
              <br />
              <Typography varient="h4" style={{float:"left", marginLeft:"20px"}}>Basic Value :</Typography>
              <br />
              <Typography varient="h4" style={{float:"left", marginLeft:"20px"}}>ROI :</Typography>
              <br />
              <Typography varient="h4" style={{float:"left", marginLeft:"20px"}}>Resellable :</Typography>
              </Grid>
              </Paper>
            </Typography>
            
            <Divider />
          </Paper>
          
        </Grid>
      
      
      </main>
    </div>
  );
}
