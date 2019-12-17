import React from "react";
import "./App.css";
import axios from "axios";
import Layout from "./Components/Layout.js";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { TableContainer } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class App extends React.Component {
 
  state = {
    transaction_list: []
  };

  componentDidMount() {
    axios.get(`api/get/transaction`).then(res => {
      const transaction_list = res.data;
      this.setState({ transaction_list });
    });
  }

  render() {
 
    return (
      <div>
        <Layout></Layout>
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Merchent</TableCell>
            <TableCell align="right">Payment Type</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.transaction_list.map(transaction_list => (
            <TableRow key={transaction_list.merchant}>
              <TableCell component="th" scope="row">
                {transaction_list.merchant}
              </TableCell>
              <TableCell align="right">{transaction_list.merchant}</TableCell>
              <TableCell align="right">{transaction_list.payment_type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


      </div>
    );
  }
}
export default App;
