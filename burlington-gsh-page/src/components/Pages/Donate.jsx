// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Tooltip from '@material-ui/core/Tooltip';

// import components
import bg from '../../donations.jpg';
import bg2 from '../../donations2.jpg';

// styles for Donate
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
    backgroundImage: `url(${bg2})`,
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

function Donate() {

  const classes = useStyles();

  return (
    <div>
        <Grid container>
            <div className={classes.headerBackground}>
                <div className={classes.headerContainer}>
                    <Typography className={classes.header} variant="h2" component="h1">
                        Donations
                    </Typography>
                </div>
            </div>

            <div className={classes.contentContainer}>
                <Typography className={classes.contentBody} variant="h4" component="h4">
                    At <strong>God&#39;s Storehouse</strong> we strive to give our communtiy items that are necessary and helpful. We are always thankful for your donations!
                </Typography>
                <Typography className={classes.contentBody} variant="h4" component="h4">
                    Some of these items include:
                </Typography>
                <ul className={classes.contentBodyList}>
                    <li>Food</li>
                    <li>Clothing</li>
                    <li>Shoes</li>
                    <li>Blankets</li>
                    <li>Sheet Sets</li>
                    <li>Bath Towels</li>
                    <li>Washcloths</li>
                    <li>Shampoo</li>
                    <li>Deodorant</li>
                    <li>Dish Soap</li>
                    <li>Toilet Paper</li>
                    <li>Paper Towels</li>
                    <li>Diapers</li>
                    <li>Feminine Products</li>
                    <li>Shaving Cream</li>
                    <li>Toothpaste</li>
                    <li>Hand Lotion</li>
                    <li>Bar Soap</li>
                    <li>Body Wash</li>
                    <li>Kitchenware</li>
                </ul>
            </div>
        </Grid>
    </div>
  );
}

export default Donate;