/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-return-assign */
// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import PrintMRB from '../prints/PrintMRB';
import PrintCCT from '../prints/PrintCCT';
import PrintLCV from '../prints/PrintLCV';
import PrintHPAF from '../prints/PrintHPAF';
import PrintCCRC from '../prints/PrintCCRC';
import PrintDC from '../prints/PrintDC';
import PrintPAT from '../prints/PrintPAT';

// styles for Resources
const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: ('#eeeeee'),
    fontFamily: 'Open Sans',
    padding: theme.spacing(0)
  },
  spacer: {
    
  },
  spacerText: {
    fontWeight: 500,
    fontSize: 'min(14vw, 70px)',
    textAlign: 'left',
    color: 'black',
    padding: 15,
    marginTop: 150
  },
  spacerTextBody: {
    fontWeight: 300,
    fontSize: 'min(4vw, 25px)',
    textAlign: 'center',
    color: 'black',
    padding: 15 
  },
  links: {
    marginTop: 50,
    fontWeight: 300,
    fontSize: 30,
    textDecoration: "none",
    color: "rgba(255, 255, 255)",
    '&:hover': {
      filter: 'contrast(50%)'
    },
    '&:focus': {
      filter: 'contrast(50%)'
    },
  },
  resources: {
    maxWidth: '400px',
    minWidth: '150px',
    width: '90%',
    padding: 15
  },
  resourcesContainer: {

  },
  resourcesTitle: {
    fontSize: 'min(6vw, 20px)',
    fontWeight: 500,
    color: 'black'
  }
}));

function Resources() {

  const classes = useStyles();

  // keep image in DOM, but hidden
  // <div style={{ display: "none" }}><ComponentToPrint ref={componentRef} /></div>

  return (
    <div className="App">
      <Grid container className={classes.container}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
          <Grid item className={classes.spacer} xs={10} sm={10} md={10} lg={10} xl={10}>
              <Typography className={classes.spacerText} variant="h4" component="h2" gutterBottom>
                Resources
              </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
              <Grid item className={classes.resourcesContainer} xs={12} sm={12} md={6} lg={6} xl={3}>
                <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
                  Mobile Resource Bus
                </Typography>
                <a href='/MRB Info.jpg' target='_blank'>
                  <img className={classes.resources} alt="Mobile Resource Bus Information" border="0" src="/MRB Info.jpg" />
                </a>
                <PrintMRB />
              </Grid>
              <Grid item className={classes.resourcesContainer} xs={12} sm={12} md={6} lg={6} xl={3}>
                <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
                  Coffey County Transportation
                </Typography>
                <a href='/CCT Info.jpg' target='_blank'>
                  <img className={classes.resources} alt="" border="0" src="/CCT Info.jpg" />
                </a>
                <PrintCCT />
              </Grid>
              <Grid item className={classes.resourcesContainer} xs={12} sm={12} md={6} lg={6} xl={3}>
                <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
                  Harvester&#39;s Proxy Acceptance Form
                </Typography>
                <a href='/Harvester&#39;s Info 2.jpg' target='_blank'>
                  <img className={classes.resources} alt="" border="0" src="/Harvester's Info 2.jpg" />
                </a>
                <PrintHPAF />
              </Grid>
              <Grid item className={classes.resourcesContainer} xs={12} sm={12} md={6} lg={6} xl={3}>
                <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
                  LifeCare Van
                </Typography>
                <a href='/LCV Info.jpg' target='_blank'>
                  <img className={classes.resources} alt="" border="0" src="/LCV Info.jpg" />
                </a>
                <PrintLCV />
              </Grid>
              <Grid item className={classes.resourcesContainer} xs={12} sm={12} md={6} lg={6} xl={3}>
                <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
                  Coffey County Resource Council
                </Typography>
                <a href='/CCRC Info.jpg' target='_blank'>
                  <img className={classes.resources} alt="" border="0" src="/CCRC Info.jpg" />
                </a>
                <PrintCCRC />
              </Grid>
              <Grid item className={classes.resourcesContainer} xs={12} sm={12} md={6} lg={6} xl={3}>
                <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
                  Divorce Care
                </Typography>
                <a href='/DC Info.jpg' target='_blank'>
                  <img className={classes.resources} alt="" border="0" src="/DC Info.jpg" />
                </a>
                <PrintDC />
              </Grid>
              <Grid item className={classes.resourcesContainer} xs={12} sm={12} md={6} lg={6} xl={3}>
                <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
                  Parents as Teachers
                </Typography>
                <a href='/PAT Info.jpg' target='_blank'>
                  <img className={classes.resources} alt="" border="0" src="/PAT Info.jpg" />
                </a>
                <PrintPAT />
              </Grid>
      </Grid>
    </div>
  );
}

export default Resources;