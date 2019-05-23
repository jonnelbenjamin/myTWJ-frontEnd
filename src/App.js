import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Containers/Navbar.js'
import Main from './Containers/Main.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Main/>
        
      </header>
    </div>
  );
}

export default App;
