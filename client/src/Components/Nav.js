import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import axios from "axios";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false };
  }

  componentDidMount() {
    axios.get(`/isAuthenticated`).then(res => {
      const isAuthenticated = res.data
      this.setState({ isAuthenticated });
    });
  }

  render() {

    const isAuthenticated =this.state.isAuthenticated
    console.log("render: isAuthenticated ", isAuthenticated)


    let loggedInTabs;
    if (isAuthenticated) {
      loggedInTabs = <React.Fragment>
                <Tab label="User Info" href="/userinformation" />
        <Tab label="Logout" href="/logout" />
      </React.Fragment>;
    } else {
      loggedInTabs = <Tab label="Login" href="/login" />;
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
          {loggedInTabs}
        </Tabs>
      </div>
    );
  }
}
export default Nav;
