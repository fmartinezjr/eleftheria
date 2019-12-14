import React from "react";
import "./App.css";
import axios from "axios";
import Layout from "./Components/Layout.js";

class App extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`api/get/users`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div>
        <Layout></Layout>
        <ul>
          {this.state.posts.map(posts => (
            <li>{posts.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
