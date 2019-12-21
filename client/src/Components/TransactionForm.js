import React from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";

const StyledPaper = styled(Paper)`
box-sizing: border-box;

  padding: 30px;  
  border: 10px;
`;


export class TransactionForm extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
          newTransaction: {
            merchant: "",
            paymentType: "",
            total: ""
          },

          paymentOptions: ["Debit", "Credit", "Cash"]

      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({merchant: event.target.merchant});
    }
  
    handleSubmit(event) {
      alert('A form was submitted ' + this.state.merchant);
      event.preventDefault();
    }
  
    render() {
      return (


        <StyledPaper>
        <Typography variant="h5" component="h3">
          Add Transaction
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <label>
            Merchant:
            <input type="text" onSubmit={this.handleSubmit} />
          </label>
        
        </form>
      </StyledPaper>



        
      );
    }
  }