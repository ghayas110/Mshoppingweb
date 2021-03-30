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
            <ListItem button   onClick={() => {
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
            <ListItem button  onClick={() => {
                props.history.push("");
              }}>
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
        <Grid container className={classes.root2} spacing={2}>
        <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
         
            <Grid  item >
            
              <Paper className={classes.paper} >  <div className="pricing-item">
              <div className="pricing-item-inner">
                <div className="pricing-item-content">
                  <div className="pricing-item-header center-content">
                    <div className="pricing-item-title">1</div>
                    <div className="pricing-item-price">
                      <span className="pricing-item-price-currency" />
                      <span className="pricing-item-price-amount">500PKR</span>
                    </div>
                  </div>
                  <div className="pricing-item-features">
                    <ul className="pricing-item-features-list">
                    <li className="is-checked">Term : 24</li>
                      <li className="is-checked">Roi : 3</li>
                      <li className="is-checked">Start Date: 01/01/21</li>
                      <li className="is-checked">End Date: 12/31/25</li>
                      <li className="is-checked">Status : Active</li>
                      <li className="">Subscription : NO</li>
                      <li className="is-checked">Levels : 5</li>
                    </ul>
                  </div>
                </div>
                <div className="pricing-item-cta">
                <a className="button"  onClick={() => {props.history.push("Checkout")}}>
                    Buy Now
                  </a>
                </div>
              </div>
            </div></Paper>
              
            </Grid>
            <Grid  item >
            
            <Paper className={classes.paper} >  <div className="pricing-item">
              <div className="pricing-item-inner">
                <div className="pricing-item-content">
                  <div className="pricing-item-header center-content">
                    <div className="pricing-item-title">2</div>
                    <div className="pricing-item-price">
                      <span className="pricing-item-price-currency" />
                      <span className="pricing-item-price-amount">1000PKR</span>
                    </div>
                  </div>
                  <div className="pricing-item-features">
                    <ul className="pricing-item-features-list">
                    <li className="is-checked">Term : 24</li>
                      <li className="is-checked">Roi : 5</li>
                      <li className="is-checked">Start Date: 01/01/21</li>
                      <li className="is-checked">End Date: 12/31/25</li>
                      <li className="is-checked">Status : Active</li>
                      <li className="is-checked">Subscription : Yes</li>
                      <li className="is-checked">Levels : 10</li>
                    </ul>
                  </div>
                </div>
                <div className="pricing-item-cta">
                <a className="button"  onClick={() => {props.history.push("Checkout")}}>
                    Buy Now
                  </a>
                </div>
              </div>
            </div></Paper>
            
          </Grid>
          <Grid  item >
            
            <Paper className={classes.paper} >  <div className="pricing-item">
              <div className="pricing-item-inner">
                <div className="pricing-item-content">
                  <div className="pricing-item-header center-content">
                    <div className="pricing-item-title">3</div>
                    <div className="pricing-item-price">
                      <span className="pricing-item-price-currency" />
                      <span className="pricing-item-price-amount">50000PKR</span>
                    </div>
                  </div>
                  <div className="pricing-item-features">
                    <ul className="pricing-item-features-list">
                    <li className="is-checked">Term : 24</li>
                      <li className="is-checked">Roi : 10</li>
                      <li className="is-checked">Start Date: 01/01/21</li>
                      <li className="is-checked">End Date: 12/31/25</li>
                      <li className="is-checked">Status : Active</li>
                      <li className="is-checked">Subscription : Yes</li>
                      <li className="is-checked">Levels : 10</li>
                    </ul>
                  </div>
                </div>
                <div className="pricing-item-cta">
                <a className="button"  onClick={() => {props.history.push("Checkout")}}>
                    Buy Now
                  </a>
                </div>
              </div>
            </div></Paper>
            
          </Grid>
          <Grid  item >
            
            <Paper className={classes.paper} >  <div className="pricing-item">
              <div className="pricing-item-inner">
                <div className="pricing-item-content">
                  <div className="pricing-item-header center-content">
                    <div className="pricing-item-title">4</div>
                    <div className="pricing-item-price">
                      <span className="pricing-item-price-currency" />
                      <span className="pricing-item-price-amount">100000PKR</span>
                    </div>
                  </div>
                  <div className="pricing-item-features">
                    <ul className="pricing-item-features-list">
                    <li className="is-checked">Term : 24</li>
                      <li className="is-checked">Roi : 20</li>
                      <li className="is-checked">Start Date: 01/01/21</li>
                      <li className="is-checked">End Date: 12/31/25</li>
                      <li className="is-checked">Status : Active</li>
                      <li className="is-checked">Subscription : Yes</li>
                      <li className="is-checked">Levels : 20</li>
                    </ul>
                  </div>
                </div>
                <div className="pricing-item-cta">
                  <a className="button"  onClick={() => {props.history.push("Checkout")}}>
                    Buy Now
                  </a>
                </div>
              </div>
            </div></Paper>
            
          </Grid>
              
        </Grid>
      </Grid>
      </Grid>

      </main>
    </div>
  );
}
