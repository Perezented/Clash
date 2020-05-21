import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <Box />
        </div>
    );
}
export default App;
