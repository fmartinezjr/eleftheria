import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class Nav extends React.Component {
    render() {

        return (
        <div>
        <Tabs
          variant="fullWidth"
          aria-label="nav tabs example"
        >
          <Tab label="Home" href="/" />
          <Tab label="Auto" href="/auto"  />
          <Tab label="Investment" href="/investment"  />
          <Tab label="Real Estate" href="/realestate"  />
          <Tab label="Tax" href="/tax"  />
          <Tab label="Retirement" href="/retirement"  />
        </Tabs>
        </div>
        )
      }
}
export default Nav;

