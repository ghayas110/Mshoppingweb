import React from "react";
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import SideBar from "./SideBar";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Whatsapp from "./WhatsApp";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";


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

const MyPlans = (props) => {
    const classes = useStyles();
    const { userPlans } = useSelector((state) => state);

    const renderPlans = () => {
        // console.log('renderPlans', userPlans);
        if (userPlans.userPlans.length > 0)
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
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="pricing-item-cta">
                                        {<button className="button" onClick={() => { item.paymentStatus !== 'active' ? props.history.push('checkout', { id: item }) : alert('Payment is submited') }} >Upload</button>}
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                );
            })
        else {
            return (
                <div style={{margin: 20}} >
                    <h3>You have not bought any plans yet</h3>
                </div>
            )
        }
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

                <Grid item xs={12}>
                    {renderPlans()}
                </Grid>
                <br />
            </main>
            <Whatsapp />
        </div >
    )
}

export default withRouter(MyPlans)