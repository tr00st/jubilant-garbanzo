import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


function App() {
  return <>
    <AppBar>
        <Typography variant="h6">Jubilant Garbanzo?</Typography>
    </AppBar>
    <div className="App">
        <Typography>Hello, world!</Typography>
    </div>
  </>;
}

export default App;
