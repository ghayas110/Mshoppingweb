import React, { useState } from "react";
import { useSelector } from 'react-redux'
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
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import StepLabel from '@material-ui/core/StepLabel';
import { FaWhatsapp } from "react-icons/fa";
import { updateUserPlans } from '../graphql/mutations'
import Amplify, { API, graphqlOperation, Storage } from 'aws-amplify'
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
  paper: {
    width: theme.spacing(30),
    height: theme.spacing(60),
    background: 'white',
  },
  root2: {
    flexGrow: 1,
  },
}));

export default function Plans(props) {
  const classes = useStyles();
  const { loggedInUser, userPlans } = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  const [userPlanID, setUserPlanID] = useState(props.location.state.id)
  const [data, setData] = useState({
    transactionCode: '',
    slipImage: '',
    check_transactionCodeChange: false,
    check_slipImageChange: false
  })


  async function handleSubmission() {
    // console.log(userPlanID, data.slipImage)
    await Storage.put(`${loggedInUser.user.id}/plan-${userPlanID.id}/${data.slipImage.name}`, data.slipImage, {
      level: 'private'
    })
      .then(async (res) => {
        console.log(res, userPlanID.id)
        const updatedPlan = { id: userPlanID.id }
        const updatePlan = await API.graphql(graphqlOperation(updateUserPlans, { input: updatedPlan, condition: { paymentStatus: 'active' } }))
        console.log(updatePlan)
      })
      .catch((err) => {
        console.error(err.errors)
        // alert(err)
      })
  }

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
              <ListItemText primary={"My Referrals"} />
            </ListItem>
          </List>
          <List>
            <ListItem button>
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
          <Paper elevation={0} className={classes.paper} style={{ width: "100%", height: "100px" }}>
            <Typography variant="h3" style={{ textAlign: "center" }}>
              Preview Buy Plan
              <hr />
              {/* <br /> */}
            </Typography>
          </Paper>
        </Grid>


        <Grid container className={classes.root2} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={-5}>

              <Grid item >

                <Paper className={classes.paper} style={{ height: "350px" }} >
                  <div className="pricing-item">
                    <div className="pricing-item-inner">
                      <div className="pricing-item-content">
                        <div className="pricing-item-header center-content">
                          <div className="pricing-item-title"></div>
                          <div className="pricing-item-price">
                            <span className="pricing-item-price-currency" />
                            <span className="pricing-item-price-amount"></span>
                          </div>
                        </div>
                        <div className="pricing-item-features">
                          <ul className="pricing-item-features-list">
                            <li className="">Plan Name = {userPlanID.plan.name}</li>
                            <li className="">Basic Value = {userPlanID.plan.fee}</li>
                            <li className="">ROI = {userPlanID.plan.fee}</li>
                            <li className="">Resellable = {userPlanID.plan.subscription}</li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </Paper>

              </Grid>
              <Grid item >

                {/* <Paper className={classes.paper} style={{ height: "350px" }}>
                  <div className="pricing-item">
                    <div className="pricing-item-inner">
                      <div className="pricing-item-content">
                        <div className="pricing-item-header center-content">
                          <div className="pricing-item-title"></div>
                          <div className="pricing-item-price">
                            <span className="pricing-item-price-currency" />
                            <span className="pricing-item-price-amount"></span>
                          </div>
                        </div>
                        <div className="pricing-item-features">
                          <ul className="pricing-item-features-list">
                            <li className="">Plan Name* </li>
                            <li className="">Basic Value* </li>
                            <li className="">ROI* </li>
                            <li className="">Resellable* </li>

                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </Paper> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={4} sm={4}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Enter Serial # of Deposit Slip"
                autoFocus
                onChange={(e) => {
                  if (e.target.value.length >= 8) {
                    setData({
                      ...data,
                      transactionCode: e.target.value,
                      check_transactionCodeChange: true,
                    });
                  } else {
                    setData({
                      ...data,
                      transactionCode: e.target.value,
                      check_transactionCodeChange: false,
                    });
                  }
                }
                }
              />
            </Grid>
            <br />
            <Grid item xs={4} sm={4}>
              <div className={classes.root}>

                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple={false}
                  type="file"
                  onChange={(e) => {
                    console.log(e.target.files[0])
                    if (e.target.files.length > 0) {
                      setData({
                        ...data,
                        slipImage: e.target.files[0],
                        check_slipImageChange: true,
                      });
                    } else {
                      setData({
                        ...data,
                        transactionCode: e.target.files[0],
                        check_slipImageChange: false,
                      });
                    }
                  }
                  }
                />
                <Button
                  variant="contained"
                  color="Primary"
                  style={{ marginLeft: "auto" }}
                  onClick={() => { if (userPlanID.paymentStatus !== 'active') handleSubmission() }}
                >
                  SUBMIT
          </Button>


              </div>
            </Grid>
          </Grid>

        </form>
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
