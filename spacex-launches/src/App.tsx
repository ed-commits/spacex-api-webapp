import React from 'react';
import spacexLogo from './assets/spacex-logo.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spacexLogo} className="header-bar__logo" alt="logo" />
        <span className="header-bar__label">LAUNCHES</span>
      </header>
    </div>
  );
}

export default App;
