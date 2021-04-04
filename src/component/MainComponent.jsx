import { Route, Switch, withRouter } from "react-router-dom";
import { configureStore } from '../redux/ConfigureStore';
import { connect } from 'react-redux'

import Register from "./Register";
import Login from "./Login";
import Confirmation from './Confirmation.jsx'
import Home from "./Home";
import ForgetPassword from "./ForgetPassword";
import UserPanel from "./UserPanel";
import ReferedBy from "./ReferedBy";
import MyReferals from "./MyReferals";
import ByPlans from "./ByPlans";
import Checkout from './Checkout';
import SignupForm from "./SignupForm";

const { persistor, store } = configureStore()

const Main = () => {
    return (
        <Switch>
            <Route path="/Checkout" component={() => <Checkout />} />
            <Route path="/home" component={() => <Home />} />
            <Route exact path="/" component={() => <Login />} />
            <Route path="/register" component={() => <Register />} />
            <Route path='/confirmation' component={() => <Confirmation />} />
            <Route path="/forgetPassword" component={() => <ForgetPassword />} />
            <Route path="/UserPanel" component={() => <UserPanel />} />
            <Route path="/ReferedBy" component={() => <ReferedBy />} />
            <Route path="/MyReferals" component={() => <MyReferals />} />
            <Route path="/ByPlans" component={() => <ByPlans />} />
        </Switch>
    );
}

export default withRouter((connect()(Main)));