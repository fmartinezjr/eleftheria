import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import axios from "axios";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false };
  }

  render() {
    const isAuthenticated = this.state.isAuthenticated;
    let loginTab;
    if (isAuthenticated) {
      loginTab = <Tab label="Logout" href="/auth/logout" />;
    } else {
      loginTab = <Tab label="Login" href="/auth/login" />;
    }
    return (
      <div>
        <Tabs variant="fullWidth" aria-label="nav tabs example">
          <Tab label="Home" href="/" />
          <Tab label="Auto" href="/auto" />
          <Tab label="Investment" href="/investment" />
          <Tab label="Real Estate" href="/realestate" />
          <Tab label="Tax" href="/tax" />
          <Tab label="Retirement" href="/retirement" />
          <Tab label="User Info" href="/userinformation" />
          {loginTab}
        </Tabs>
      </div>
    );
  }
}
export default Nav;
