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
    minHeight: "100vh",
    backgroundColor: ('#eeeeee'),
    fontFamily: 'Open Sans',
    padding: theme.spacing(0)
  },
  spacer: {
    alignContent: "center"
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
     marginTop: '130px',
     marginBottom: '30px'
   },
   bodySubHeader: {
    fontWeight: 400,
    fontSize: 30,
    textAlign: 'left',
    marginLeft: '2%',
    marginBottom: 1
   },
   mapContainer: {
       width: '80%',
       height: '100%',
       marginLeft: 'auto',
       marginRight: 'auto',
       display: 'block'
   },
   copyButton: {
       margin: 10,
       padding: 10,
   },
   titleContainer: {
       height: '150px'
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
                Our Location
            </Typography>
            <Typography className={classes.bodySubHeader} variant="h1" component="h2" align='left'>
                {address}
                <Tooltip title="Copy Address" placement="right" arrow>
                    <IconButton className={classes.copyButton} aria-label='copy' onClick={() => {navigator.clipboard.writeText(address)}}>
                        <FileCopyOutlinedIcon />
                    </IconButton>
                </Tooltip>
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