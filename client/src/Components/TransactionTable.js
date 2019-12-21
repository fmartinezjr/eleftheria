import React from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
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
  border: 1px solid #ddd;
`;

const StyledTableHeader = styled(TableHead)`
  background-color: #00cdbe;
  color: white;
`;


export class TransactionTable extends React.Component {
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


        <Paper>
              <TableContainer component={Paper}>
                <StyledTable aria-label="simple table">
                  <StyledTableHeader>
                    <TableRow>
                      <TableCell>Merchant</TableCell>
                      <TableCell align="right">Payment Type</TableCell>
                      <TableCell align="right">Total</TableCell>
                    </TableRow>
                  </StyledTableHeader>
                  <TableBody>
                    {this.state.transaction_list.map(transaction_list => (
                      <TableRow key={transaction_list.merchant}>
                        <TableCell component="th" scope="row">
                          {transaction_list.merchant}
                        </TableCell>
                        <TableCell align="right">
                          {transaction_list.merchant}
                        </TableCell>
                        <TableCell align="right">
                          {transaction_list.payment_type}
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