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

function Location() {

  const classes = useStyles();

  return (
    <div className="App">
      <Grid container className={classes.container}>
        <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
          <Grid item className={classes.spacer} xs={12} sm={12} md={10} lg={10} xl={10}>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.6673684477432!2d-95.74307288387685!3d38.19439999567677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b920127a3cfa7d%3A0xffb745052076f7fb!2s515%20Neosho%20St%2C%20Burlington%2C%20KS%2066839!5e0!3m2!1sen!2sus!4v1622049361006!5m2!1sen!2sus" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
          </Grid>
          <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
      </Grid>
    </div>
  );
}

export default Location;