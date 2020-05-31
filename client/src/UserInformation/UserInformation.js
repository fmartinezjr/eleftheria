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
  state = {
    persons: []
  }


  componentDidMount() {
    axios.get(`auth/get/userinformation`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
            <Paper>
            <h1>User Information</h1>
            </Paper>
            <Paper>
              Before
            <ul>
            { this.state.persons.map(person => <li>{person.firstname} {person.lastname}</li>)}
            </ul>
            After
            </Paper>
      </div>
    );
  }
}
export default App;
