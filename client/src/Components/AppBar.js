import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Nav from './Nav';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           eleftheria
          </Typography>
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
        </Toolbar>
      </AppBar>
    </div>
  );
}