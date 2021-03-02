// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';

// import components
import bg from '../../testBG.jpeg';

// styles for Main.js
const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "space-between",
    fontFamily: 'Open Sans',
  },
  paperContainer: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  },
  title: {
    fontWeight: 500,
    fontSize: 'min(8vw, 90px)',
    color: "white",
    fontFamily: 'Open Sans',
    textAlign: 'center',
    padding: 5
  },
  greeting: {
    fontWeight: 300,
    fontSize: 'min(5vw, 40px)',
    color: "white",
    fontFamily: 'Open Sans',
    textAlign: "center",
    padding: 10,
  },
  placer: {
    width: "30vmin",
    minWidth: 200
  },
  placerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  centeredItem: {
    bottom: "0px",
    position: "absolute",
    width: "100%",
    textAlign: "center"
  },
  icons: {
    width: 100
  },
  iconsInline: {
    width: 50,
    margin: 5,
    marginLeft: 20
  },
  item: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    marginTop: 100,
    marginBottom: 50
  },
  secondContainer: {
    minHeight: "100vh",
    backgroundColor: ('#222222'),
    fontFamily: 'Open Sans',
    padding: theme.spacing(0)
  },
  hidden: {
    justifyContent: "center",
    display: "flex",
    marginTop: 30,
    fontFamily: 'Open Sans',
    fontSize: 30,
    overflow: 'auto'
  },
  circle: {
    width: "80px",
    height: "80px",
    border: "1px solid #3c2946",
    position: "fixed",
    borderRadius: "50%"
  },
  outsideLinks: {
    textDecoration: "none",
    fontWeight: "normal",
    color: "rgba(255, 255, 255)",
    '&:hover': {
      filter: 'contrast(50%)'
    },
    '&:focus': {
      filter: 'contrast(50%)'
    }
  },
  paperLinks: {
    width: 300,
    height: 400,
    margin: 10,
    transition: 'transform .2s',
    '&:hover': {
      boxShadow: '0 0px 15px 0 rgba(255, 255, 255, 0.9)',
      transform: 'scale(1.1)'
    },
    '&:focus': {
      boxShadow: '0 0px 8px 0 rgba(255, 255, 255, 0.7)',
      transform: 'scale(1.1)'
    },
    marginBottom: 150
  },
  spacer: {
    textAlign: 'center'
  },
  spacerText: {
    fontWeight: 500,
    fontSize: 'min(10vw, 70px)',
    textAlign: 'left',
    color: 'white',
    marginTop: 50,
    padding: 15
  },
  spacerTextBody: {
    fontWeight: 300,
    fontSize: 'min(4vw, 25px)',
    textAlign: 'left',
    color: 'white',
    padding: 15 
  },
  links: {
    paddingTop: 5,
    width: 'inherit',
    transition: 'transform .2s',
    '&:hover': {
      backgroundColor: ('#dddddd')
    },
    '&:focus': {
      filter: 'opacity(0.8)'
    }
  },
  paperTitle: {
    marginTop: 15
  },
  paperLinksContainer: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    height: 'inherit',
    marginTop: 50
  },
  paperBody: {
    padding: 10
  },
  facebookTitle: {
    fontWeight: 500,
    fontSize: 'min(8vw, 60px)',
    color: "white",
    fontFamily: 'Open Sans',
    textAlign: 'center',
    padding: 5,
    marginTop: 50
  }
}));

function Main() {

  const classes = useStyles();

  return (
    <div className="App">
      <Grid className={classes.paperContainer}>
        <div className="AppBG">
          <Grid container className={classes.container}>
            <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} /> 
            <Grid item className={classes.item} xs={12} sm={12} md={5} lg={5} xl={5}>
              <Typography className={classes.title} variant="h1" component="h2" gutterBottom align='center'>
                God&#39;s Store House
              </Typography>
              <Typography className={classes.greeting} variant="h4" component="h2" gutterBottom>
                Burlington, KS
              </Typography>
            </Grid>
            <Hidden mdUp>
              <Grid item xs="auto" sm="auto" />
            </Hidden>
            <Grid item className={classes.placerContainer} xs={12} sm={12} md={5} lg={5} xl={5} align="center">
              <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="WDDPCHKP4W4BG" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </Grid>
            <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
          </Grid>
        </div>
      </Grid>

      <Grid container className={classes.secondContainer}>
        <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2} />
          <Grid item className={classes.spacer} xs={12} sm={12} md={10} lg={8} xl={8}>
              <Typography className={classes.spacerText} variant="h4" component="h2" gutterBottom>
                About Us
              </Typography>
              <Typography className={classes.spacerTextBody} variant="h4" component="h6" gutterBottom>
                At God&#39;s Storehouse in Burlington, Kansas, we serve residents from the five towns in Coffey County who are in need. God&#39;s Storehouse operates under the Coffey County Ministerial Association who is tax exempt. In April of 2020 GSH will celebrate their 15th year of service in Coffey County. Our current address is 515 Neosho Street in Burlington, Kansas. In 2018 our current building was donated to us. We are in the process of making the necessary repairs needed. Our hours are Monday thru Friday, 9am – 12pm, and every Tuesday evening 5pm - 7pm. God has blessed us with 35 to 40 volunteers who operate our store.
              </Typography>
              <Typography className={classes.spacerTextBody} variant="h4" component="h6" gutterBottom>
                We utilize a card system where we record contact and family information. Families can receive food once a month according to our designated guidelines. Along with food we also provide clothing, shoes, and household items that are donated from the various churches, schools, organizations, and individuals from Coffey County. Consumers can shop as often as they choose for these items. Several churches and individuals donate money monthly. We operate solely from donations.
              </Typography>
              <Typography className={classes.spacerTextBody} variant="h4" component="h6" gutterBottom>
                We average around 139 families/390 people per month.
              </Typography>
          </Grid>
          <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2} />

          <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2} />
          <Grid item className={classes.spacer} xs={12} sm={12} md={10} lg={8} xl={8}>
              <Typography className={classes.facebookTitle} variant="h4" component="h2" gutterBottom align='center'>
                Like us on Facebook!
              </Typography>
          </Grid>
          <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2} />

          <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} /> 
          <Grid item xs={12} sm={12} md={10} lg={10} xl={10} align='center'>
            <Paper elevation={5} className={classes.paperLinks} align='center'>
              <div className={classes.paperLinksContainer}>
                <a target='_blank' href='https://www.facebook.com/Gods-Storehouse-101240358583466' rel="noreferrer" className={classes.links}>
                    <img className={classes.icons} src="/facebook.png" alt="facebook logo" />
                </a>
                <Typography variant="h4" component="h2" className={classes.paperTitle} gutterBottom align='center'>
                  Facebook
                </Typography>
                <Typography variant="h6" component="h6" className={classes.paperBody} align='center'>
                  God&#39;s Store House facebook page shares weekly information and updates about the store.
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} /> 
      </Grid>

    </div>
  );
}

export default Main;