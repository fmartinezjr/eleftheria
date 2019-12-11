import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import Layout from './Components/Layout.js'

const App = props => {
    useEffect(() => {
      axios.get('/api/hello')
        .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('')

  return(
    <div className="App">
         <Layout></Layout>
         <header className="App-header">
           <h1 className="App-title">eleftheria home page!</h1>
           <p className="App-intro">{state}</p>
         </header>
      </div>
 )
};

export default App;