// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import styles
import './App.css';

// import components
import Main from './components/Pages/Main';
import ThankYou from './components/Pages/ThankYou';
import Location from './components/Pages/Location';
import Harvesters from './components/Pages/Harvesters';
import Donate from './components/Pages/Donate';
import Page from './components/pageComponents/Page';
import Footer from './components/pageComponents/Footer';
import Navbar from './components/pageComponents/Navbar';
import Resources from './components/Pages/Resources';
import ScrollToTop from './components/pageComponents/Scroll';

// styles for App.js
const useStyles = makeStyles(() => ({
  
}));

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Page>
            <Main />
          </Page>
        </Route>
        <Route exact path="/ThankYou">
          <Page>
            <ThankYou />
          </Page>
        </Route>
        <Route exact path="/Location">
          <Page>
            <Location />
          </Page>
        </Route>
        <Route exact path="/Resources">
          <Page>
            <Resources />
          </Page>
        </Route>
        <Route exact path="/Harvesters">
          <Page>
            <Harvesters />
          </Page>
        </Route>
        <Route exact path="/Donate">
          <Page>
            <Donate />
          </Page>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;