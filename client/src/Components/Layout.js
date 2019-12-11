import React from 'react'
import Nav from './Nav';
import AppBar from './AppBar';

class Layout extends React.Component {
    render() {
        return (
        <div>
            <AppBar></AppBar>
            <Nav></Nav>
        </div>
        )
      }
}
export default Layout;

