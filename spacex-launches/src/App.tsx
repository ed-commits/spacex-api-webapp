import React from 'react';
import './App.scss';

import { LaunchItem } from './components/LaunchItem';

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
              <LaunchItem number={1}
                name="FalconSat"
                date={new Date("24 Mar 2006")}
                ship={"Falcon 1"}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
