import React from "react";
import "../App.css";
import Paper from "@material-ui/core/Paper";
import axios from "axios";


class App extends React.Component {
  state = {
    persons: [{ firstname: "Unathorized", lastname: "401" }]
  };

  componentDidMount() {
    axios.get(`user/get/user`).then(res => {
      if (res.status === 401) {
        console.log("401");
      } else {
        const userData = res.data;
        this.setState({ userData });
      }
    });
  }

  render() {
    return (
      <div>
        <Paper>
          <h1>User Information</h1>
        </Paper>
        <Paper>
          {this.state.userData}
        </Paper>
      </div>
    );
  }
}
export default App;
