import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Nav from "./Nav";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  && {
    background-color: #00cdbe;
    height: 70px;
  }
`;

class AppBarComponent extends React.Component {
  render() {
    return (
      <div>
        <StyledAppBar position="static">
          <Toolbar>
            <Typography variant="h6">eleftheria</Typography>
            <Nav></Nav>
          </Toolbar>
        </StyledAppBar>
      </div>
    );
  }
}
export default AppBarComponent;
