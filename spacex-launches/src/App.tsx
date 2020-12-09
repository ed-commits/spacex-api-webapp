import React from 'react';
import './App.scss';

import spacexLogo from './assets/spacex-logo.png';
import launchHome from './assets/img/launch-home.png';

import refreshIcon from './assets/icon/refresh.png';
import selectIcon from './assets/icon/select.png';
import sortIcon from './assets/icon/sort.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={spacexLogo} className="header-bar__logo" alt="logo" />
        <span className="header-bar__label">LAUNCHES</span>

        <div className="reload-button">
          Reload Data
            <img className="button-icon" src={refreshIcon} alt="refresh" />
        </div>
      </header>

      <div className="main">
        <div className="main__graphic-container">
          <img src={launchHome} className="main__graphic" alt="rocket launch graphic" />
        </div>
        <div className="main__launch-list">
          <div className="main__sorting-controls">
            <div className="regular-button">
              Filter by Year
            <img className="button-icon" src={selectIcon} alt="select" />
            </div>
            <div className="regular-button">
              Sort Descending
            <img className="button-icon" src={sortIcon} alt="sort" />
            </div>
          </div>
          <ul>
            <li>
              <div className="item">
                <span className="item__number">#1</span>
                <span className="item__name">FalconSat</span>
                <div className="item__subinfo">
                  <span className="item__date">24th Mar 2006</span>
                  <span className="item__ship">Falcon 1</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
