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
  constructor() {
    super();
    this.state = {
      merchant: '',
      paymentType: '',
      total: '',
    };
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { merchant, paymentType, total } = this.state;
    console.log("onsubmit");
    console.log(merchant);
    console.log(paymentType);
    axios.post('/post/transaction', { merchant, paymentType, total })
      .then((result) => {
        console.log("done");
      });
  }


  render() {
    const { merchant, paymentType, total  } = this.state;
    return (
      <StyledPaper>
        <Typography variant="h5" component="h3">
          Add Transaction
        </Typography>
        <form onSubmit={this.onSubmit}>
        <label htmlFor="merchant">Merchant</label>
        <input id="merchant" name="merchant" type="text" value={merchant} onChange={this.onChange}/>
        <br/>
        <label htmlFor="email">Payment Type</label>
        <input id="paymentType" name="paymentType" type="text" value={paymentType} onChange={this.onChange}/>
        <br/>
        <label htmlFor="total">Total</label>
        <input id="total" name="total" type="text" value={total} onChange={this.onChange}/>
        <br/>
        <button type="submit">Submit</button>
      </form>
      </StyledPaper>
    );
  }
}
