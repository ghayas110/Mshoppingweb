
import { Link, withRouter } from 'react-router-dom'
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
import Sidebar from './SideBar';
import Header from "./Header";
import Profile from "./Profile"
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
function SideBar(props) {
  const classes = useStyles();
  return (
    <div>
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

            <ListItem button onClick={() => {
              props.history.push("ReferedBy");
            }}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Refered By"} />
            </ListItem>

          </List>

          <List>

            <ListItem button onClick={() => {
              props.history.push("MyReferals");
            }}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"My Referrals"} />
            </ListItem>

          </List>
          <List>

            <ListItem button onClick={() => {
              props.history.push("ByPlans");
            }}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Buy Plans"} />
            </ListItem>

          </List>
          <Divider />

          <List>
            <ListItem button onClick={() => {
              props.history.push("MyPlans");
            }}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"My Plans"} />
            </ListItem>
          </List>

          <ListItem button onClick={() => {
            props.history.push("Profile");
          }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"My Profile"} />
          </ListItem>

          <List>

            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Widthdrawls"} />
            </ListItem>

          </List>


        </div>
      </Drawer>
    </div >
  )
}

export default withRouter(SideBar)
