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
    width: '100%'
  },
  contentBody: {
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      color: 'black',
      fontWeight: 300,
      fontSize: 'min(4vw, 28px)',
      maxWidth: 900,
      padding: 20,
      marginTop: 50,
      marginBottom: 40
  },
  contentBodyIntro: {
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'black',
    fontWeight: 300,
    fontSize: 'min(4vw, 28px)',
    maxWidth: 900,
    padding: 20,
    marginTop: 50
  },
  contentBodyList: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'black',
    fontWeight: 300,
    fontSize: '24px',
    paddingLeft: 0,
    lineHeight: 1.5,
    width: 225
  },
  contentPaypal: {
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'black',
    fontWeight: 300,
    fontSize: 'min(4vw, 28px)',
    maxWidth: 900,
    padding: 20,
    marginTop: 50,
    marginBottom: 50
  },
  paypalImage: {
    maxWidth: 400,
    width: '50vw',
    height: 'inherit',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 45
  },
  listContainer: {
      backgroundColor: 'rgba(205, 205, 205, 0.2)'
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
                <Typography className={classes.contentBodyIntro} variant="h4" component="h4">
                    <strong>God&#39;s Storehouse</strong> has been serving Coffey County for over 20 years by providing vital essentials like food and clothing to those who are homeless and those who find themselves in need for various reasons.  We rely on donations from Food Drives held throughout the year by local organizations and churches and from individual donations from people like you.  Whether your donation is food, clothing or monetary; we thank you!  Every gift is appreciated.
                </Typography>
                <Typography className={classes.contentBody} variant="h4" component="h4">
                    Some of these items include:
                </Typography>
            </div>

            <Grid item className={classes.listContainer} xs="auto" sm="auto" md="auto" lg={1} xl={1} />
            <Grid item className={classes.listContainer} xs={12} sm={12} md={4} lg={3} xl={3}>
                <ul className={classes.contentBodyList}>
                    <li>Food</li>
                    <li>Clothing</li>
                    <li>Shoes</li>
                    <li>Blankets</li>
                    <li>Diapers</li>
                    <li>Feminine Products</li>
                    <li>Body Wash</li>
                </ul>
            </Grid>
            <Grid item className={classes.listContainer} xs={12} sm={12} md={4} lg={4} xl={4}>
                <ul className={classes.contentBodyList}>
                    <li>Sheet Sets</li>
                    <li>Bath Towels</li>
                    <li>Washcloths</li>
                    <li>Shampoo</li>
                    <li>Hand Lotion</li>
                    <li>Bar Soap</li>
                </ul>
            </Grid>
            <Grid item className={classes.listContainer} xs={12} sm={12} md={4} lg={3} xl={3}>
                <ul className={classes.contentBodyList}>
                    <li>Deodorant</li>
                    <li>Dish Soap</li>
                    <li>Toilet Paper</li>
                    <li>Paper Towels</li>
                    <li>Shaving Cream</li>
                    <li>Toothpaste</li>
                    <li>Kitchenware</li>
                </ul>
            </Grid>
            <Grid item className={classes.listContainer} xs="auto" sm="auto" md="auto" lg={1} xl={1} />

            <div className={classes.contentContainer}>
                <Typography className={classes.contentBody} variant="h4" component="h4">
                    There are some items that we <strong>DO NOT</strong> accept. Some of these would include:
                </Typography>
            </div>

            <Grid item className={classes.listContainer} xs="auto" sm="auto" md="auto" lg={1} xl={1} />
            <Grid item className={classes.listContainer} xs={12} sm={12} md={4} lg={3} xl={3}>
                <ul className={classes.contentBodyList}>
                    <li>Outdated Food</li>
                    <li>Used Socks</li>
                    <li>Used Underwear</li>
                </ul>
            </Grid>
            <Grid item className={classes.listContainer} xs={12} sm={12} md={4} lg={4} xl={4}>
                <ul className={classes.contentBodyList}>
                    <li>Toys</li>
                    <li>Pillows</li>
                    <li>Knick Knacks</li>
                    <li>Household Items</li>
                </ul>
            </Grid>
            <Grid item className={classes.listContainer} xs={12} sm={12} md={4} lg={3} xl={3}>
                <ul className={classes.contentBodyList}>
                    <li>Books</li>
                    <li>Small Appliances</li>
                    <li>Picture Frames</li>
                </ul>
            </Grid>
            <Grid item className={classes.listContainer} xs="auto" sm="auto" md="auto" lg={1} xl={1} />

            <Grid item xs="auto" sm="auto" md="auto" lg={1} xl={1} />
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                <div className={classes.contentContainer}>
                    <Typography className={classes.contentPaypal} variant="h4" component="h4">
                        Monetary donations can be made online, <a target="blank" href="https://www.paypal.com/donate?hosted_button_id=WDDPCHKP4W4BG&source=url">via PayPal</a>, or brought in directly to the storehouse. Thank you for your contribution!
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
                <a target="blank" href="https://www.paypal.com/donate?hosted_button_id=WDDPCHKP4W4BG&source=url">
                    <img src='/paypal.png' alt='Donate via paypal' className={classes.paypalImage} />
                </a>
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto" lg={1} xl={1} />
        </Grid>
    </div>
  );
}

export default Donate;