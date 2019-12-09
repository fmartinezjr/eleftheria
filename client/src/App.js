import React, { useState, useEffect, Component } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const App = props => {
    useEffect(() => {
      axios.get('/api/hello')
        .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('')

  return(
    <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h1 className="App-title">Welcome!</h1>
         </header>
        <p className="App-intro">{state}</p>
      </div>
 )
};

export default App;