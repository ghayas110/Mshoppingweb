import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from "react-router-dom";
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
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listUsers } from '../graphql/queries'
import * as ActionTypes from '../redux/ActionTypes'
import { Table } from 'reactstrap'


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

const MyReferals = (props) => {
  const classes = useStyles();
  const { loggedInUser, childs } = useSelector((state) => state);
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  // const [childs, setChilds] = useState({})

  useEffect(async () => {
    try {
      const childsData = await API.graphql(graphqlOperation(listUsers, { filter: { parentId: { eq: loggedInUser.user.id } } }))
      const child = childsData.data.listUsers.items
      dispatch({
        type: ActionTypes.ADD_CHILD,
        payload: child
      })
      console.log(child);
    }
    catch (err) {
      console.log(err)
    }
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderChild = () => {
    if (childs.childs.length > 0)
      return childs.childs.map((item, index) => {
        return (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.userName}</td>
            <td>{item.userCode}</td>
          </tr>
        )
      })
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Header />
      </AppBar>
      <Sidebar />
      <main className={classes.content}>
        <Toolbar />
        <br />
        <Typography variant="h5" style={{ textAlign: "left" }}>
          My Referals
              <hr />
        </Typography>
        <Grid item >
          <Paper >
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>User Code</th>

                </tr>
              </thead>
              <tbody>
                {renderChild()}
              </tbody>
            </Table>
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
        <FaWhatsapp style={{ textAlign: 'center', height: '4.5em', width: '2.8em' }} />
      </a>
    </div>
  );
}

export default withRouter(MyReferals)