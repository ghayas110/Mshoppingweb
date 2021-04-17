import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { configureStore } from '../redux/ConfigureStore';
import { connect } from 'react-redux'

import Register from "./Register";
import Login from "./Login";
import Confirmation from './Confirmation.jsx'
import Home from "./Home";
import ForgetPassword from "./ForgetPassword";
import ForgetPasswordSubmit from "./ForgetPasswordSubmit"
import SignupForm from "./SignupForm";
import Profile from "./Profile";
import Signup from "./Signup";
import SideBar from './SideBar'

const { persistor, store } = configureStore()

const Main = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path='/confirmation' component={Confirmation} />
            <Route path="/forgetPassword" component={ForgetPassword} />
            <Route path="/forgetPasswordsubmit" component={ForgetPasswordSubmit} />
            <Route path='/dashboard' component={SideBar} />
            <Redirect to='/' />
        </Switch>
    );
}

export default withRouter((connect()(Main)));