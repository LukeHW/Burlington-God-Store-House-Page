// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Map from '../pageComponents/Map';


// styles for Main.js
const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: ('#eeeeee'),
    fontFamily: 'Open Sans',
    padding: theme.spacing(0)
  },
  spacer: {
    alignItems: "center",
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
    }
   },
   bodyHeader: {
     fontWeight: 600,
     fontSize: 40,
     textAlign: 'left',
     marginLeft: '2%',
     marginTop: '200px',
     marginBottom: '30px'
   },
   bodySubHeader: {
    fontWeight: 400,
    fontSize: 30,
    textAlign: 'left',
    marginLeft: '2%',
    marginBottom: '30px'
   },
   mapContainer: {
       width: '95%',
       height: '90%',
       align: 'center',
       margin: 'auto'
   }
}));

function Location() {

  const classes = useStyles();

  return (
    <div className="App">
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
            <Typography className={classes.bodyHeader} variant="h1" component="h2" align='left'>
                Our Location
            </Typography>
            <Typography className={classes.bodySubHeader} variant="h1" component="h2" align='left'>
                515 Neosho St, Burlington, KS 66839
            </Typography>
        </Grid>
          <Grid item className={classes.spacer} xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className={classes.mapContainer}>
                <Map />
              </div>
          </Grid>
      </Grid>
    </div>
  );
}

export default Location;