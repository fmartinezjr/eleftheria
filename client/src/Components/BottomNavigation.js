import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const StyledBottomNavigation = styled(BottomNavigation)`
  && {
    background-color: #00cdbe;
    height: 70px;
  }
`;


export default function BottomNav(){
    return (
      <div>
          <StyledBottomNavigation>
            Bottom Nav
          </StyledBottomNavigation>
      </div>
    );
}
