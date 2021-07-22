// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import bg from '../../harvesters.jpg';

// styles for Harvesters
const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 500,
        fontSize: 50
      },
      headerBackground: {
        width: '100%',
        height: 'min(50vw, 600px)',
        minHeight: '300px',
        marginTop: 85,
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center center',
        backgroundSize: "cover"
      },
      headerContainer: {
        height: 'inherit',
        minHeight: '300px',
        width: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      contentContainer: {
        backgroundColor: '#FFFFFF',
        height: 1300,
        width: '100%'
      },
      contentBody: {
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          color: 'black',
          fontWeight: 300,
          fontSize: 28,
          maxWidth: 900,
          padding: 20,
          marginTop: 50
      },
      contentBodyList: {
        textAlign: 'left',  
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'black',
        fontWeight: 300,
        fontSize: 24,
        maxWidth: 185,
        padding: 20,
        lineHeight: 1.5
      }
}));

function Harvesters() {

  const classes = useStyles();

  return (
    <div>
        <Grid container>
            <div className={classes.headerBackground}>
                <div className={classes.headerContainer}>
                    <Typography className={classes.header} variant="h2" component="h1">
                        Harvesters
                    </Typography>
                </div>
            </div>

            <div className={classes.contentContainer}>
                <Typography className={classes.contentBody} variant="h4" component="h4">
                    At <strong>God&#39;s Storehouse</strong> we strive to give our communtiy items that are necessary and helpful. Harvesters is a way to give out large portions of food to the community in a short amount of time.
                </Typography>
                <Typography className={classes.contentBody} variant="h4" component="h4">
                    Typical food items include:
                </Typography>
            </div>
        </Grid>
    </div>
  );
}

export default Harvesters;