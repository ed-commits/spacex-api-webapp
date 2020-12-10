import React from 'react';
import { useState } from 'react';
import './App.scss';

import { LaunchProps, LaunchItem } from './components/LaunchItem';
import { LaunchList } from './components/LaunchList';
import { SortButton } from './components/SortButton';

import spacexLogo from './assets/spacex-logo.png';
import launchHome from './assets/img/launch-home.png';

import RefreshIcon from '@material-ui/icons/Replay';
import SelectIcon from '@material-ui/icons/ArrowDropDown';
import SortIcon from '@material-ui/icons/ImportExport';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { processSpaceXAPIItem, processSpaceXAPI } from './SpaceXAPI';
import { spaceXTestData } from './SpaceXAPITestData';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    background: "#215184",
    '&:hover': {
      background: "#3c87b3",
    },
    color: '#FFFFFF',
    fontFamily: 'Brandon Grotesque',
    fontSize: '0.8em',
  },
  buttonOnRHS: {
    margin: theme.spacing(0),
    float: 'right',
    borderTopLeftRadius: '15px',
    borderBottomLeftRadius: '15px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
  },
}));

function App() {
  const classes = useStyles();

  const [launchList, setLaunchList] = useState<LaunchProps[]>(processSpaceXAPI(spaceXTestData));

  const [descending, setDescending] = useState(true);

  return (
    <div className="App">
      <header>
        <img src={spacexLogo} className="header-bar__logo" alt="logo" />
        <span className="header-bar__label">LAUNCHES</span>

        <Button
          variant="contained"
          className={clsx(classes.button, classes.buttonOnRHS)}
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
              className={classes.button}
              endIcon={<SelectIcon />}
            >Filter by Year</Button>
            <SortButton descending={descending} setDescending={setDescending} className={classes.button} />
          </div>
          <LaunchList items={launchList} descendingOrder={descending} />
        </div>
      </div>
    </div>
  );
}

export default App;
