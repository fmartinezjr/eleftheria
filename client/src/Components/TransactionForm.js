import React from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Button from '@material-ui/core/Button';

const StyledPaper = styled(Paper)`
  padding: 70px;
  border: 10px;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #00cdbe;
    margin: 10px;
    color: white;

  }
`;

export default class TransactionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      merchant: '',
      paymentType: '',
      total: '',
    };
  }

  //what comes in from input gets assigned to the stae parameter. handles the changes
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (e) => {
    //stop browser from reloading the page
    e.preventDefault();

    // new object
    const data = {
      merchant: this.state.merchant,
      paymentType: this.state.paymentType,
      total: this.state.total
    };

    //using axios to post to my express api. the object "data" is the payload
    axios.post('api/post/transaction', { data },  {params: {
      merchant: data.merchant,
      payment_type: data.paymentType,
      amount: data.total,
    }})
      .then(res => {
        console.log(res);
        console.log(res.data);
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
        <label>Merchant
        <input id="merchant" name="merchant" placeholder="Merchant" type="text" value={merchant} onChange={this.onChange}/>
        </label>

        <br/>
        <label>Payment Type
        <input id="paymentType" name="paymentType" placeholder="Payment Type" type="text" value={paymentType} onChange={this.onChange}/>
        </label>

        <br/>
        <label>Total
        <input id="total" name="total" type="text" placeholder="Total" value={total} onChange={this.onChange}/>
        </label>

        <br/>
        <StyledButton  variant="contained" type="submit">Submit</StyledButton>
      </form>
      </StyledPaper>
    );
  }
}
