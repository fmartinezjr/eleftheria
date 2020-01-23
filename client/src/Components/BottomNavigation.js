import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";


const StyledBottomNavigation = styled(BottomNavigation)`
  && {

  }
`;

const H1 = styled.h1`
  && {
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    font-size: 60px;
    text-align: center;
    margin-top: 50px;
  }
`;

const H2 = styled.h2`
&& {
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
   font-size: 20px;
   text-align: center;
   margin-top: -50px;
}
`;

const FooterDiV = styled.div`
&& {
  border-width: 15px;
  background: #00cdbe; 
  position:relative; 
  bottom:0; 
  height:100%;
  width:100%; 
  height:180px; 
}
`;

export default function BottomNav(){
    return (
      <StyledBottomNavigation>
        <FooterDiV>
          <H1 class="text">eleftheria</H1>
          <H2 class="text2">&copy; 2020</H2>
        </FooterDiV>
      </StyledBottomNavigation>
    );
}
