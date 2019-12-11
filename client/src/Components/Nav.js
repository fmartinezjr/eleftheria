import React from 'react'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class Nav extends React.Component {
    render() {


  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={event => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  
        return (
        <div>
        <Tabs
          variant="fullWidth"
          aria-label="nav tabs example"
        >
          <LinkTab label="Home" href="/" />
          <LinkTab label="Auto" href="/auto"  />
          <LinkTab label="Investment" href="/investment"  />
          <LinkTab label="Real Estate" href="/realestate"  />
          <LinkTab label="Tax" href="/tax"  />
          <LinkTab label="Retirement" href="/retirement"  />
        </Tabs>
        </div>
        )
      }
}
export default Nav;

