import React, { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import * as ActionTypes from '../redux/ActionTypes'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listUserPlanss } from '../graphql/queries'

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
  const { loggedInUser, userPlans } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(async () => {
    try {
      const userPlansData = await API.graphql(graphqlOperation(listUserPlanss, { filter: { userId: { eq: loggedInUser.user.id } } }))
      const userPlans = userPlansData.data.listUserPlanss.items
      dispatch({
        type: ActionTypes.ADD_USERPLANS,
        payload: userPlans
      })
    } catch (err) {
      console.log('err', err.errors);
      // if (err.errors.length > 0) {
      //   dispatch({
      //     type: ActionTypes.FAILED_PLANS,
      //     payload: err.errors[0].message
      //   })
      // }
    }
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderPlans = () => {
    return (
      userPlans.userPlans.map((item, index) => {
        return (
          <Grid item xs={12} style={{ marginLeft: "auto", marginRight: "auto" }}>
            <Grid item xs={6} style={{ float: "left" }}>
              <div className="pricing-item">
                <div className="pricing-item-inner">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header center-content">
                      <div className="pricing-item-title">{index + 1}</div>
                      <div className="pricing-item-price">
                        <span className="pricing-item-price-currency" />
                        <span className="pricing-item-price-amount">{item.plan.fee}</span>
                      </div>
                    </div>
                    <div className="pricing-item-features">
                      <ul className="pricing-item-features-list">
                        <li className="is-checked">Term: {item.plan.fee}</li>
                        <li className="is-checked">ROI: {item.plan.ROI}</li>
                        <li className="is-checked">Status {item.planStatus}</li>
                        <li className="is-checked">Payment Status : {item.paymentStatus}</li>
                        <li className="is-checked">Start Date : {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "2-digit" }).format(new Date(Date.parse(item.startingDate)))}</li>
                        {/* <li className="is-checked">Subscription : {item.subscription}</li> */}
                        {/* <li className="is-checked">Levels : {item.levels}</li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta">
                    <a className="button">
                      Upload
                  </a>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        )
      })
    )
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {loggedInUser.user.firstName + ' ' + loggedInUser.user.lastName}
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
            <Grid item xs ={12} sm={12}>
              <Grid item xs={6} sm={4}>
            <Typography variant="h5" style={{ textAlign: "left" }}>
              Current Balance : 
              {/* <hr /> */}
              <Typography variant="h8" style={{ textAlign: "left" }}>
                $52582828
              </Typography>
            </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Typography variant="h5" style={{ textAlign: "left" }}>
              Referred By : 
              {/* <hr /> */}
              <Typography variant="h8" style={{ textAlign: "left" }}>
                Uzma Khan
              </Typography>
            </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Typography variant="h5" style={{ textAlign: "left" }}>
              Referrals : 
              {/* <hr /> */}
              <Typography variant="h8" style={{ textAlign: "left" }}>
                4
              </Typography>
            </Typography>
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

        {renderPlans()}

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
       {/* whatsapp icon */}
       <a
        href="https://wa.me/+18323874234"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}
