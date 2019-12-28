import React from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { TableContainer } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTable = styled(Table)`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }

  border: 5px;
  padding: 5px;
  margin: 5px;
`;

const StyledTableHeader = styled(TableHead)`
  background-color: #00cdbe;
  height: 70px;
`;

const StyledH3 = styled.h3`
  color: white;
  height: 10px;
`;

export default class TransactionTable extends React.Component {
  state = {
    transaction_list: [],
  };

  componentDidMount() {
    axios.get(`api/get/transaction`).then(res => {
      this.setState({ transaction_list: res.data });
    });
  }

  render() {
    return (
      <Paper>
        <TableContainer component={Paper}>
          <StyledTable aria-label="simple table">
            <StyledTableHeader>
              <TableRow>
                <TableCell>
                  <StyledH3>Merchant</StyledH3>
                </TableCell>
                <TableCell align="right">
                  <StyledH3>Payment Type</StyledH3>
                </TableCell>
                <TableCell align="right">
                  <StyledH3>Total</StyledH3>
                </TableCell>
              </TableRow>
            </StyledTableHeader>
            <TableBody>
              {this.state.transaction_list.map(transaction_list => (
                <TableRow key={transaction_list.merchant}>
                  <TableCell component="th" scope="row">
                    {transaction_list.merchant}
                  </TableCell>
                  <TableCell align="right">
                    {transaction_list.payment_type}
                  </TableCell>
                  <TableCell align="right">
                    $ {transaction_list.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
      </Paper>
    );
  }
}
