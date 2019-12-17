import React from "react";
import Layout from "../Components/Layout.js";
import axios from "axios";

class Auto extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <Layout></Layout>

      </div>
    );
  }
}
export default Auto;
