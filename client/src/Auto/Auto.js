import React from "react";
import Layout from "../Components/Layout.js";
import Typography from "@material-ui/core/Typography";

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
        <Typography variant="h5" component="h3">
        This is the Auto Page. More content comming soon!
        </Typography>
      </div>
    );
  }
}
export default Auto;
