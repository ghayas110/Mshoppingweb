import "./App.css";
import Login from "./component/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./component/Register";
import Home from "./component/Home";
import ForgetPassword from "./component/ForgetPassword";
import UserPanel from "./component/UserPanel";
import ReferedBy from "./component/ReferedBy";
import MyReferals from "./component/MyReferals";
import ByPlans from "./component/ByPlans";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotPassword" component={ForgetPassword} />
        <Route path = "/UserPanel" component={UserPanel} />
        <Route path = "/ReferedBy" component={ReferedBy} />
        <Route path = "/MyReferals" component={MyReferals} />
        <Route path = "/ByPlans" component={ByPlans} />
       
      </Router>
    </div>
  );
}

export default App;