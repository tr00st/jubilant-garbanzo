import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


function App() {
  return <>
    <AppBar>
        <Toolbar>
            <Typography variant="h6">Jubilant Garbanzo?</Typography>
        </Toolbar>
    </AppBar>
    <div className="App">
        <Typography>Hello, world!</Typography>
    </div>
  </>;
}

export default App;
