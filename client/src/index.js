import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Auto from "./Auto/Auto";
import Investment from "./Investment/Investment";
import RealEstate from "./Mortgage_Real_Estate/RealEstate";
import Tax from "./Tax/Tax";
import Login from "./Login/Login";
import Retirement from "./Retirement/Retirement";
import NotFound from "./NotFound/NotFound";
import AppBar from "./Components/AppBar";
import UserInfo from "./UserInformation/UserInformation.js";

import BottomNav from "./Components/BottomNavigation";

import * as serviceWorker from "./serviceWorker";

const routing = (

  <Router>
    <div>
    <AppBar/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/auto" component={Auto} />
        <Route path="/investment" component={Investment} />
        <Route path="/realestate" component={RealEstate} />
        <Route path="/tax" component={Tax} />
        <Route path="/retirement" component={Retirement} />
        <Route path="/userinformation" component={UserInfo} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
      <BottomNav/>
    </div>

  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
