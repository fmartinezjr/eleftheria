import React from "react";
import "./App.css";
import axios from "axios";
import Layout from "./Components/Layout.js";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { TransactionForm } from "./Components/TransactionForm";
import { TransactionTable } from "./Components/TransactionTable";
import Grid from "@material-ui/core/Grid";

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout></Layout>

        <Grid container spacing={3}>
          <Grid xs={12} sm={6}>
            <Paper>
              <TransactionForm></TransactionForm>
            </Paper>
          </Grid>
          <Grid xs={12} sm={6}>
            <TransactionTable></TransactionTable>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default App;
