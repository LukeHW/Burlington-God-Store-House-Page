// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// styles for Main.js
const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: ('#222222'),
    fontFamily: 'Open Sans',
    padding: theme.spacing(0)
  },
  spacer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  spacerText: {
    fontWeight: 500,
    fontSize: 'min(10vw, 70px)',
    textAlign: 'center',
    color: 'white',
    padding: 15
  },
  spacerTextBody: {
    fontWeight: 300,
    fontSize: 'min(4vw, 25px)',
    textAlign: 'center',
    color: 'white',
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

function ThankYou() {

  const classes = useStyles();

  return (
    <div className="App">
      <Grid container className={classes.container}>
        <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
          <Grid item className={classes.spacer} xs={12} sm={12} md={10} lg={10} xl={10}>
              <Typography className={classes.spacerText} variant="h4" component="h2" gutterBottom>
                Thank you for your donation to God's Store House!
              </Typography>
              <Typography className={classes.spacerTextBody} variant="h4" component="h6" gutterBottom>
                At God&#39;s Store House,  We average around 139 families/390 people per month.
              </Typography>
              <Typography className={classes.spacerTextBody} variant="h4" component="h6" gutterBottom>
                Thanks to people like you, we can continue to contribute positively to our community.
              </Typography>
              <Typography className={classes.spacerTextBody} variant="h4" component="h6" gutterBottom>
                Again, THANK YOU!
              </Typography>
              <a target='_blank' href='https://www.godsstorehousebks.com' rel="noreferrer" className={classes.links}>
                  Back to main page
              </a>
          </Grid>
          <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
      </Grid>
    </div>
  );
}

export default ThankYou;