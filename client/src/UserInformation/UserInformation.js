import React from "react";
import "../App.css";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import TransactionForm from "../Components/TransactionForm";
import TransactionTable from "../Components/TransactionTable";
import { Chart } from "../Components/Chart";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const StyledGrid = styled(Grid)`
  border: 2px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.fetchData = this.fetchData.bind(this);
    this.reloadData = this.reloadData.bind(this);
  }

  reloadData(state) {
    this.fetchData();
  }

  fetchData() {
    axios.get(`auth/get/transaction`).then(res => {
      this.setState({list: res.data });
    });

  }

  render() {
    return (
      <div>
        <StyledGrid container spacing={3}>
          <StyledGrid sm={6}>
            <Paper>
            <TransactionForm reloadData={this.reloadData}></TransactionForm>
            </Paper>
            <Chart></Chart>
          </StyledGrid>
          <StyledGrid sm={6}>
            <TransactionTable data={this.state.list} fetchData={this.fetchData}></TransactionTable>
          </StyledGrid>
        </StyledGrid>

      </div>
    );
  }
}
export default App;
