import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { configureStore } from './redux/ConfigureStore';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

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
import SignupForm from "./SignupForm";

const { persistor, store } = configureStore()

function App() {
  return (
    <Provider store={store} >
      <PersistGate
        persistor={persistor}
      >
        <BrowserRouter>
          <div className="App">
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
          </div>
          </BrowserRouter>
      </PersistGate>
    </Provider>

  );
}

export default App;