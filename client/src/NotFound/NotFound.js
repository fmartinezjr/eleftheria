import React from 'react'
import Layout from '../Components/Layout.js'


class NotFound extends React.Component {
  render() {
    return (
    <div>
        <Layout></Layout>
        <h1>Page not found on server</h1>
    </div>
    )
  }
}
export default NotFound;