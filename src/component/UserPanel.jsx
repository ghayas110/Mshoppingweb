import React, { useEffect, useState, useRef } from "react";
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
import logo from "../Mshoping.png"
// import table from './Table';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CollapsibleTable from "./UserCurrentPlans";
import { useSelector, useDispatch } from "react-redux";
import * as ActionTypes from "../redux/ActionTypes";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listUserPlanss, listUsers, getUser } from "../graphql/queries";
import { listUserPlans } from "../graphql/customQueries";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";

// @material-ui/icons
import GridItem from "../component/Grid/GridItem";
import Card from "../component/Card/Card.js";
import CardHeader from "../component/Card/CardHeader.js";
import CardIcon from "../component/Card/CardIcon.js";
import Icon from "@material-ui/core/Icon";
import { FaWhatsapp } from "react-icons/fa";
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";


import Warning from "@material-ui/icons/Warning";
// import Danger from "../component/Typography/Danger.js";
import CardFooter from "../component/Card/CardFooter.js";

import Danger from "../component/Typography/Danger.js";
import { card } from "../assets/jss/material-dashboard-react";
import Login from "./Login";
import Header from "./Header";
import SideBar from "./SideBar";

// import CardBody from "../components/Card/CardBody.js";

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

const UserPanel = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [cardData, setCardDatas] = useState({ noParent: '', username: '', countRefferals: '', fees: '' })
  const { loggedInUser, userPlans } = useSelector((state) => state);
  const dispatch = useDispatch();
  const textAreaRef = useRef(null);

  const a = [0, 1, 2]
  useEffect(async () => {
    getDatas()
    try {
      const userPlansData = await API.graphql(
        graphqlOperation(listUserPlanss, {
          filter: { userId: { eq: loggedInUser.user.id } },
        })
      );
      const userPlans = userPlansData.data.listUserPlanss.items;
      dispatch({
        type: ActionTypes.ADD_USERPLANS,
        payload: userPlans,
      });
    } catch (err) {
      console.log("err", err.errors);
      // if (err.errors.length > 0) {
      dispatch({
        type: ActionTypes.FAILED_PLANS,
        payload: err.errors
      })
    }
  }, []);

  async function getDatas() {
    const childCountData = await API.graphql(graphqlOperation(listUsers, { filter: { parentId: { eq: loggedInUser.user.id } } }))
    const childCount = childCountData.data.listUsers.items
    const countAllChild = childCount.length

    const getFeesData = await API.graphql(graphqlOperation(listUserPlanss, { filter: { userId: { eq: loggedInUser.user.id } } }))
    const getFees = getFeesData.data.listUserPlanss.items
    let fees = 0
    if (getFees.length > 0)
      for (var i = 0; i < getFees.length; i++) {
        fees += parseFloat(getFees[i].plan.fee)
      }
    // console.log(countAllChild, loggedInUser.user.parentId === 'null');
    if (loggedInUser.user.parentId === 'null') {
      setCardDatas({ noParent: true, username: '', countRefferals: countAllChild, fees: fees })
    }
    else {
      const parentData = await API.graphql(graphqlOperation(getUser, { id: loggedInUser.user.parentId }))
      const parent = parentData.data.getUser
      // console.log(parent);
      setCardDatas({ noParent: false, username: loggedInUser.user.username, userCode: parent.userCode, countRefferals: countAllChild, fees: fees })
    }
    // console.log(cardData)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleCopy = (e) => {
  //   textAreaRef.current.select();
  //   console.log(textAreaRef.current.value);
  //   document.execCommand('copy');
  //   e.target.focus();
  //   console.log(navigator.clipboard.readText().then(clipText => console.log(clipText)))
  //   console.log('sucess!');
  //   // setCopySuccess('Copied!');
  // }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Header />
      </AppBar>
      <SideBar />
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
            <Grid container className={classes.root2} spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={10}>

                  <Grid item >
                    <Paper elevation={5}>
                      <GridItem xs={12} sm={12} md={12} style={{ width: "250px", height: "165px" }}>
                        <Card>
                          <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                              <Accessibility />
                            </CardIcon>
                            <p className={classes.cardCategory} style={{ color: "black", fontFamily: "serif" }}>Referred By</p>
                            <h3 className={classes.cardTitle} style={{ color: "black", fontFamily: "serif" }}>
                              {cardData.noParent === true ? 'No Parent' : cardData.username}
                            </h3>
                          </CardHeader>
                          <CardFooter stats>

                          </CardFooter>
                        </Card>
                      </GridItem>
                    </Paper>
                  </Grid>

                  <Grid item >
                    <Paper elevation={5}>
                      <GridItem xs={12} sm={12} md={12} style={{ width: "250px", height: "165px" }}>
                        <Card>
                          <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                              <Accessibility />
                            </CardIcon>


                            <p className={classes.cardCategory} style={{ color: "black", fontFamily: "serif" }}>Our Team</p>
                            <h3 className={classes.cardTitle} style={{ color: "black", fontFamily: "serif" }}>{cardData.countRefferals}</h3>
                          </CardHeader>
                          <CardFooter stats>

                          </CardFooter>
                        </Card>
                      </GridItem>
                    </Paper>
                  </Grid>

                  <Grid item >
                    <Paper elevation={5}>

                      <GridItem xs={12} sm={12} md={12} style={{ width: "250px", height: "165px" }}>
                        <Card>
                          <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                              <Store />
                            </CardIcon>
                            <p className={classes.cardCategory} style={{ color: "black", fontFamily: "serif" }}>Current Balance</p>
                            <h3 className={classes.cardTitle} style={{ color: "black", fontFamily: "serif" }}>Rs. {cardData.fees}</h3>
                          </CardHeader>
                          <CardFooter stats>

                          </CardFooter>
                        </Card>
                      </GridItem>
                    </Paper>
                  </Grid>
                </Grid>
                {/* {renderPlans()} */}
              </Grid>
            </Grid>

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
              To invite Members Share the Link
            </DialogContentText>
            <a
              autoFocus
              // margin="dense"
              // id="name"
              disabled
              // type="Text"
              fullWidth
              ref={textAreaRef}
              // value='https://mshoppingworld.com/register'
              href={'http://member.mshoppingworld.com/register/' + loggedInUser.user.userCode}
            >{'http://member.mshoppingworld.com/register/' + loggedInUser.user.userCode}</a>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() =>
                // navigator.clipboard.writeText(`http://mshoppingworld.com/register/${loggedInUser.user.userCode}`)
                navigator.clipboard.writeText(`http://member.mshoppingworld.com/register/${loggedInUser.user.userCode}`)
              }
              color="primary">
              Copy
            </Button>
          </DialogActions>
        </Dialog>
        <br />
      </main>
      <a
        href="https://wa.me/+447949549043"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <i class="fa fa-whatsapp" aria-hidden="true"></i> */}
        <FaWhatsapp style={{ textAlign: 'center', height: '4.5em', width: '2.8em' }} />
      </a>
    </div >
  );
}

export default withRouter(UserPanel)