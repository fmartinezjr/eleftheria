import React from "react";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { TableContainer } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Button from '@material-ui/core/Button';

const StyledPaper = styled(Paper)`
  padding: 5px;
  border: 5px;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #00cdbe;
    margin: 10px;
    color: white;

  }
`;

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
    transaction_list: []
  }


      componentDidMount() {
          this.setState({
            transaction_list: this.props.data
          });
      }
    
  render() {
    console.log("one");
    console.log(this.props);
    console.log("rhree");
    console.log(this.transaction_list);
    console.log("rhree");
    console.log(this.props.transaction_list);
    console.log("rhree");
    console.log(this.state.transaction_list);

    return (
      <StyledPaper>

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
                <TableCell align="right">
                <StyledH3>Edit/Delete</StyledH3>
                </TableCell>
              </TableRow>
            </StyledTableHeader>
            <TableBody>
              {this.state.transaction_list.map(transaction_list => (
                <TableRow key={transaction_list.merchant}>
                  <TableCell component="th" scope="row">
                    {transaction_list.merchant}
                  </TableCell>
                  <TableCell align="left">
                    {transaction_list.payment_type}
                  </TableCell>
                  <TableCell align="right">
                    $ {transaction_list.amount}
                  </TableCell>
                  <TableCell align="right">
                    <EditOutlinedIcon/>
                    <DeleteOutlineIcon/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
      </StyledPaper>
    );
  }
}
