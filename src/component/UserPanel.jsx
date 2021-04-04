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
  const [cardData, setCardDatas] = useState({})
  const { loggedInUser, userPlans } = useSelector((state) => state);
  const dispatch = useDispatch();
  const textAreaRef = useRef(null);

  const a = [0, 1, 2]
  useEffect(async () => {
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
      //   dispatch({
      //     type: ActionTypes.FAILED_PLANS,
      //     payload: err.errors[0].message
      //   })
      // }
    }
    getDatas()
  }, []);

  async function getDatas() {
    const childCountData = await API.graphql(graphqlOperation(listUsers, { filter: { parentId: { eq: loggedInUser.user.id } } }))
    const childCount = childCountData.data.listUsers.items
    const countAllChild = childCount.length
    console.log(countAllChild, loggedInUser.user.parentId === 'null');

    if (loggedInUser.user.parentId === 'null')
      setCardDatas({ noParent: true, username: '', countRefferals: countAllChild })
    else {
      const parentData = await API.graphql(graphqlOperation(getUser, { id: loggedInUser.user.parentId }))
      const parent = parentData.data.getUser
      console.log(parent);
      setCardDatas({ noParent: false, username: parent.firstName + ' ' + parent.lastName, userCode: parent.userCode, countRefferals: countAllChild })
    }
    console.log(cardData);

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

  const renderPlans = () => {
    return userPlans.userPlans.map((item, index) => {
      return (
        <Grid item xs={12} style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Grid item xs={6} style={{ float: "left" }}>
            <div className="pricing-item">
              <div className="pricing-item-inner">
                <div className="pricing-item-content">
                  <div className="pricing-item-header center-content">
                    <div className="pricing-item-title"></div>
                    <div className="pricing-item-price">
                      <span className="pricing-item-price-currency" />
                      <span className="pricing-item-price-amount">{item.plan.name}
                      </span>
                    </div>
                  </div>
                  <div className="pricing-item-features">
                    <ul className="pricing-item-features-list">
                      <li className="is-checked">Term: {item.plan.fee}</li>
                      <li className="is-checked">ROI: {item.plan.ROI}</li>
                      <li className="is-checked">Status {item.planStatus}</li>
                      <li className="is-checked">
                        Payment Status : {item.paymentStatus}
                      </li>
                      <li className="is-checked">
                        Start Date :{" "}
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "2-digit",
                        }).format(new Date(Date.parse(item.startingDate)))}
                      </li>
                      {/* <li className="is-checked">Subscription : {item.subscription}</li> */}
                      {/* <li className="is-checked">Levels : {item.levels}</li> */}
                    </ul>
                  </div>
                </div>
                <div className="pricing-item-cta">
                  <button className="button" onClick={() => props.history.push('/checkout', { id: item })} >Upload</button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <div className={classes.root}>
      {/* <div style={{ height: 62, backgroundColor: '#FFFFFF', overflow: "hidden", boxSizing: 'border-box', border: '1px solid #56667F', borderRadius: 4, textAlign: "right", lineHeight: 14, blockSize: 62, fontSize: 12, fontFeatureSettings: "normal", textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #56667F', padding: 0, margin: 0, width: '100%' }}>
        <div style={{ height: 40, padding: 0, margin: 0, width: '100%' }}>
          <iframe src={"https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=no"} width="100%" height="36px" scrolling="auto" marginWidth="0" marginheight="0" frameborder="0" border="0" style={{border:0, margin:0, padding:0}}></iframe>
        </div>
        <div style={{ color: '#FFFFFF', lineHeight: 14, fontWeight: 400 }}
        // style={{color: '#FFFFFF', lineHeight: 14, fontWeight: 400, fontSize: 11, box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif}}
        >
          <a href={"https://coinlib.io"} target="_blank" style={{ fontWeight: 500, color: '#FFFFFF', textDecoration: 'none', fontSize: 11 }}>Cryptocurrency Prices</a> by Coinlib</div>
      </div> */}
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {loggedInUser.user.firstName + " " + loggedInUser.user.lastName}
          </Typography>
          <Link to='/' style={{ marginLeft: "auto" }} >
            <Button
              variant="contained"
              color="secondary"
            >
              LOGOUT
          </Button></Link>
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
            <Link to='/ByPlans'>
              <ListItem
                button
              // onClick={() => {
              //   props.history.push("ByPlans");
              // }}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Buy Plans"} />
              </ListItem>
            </Link>
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


                            <p className={classes.cardCategory} style={{ color: "black", fontFamily: "serif" }}>Referrals</p>
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
                            <h3 className={classes.cardTitle} style={{ color: "black", fontFamily: "serif" }}>$0</h3>
                          </CardHeader>
                          <CardFooter stats>

                          </CardFooter>
                        </Card>
                      </GridItem>
                    </Paper>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
            {renderPlans()}

            {/* {a.map((i) => {
              return(
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="warning" stats icon>
                  <CardIcon color="warning">
                    <Icon>content_copy</Icon>
                  </CardIcon>
                  <p className={classes.cardCategory}>Used Space</p>
                  <h3 style={{ color: "black" }} className={classes.cardTitle}>
                    49/50 <small>GB</small>
                  </h3>
                </CardHeader>
                <CardFooter stats>
                   <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
              </div> 
                </CardFooter>
              </Card>
            </GridItem>
            )})
              } */}



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
              href={'https://mshoppingworld.com/register/' + loggedInUser.user.userCode}
            >{'https://mshoppingworld.com/register/' + loggedInUser.user.userCode}</a>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() =>
                // navigator.clipboard.writeText(`http://mshoppingworld.com/register/${loggedInUser.user.userCode}`)
                navigator.clipboard.writeText(`http://localhost:3000/register/${loggedInUser.user.userCode}`)
              }
              color="primary">
              Copy
            </Button>
          </DialogActions>
        </Dialog>
        <br />

        <Grid item>
          <Paper>
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
        {/* <i class="fa fa-whatsapp" aria-hidden="true"></i> */}
        <FaWhatsapp style={{ textAlign: 'center', height: '4.5em', width: '2.8em' }} />
      </a>
    </div >
  );
}

export default withRouter(UserPanel)