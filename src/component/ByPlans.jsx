import React, { useState, useEffect } from "react";
import {
  Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
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
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listPlans } from '../graphql/queries'
import * as ActionTypes from '../redux/ActionTypes'
import { createUserPlans } from '../graphql/mutations'
import { FaWhatsapp } from "react-icons/fa";
import logo from "../Mshoping.png"
import Header from "./Header";
import SideBar from "./SideBar";
import  "./ByPlans.css";
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

const BuyPlans = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [plan, setPlan] = useState([])
  const dispatch = useDispatch()
  const { plans, loggedInUser } = useSelector(state => state)

  useEffect(async () => {
    try {
      const plansData = await API.graphql(graphqlOperation(listPlans))
      const Plans = plansData.data.listPlans.items
      dispatch({
        type: ActionTypes.ADD_PLANS,
        payload: Plans
      })
    } catch (err) {
      console.log('err', err.errors[0]);
      if (err.errors.length > 0) {
        dispatch({
          type: ActionTypes.FAILED_PLANS,
          payload: err.errors[0].message
        })
      }
    }
  }, [])

  const renderPlans = () => {
    console.log(plans);
    if (plans.plans.length > 0)
      return (
        plans.plans.map((item, index) => {
          return (

            <Grid item xs={12} s={12} m={4} style={{ marginLeft: "auto", marginRight: "auto" }}>
              <Grid item xs={6} s={12} m={4} style={{ float: "left" }}>

                <div className="pricing-item">
                  <div className="pricing-item-inner">
                    <div className="pricing-item-content">
                      <div className="pricing-item-header center-content">
                        <div className="pricing-item-title"></div>
                        <div className="pricing-item-price">
                          <span className="pricing-item-price-currency" />
                          <span className="pricing-item-price-amount">{item.name}</span>
                        </div>
                      </div>
                      <div className="pricing-item-features">
                        <ul className="pricing-item-features-list">
                          <li className="is-checked">Fees ($): {item.fee}</li>
                          <li className="is-checked">Term (Month): {item.term}</li>
                          <li className="is-checked">ROI: {item.ROI}</li>
                          {/* <li className="is-checked">Start Date : 01/01/21</li> */}
                          {/* <li className="is-checked">Expiry : {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "2-digit" }).format(new Date(Date.parse(item.endDate)))}</li> */}
                          {/* <li className="is-checked">Subscription : {item.subscription}</li> */}
                          {/* <li className="is-checked">Levels : {item.levels}</li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="pricing-item-cta">
                      <a className="button" onClick={() => onBuyClick(item.id)}>
                        Buy Now
                  </a>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          )
        })
      )
    else {
      return (
        <div>{JSON.stringify(plans.errMess)}</div>
      )
    }
  }
  async function onBuyClick(planId) {
    const d = new Date()
    // console.log({ userId: loggedInUser.user.id, planId: planId, planStatus: 'pending', paymentStatus: 'pending', startingDate: d.toISOString() })
    try {
      const newUserPlanData = { userId: loggedInUser.user.id, planId: planId, planStatus: 'pending', paymentStatus: 'pending', startingDate: d.toISOString() }
      const newUserPlan = await API.graphql(graphqlOperation(createUserPlans, { input: newUserPlanData }))
      console.log(newUserPlan);
      alert("Your Package is being Processed Successfully");
      props.history.push("UserPanel");
    }
    catch (err) {
      alert(err.errors)
    }
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
        <Header />
      </AppBar>
      <SideBar />
      <main className={classes.content}>
        <Toolbar />
        <br />
        {renderPlans()}

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


export default withRouter(BuyPlans)