// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Tooltip from '@material-ui/core/Tooltip';

import Map from '../pageComponents/Map';


// styles for Main.js
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: ('#eeeeee'),
    fontFamily: 'Open Sans',
    padding: theme.spacing(0),
    color: 'rgb(49, 51, 64)'
  },
  spacer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    height: 800
  },
  spacerText: {
    fontWeight: 500,
    fontSize: 'min(10vw, 70px)',
    textAlign: 'center',
    padding: 15
  },
  spacerTextBody: {
    fontWeight: 300,
    fontSize: 'min(4vw, 25px)',
    textAlign: 'center',
    padding: 15 
  },
   bodyHeader: {
     fontWeight: 600,
     fontSize: 'min(10vw, 40px)',
     textAlign: 'center',
     marginTop: '165px',
     marginBottom: 'min(4vw, 20px)'
   },
   bodySubHeader: {
    fontWeight: 400,
    fontSize: 'min(4vw, 30px)',
    textAlign: 'center'
   },
   copyButton: {
       margin: 10,
       padding: 10,
   },
   titleContainer: {
       height: '350px'
   },
   mapTextHeader: {
    fontWeight: 500,
    fontSize: 'min(8vw, 32px)',
    textAlign: 'left',
    marginTop: '50px',
    marginBottom: '20px',
    marginLeft: '5vw'
   },
   mapTextBody: {
    fontWeight: 400,
    fontSize: 'min(6vw, 24px)',
    textAlign: 'left',
    marginTop: '30px',
    marginBottom: '50px',
    marginLeft: '5vw'
   },
   addressWrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.1)"
   },
   contactLinks: {
     textDecoration: 'none',
     color: 'rgb(49, 51, 64)',
     fontWeight: 600
   }
}));

function Location() {

  const classes = useStyles();

  const address = "515 Neosho St, Burlington, KS 66839"

  return (
    <div className="App">
      <Grid container className={classes.container}>
        <Grid className={classes.titleContainer} item xs={12} sm={12} md={12} lg={12} xl={12} >
            <Typography className={classes.bodyHeader} variant="h1" component="h2" align='left'>
                Coffey County&#39;s Storehouse
            </Typography>
            <Typography className={classes.bodySubHeader} variant="h1" component="h2" align='left'>
                Located in Burlington, Kansas
            </Typography>
        </Grid>

        <Grid item className={classes.spacer} xs={12} sm={12} md={12} lg={5} xl={5}>
          <Typography className={classes.mapTextHeader} variant="h1" component="h2" align='left'>
            Address
          </Typography>
          <Typography className={classes.mapTextBody} variant="h1" component="h2" align='left'>
            {address}
            <Tooltip title="Copy Address" placement="right" arrow>
              <IconButton className={classes.copyButton} aria-label='copy' onClick={() => {navigator.clipboard.writeText(address)}}>
                  <FileCopyOutlinedIcon />
              </IconButton>
            </Tooltip>  
          </Typography>
          <div className={classes.addressWrapper}>
            <Typography className={classes.mapTextHeader} variant="h1" component="h2" align='left'>
              Storehouse Hours
            </Typography>
            <Typography className={classes.mapTextBody} variant="h1" component="h2" align='left'>
              Mon - Fri <strong>9am - 12pm</strong>
              <br/>
              Tuesday evening <strong>5pm - 7pm</strong>
            </Typography>
          </div>
          <Typography className={classes.mapTextHeader} variant="h1" component="h2" align='left'>
            Contact
          </Typography>
          <Typography className={classes.mapTextBody} variant="h1" component="h2" align='left'>
            Phone <a className={classes.contactLinks} href="tel:6203641459">(620) 364-1459</a>
          </Typography>
        </Grid>
        <Grid item className={classes.spacer} xs={12} sm={12} md={12} lg={7} xl={7}>
          <Map />
        </Grid>

        <Grid item className={classes.titleContainer} xs={12} sm={12} md={12} lg={12} xl={12} />
      </Grid>
    </div>
  );
}

export default Location;