// import modules
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import styles
import './App.css';

// import components
import Main from './components/Pages/Main';
import ThankYou from './components/Pages/ThankYou';
import Resources from './components/Pages/Resources';
import Page from './components/pageComponents/Page';
import Footer from './components/pageComponents/Footer';
import Navbar from './components/pageComponents/Navbar';

// styles for App.js
const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Page>
            <Main />
          </Page>
        </Route>
        <Route exact path="/thankyou">
          <Page>
            <ThankYou />
          </Page>
        </Route>
        <Route exact path="/Resources">
          <Page>
            <Resources />
          </Page>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;