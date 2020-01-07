import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Divider from '@material-ui/core/Divider';


const StyledBottomNavigation = styled(BottomNavigation)`
  && {
    background-color: #00cdbe;
    height: 200px;
    color: white;
  }
`;

const StyledImage = styled.img`
  && {
    display: block;
    max-width:50px;
    max-height:50px;
    width: auto;
    height: auto;
  }
`;


export default function BottomNav(){
    return (
      <div>
          <StyledBottomNavigation>
                 <StyledImage src='logo_inverse.png' alt="logo" />
                 <h3> 2019 Eleftheria</h3>
          </StyledBottomNavigation>
      </div>
    );
}
