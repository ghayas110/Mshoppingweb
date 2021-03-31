import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { configureStore } from './redux/ConfigureStore';
import { BrowserRouter } from 'react-router-dom'
 import { Provider } from 'react-redux'

import Register from "./component/Register";
import Login from "./component/Login";
import Confirmation from './component/Confirmation.jsx'
import Home from "./component/Home";
import ForgetPassword from "./component/ForgetPassword";
import UserPanel from "./component/UserPanel";
import ReferedBy from "./component/ReferedBy";
import MyReferals from "./component/MyReferals";
import ByPlans from "./component/ByPlans";
import Checkout from './component/Checkout';

const store = configureStore()

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div className="App">
          <Router>
            <Route path="/Checkout" component={Checkout} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path='/confirmation' component={Confirmation} />
            <Route path="/forgotPassword" component={ForgetPassword} />
            <Route path="/UserPanel" component={UserPanel} />
            <Route path="/ReferedBy" component={ReferedBy} />
            <Route path="/MyReferals" component={MyReferals} />
            <Route path="/ByPlans" component={ByPlans} />

          </Router>
        </div>
      </BrowserRouter>
    </Provider>

  );
}

export default App;