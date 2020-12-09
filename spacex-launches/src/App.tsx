import React from 'react';
import './App.scss';

import { LaunchItem } from './components/LaunchItem';

import spacexLogo from './assets/spacex-logo.png';
import launchHome from './assets/img/launch-home.png';


//import refreshIconImage from './assets/icon/refresh.png';
//import selectIconImage from './assets/icon/select.png';
//import sortIconImage from './assets/icon/sort.png';
import RefreshIcon from '@material-ui/icons/Replay';
import SelectIcon from '@material-ui/icons/ArrowDropDown';
import SortIcon from '@material-ui/icons/ImportExport';

import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header>
        <img src={spacexLogo} className="header-bar__logo" alt="logo" />
        <span className="header-bar__label">LAUNCHES</span>

        <Button
          variant="contained"
          //className={classes.button}
          endIcon={<RefreshIcon />}
        >Reload Data</Button>

      </header>

      <div className="main">
        <div className="main__graphic-container">
          <img src={launchHome} className="main__graphic" alt="rocket launch graphic" />
        </div>
        <div className="main__launch-list">
          <div className="main__sorting-controls">
            <Button
              variant="contained"
              //className={classes.button}
              endIcon={<SelectIcon />}
            >Filter by Year</Button>
            <Button
              variant="contained"
              //className={classes.button}
              endIcon={<SortIcon />}
            >Sort Descending</Button>
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
