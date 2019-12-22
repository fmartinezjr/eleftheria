import React from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  padding: 70px;
  border: 10px;
`;

export class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);



    axios.post('/post/transaction', {


     
    });
    console.log("eror");
    
 
  }


  render() {
    return (
      <StyledPaper>
        <Typography variant="h5" component="h3">
          Add Transaction
        </Typography>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="merchant">Merchant</label>
        <input id="merchant" name="merchant" type="text" />
        <br/>
        <label htmlFor="email">Payment Type</label>
        <input id="paymentType" name="paymentType" type="text" />
        <br/>
        <label htmlFor="total">Total</label>
        <input id="total" name="total" type="text" />
        <br/>
        <button>Send data!</button>
      </form>
      </StyledPaper>
    );
  }
}
