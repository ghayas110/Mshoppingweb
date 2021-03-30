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
            
              <ListItem button  onClick={() => {
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
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              INVITE MEMBERS
            </Button>
            <Typography variant="h5" style={{ textAlign: "left" }}>
              Current Money
              <hr />
              <Typography variant="h8" style={{ textAlign: "left" }}>
                $52582828
              </Typography>
            </Typography>
            
            <Divider />
          </Paper>
          
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To invite Members Enter Name And Contact Number
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="Text"
              fullWidth
            />
         
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Sent
            </Button>
          </DialogActions>
        </Dialog>
                <br />
        <Grid item >
            <Paper >
            <br />
                <Typography variant="h5" style={{ textAlign: "center" }}>
              Current Users
              <hr />
              </Typography>
          <CollapsibleTable />
          </Paper>
        </Grid>
      </main>
    </div>
  );
}
