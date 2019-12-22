import React from "react";
import "./App.css";
import Layout from "./Components/Layout.js";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { TransactionForm } from "./Components/TransactionForm";
import { TransactionTable } from "./Components/TransactionTable";
import { Chart } from "./Components/Chart";
import Grid from "@material-ui/core/Grid";

const StyledGrid = styled(Grid)`
  border: 2px;
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout></Layout>

        <StyledGrid container spacing={3}>
          <StyledGrid xs={12} sm={6}>
            <Paper>
              <TransactionForm></TransactionForm>
              <Chart></Chart>
            </Paper>
          </StyledGrid>
          <StyledGrid xs={12} sm={6}>
            <TransactionTable></TransactionTable>
          </StyledGrid>
        </StyledGrid>
      </div>
    );
  }
}
export default App;
