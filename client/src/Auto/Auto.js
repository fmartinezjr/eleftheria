import React from "react";
import Layout from "../Components/Layout.js";
import axios from "axios";

class Auto extends React.Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }


  render() {
    return (
      <div>
        <Layout></Layout>
        <ul>
        { this.state.posts.map(posts => <li>{posts.name}</li>)}
      </ul>
      </div>
    );
  }
}
export default Auto;
