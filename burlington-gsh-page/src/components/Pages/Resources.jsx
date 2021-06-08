// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// styles for Main.js
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
    fontSize: 'min(10vw, 70px)',
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
  }
}));

function Resources() {

  const classes = useStyles();

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
      </Grid>
    </div>
  );
}

export default Resources;