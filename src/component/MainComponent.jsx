import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { configureStore } from '../redux/ConfigureStore';
import { connect } from 'react-redux'

import Register from "./Register";
import Login from "./Login";
import Confirmation from './Confirmation.jsx'
import Home from "./Home";
import ForgetPassword from "./ForgetPassword";
import ForgetPasswordSubmit from "./ForgetPasswordSubmit";
import UserPanel from "./UserPanel";
import ReferedBy from "./ReferedBy";
import MyReferals from "./MyReferals";
import MyPlans from "./MyPlans";
import ByPlans from "./ByPlans";
import Checkout from './Checkout';
import SignupForm from "./SignupForm";
import Profile from "./Profile";
import Signup from "./Signup";
import ProfileEdit from "./ProfileEdit";

const { persistor, store } = configureStore()

const Main = () => {
    return (
        <Switch>
            <Route path="/Checkout" component={Checkout} />
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path='/confirmation' component={Confirmation} />
            <Route path="/forgetPassword" component={ForgetPassword} />
            <Route path="/forgetPasswordsubmit" component={ForgetPasswordSubmit} />
            <Route path="/UserPanel" component={UserPanel} />
            <Route path="/ReferedBy" component={ReferedBy} />
            <Route path="/MyReferals" component={MyReferals} />
            <Route path="/ByPlans" component={ByPlans} />
            <Route path="/MyPlans" component={MyPlans} />
            <Route path="/Profile" component={Profile} />
            <Route path="/ProfileEdit" component={ProfileEdit} />
            <Redirect to='/' />
        </Switch>
    );
}

export default withRouter((connect()(Main)));