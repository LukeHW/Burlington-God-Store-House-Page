// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';

// import components
import bg from '../../testBG2.jpg';

// styles for Main.js
const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "space-between",
    fontFamily: 'Open Sans',
    height: 1200
  },
  paperContainer: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  paperContainerOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  title: {
    fontWeight: 400,
    fontSize: 'min(8vw, 32px)',
    color: "white",
    textAlign: 'center',
    padding: 5
  },
  greeting: {
    fontWeight: 300,
    fontSize: 'min(5vw, 25px)',
    color: "white",
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
    display: "flex",
    marginBottom: 20
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
    minHeight: "70vh",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    fontFamily: 'Open Sans',
    padding: theme.spacing(0)
  },
  hidden: {
    justifyContent: "center",
    display: "flex",
    marginTop: 30,
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
    transition: 'transform .5s',
    '&:hover': {
      boxShadow: '0 0px 20px 0 rgba(0, 0, 0, 0.5)',
      transform: 'scale(1.1)'
    },
    '&:focus': {
      boxShadow: '0 0px 20px 0 rgba(0, 0, 0, 0.5)',
      transform: 'scale(1.1)'
    },
    marginBottom: 150
  },
  spacer: {
    textAlign: 'center'
  },
  spacerText: {
    fontWeight: 500,
    fontSize: 'min(10vw, 32px)',
    textAlign: 'center',
    color: 'white',
    marginTop: 50,
    padding: 15
  },
  spacerTextBody: {
    fontWeight: 300,
    fontSize: 'min(4vw, 20px)',
    textAlign: 'center',
    color: 'white',
    padding: 25 
  },
  links: {
    paddingTop: 5,
    width: 'inherit',
    transition: 'transform .2s',
    lineHeight: '1.5',
    '&:hover': {
      backgroundColor: ('#f2f2f2')
    },
    '&:focus': {
      filter: 'opacity(0.8)'
    },
    '&:visited': {
      color: '#555555'
    },
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
    fontSize: 'min(8vw, 32px)',
    color: "black",
    textAlign: 'center',
    padding: 5,
    marginTop: '150px'
  },
  infoContainer: {
    backgroundColor: '#f8f8f8',
    width: '100%',
    height: '100%'
  },
  infoSpace: {
    fontSize: 'min(8vw, 32px)',
    color: 'black',
    fontWeight: 400,
    padding: 15,
    marginTop: 20
  },
  infoTitle: {
    fontWeight: 400,
    fontSize: 'min(8vw, 32px)',
    color: "black",
    textAlign: 'center',
    padding: 5
  },
  infoBody: {
    fontWeight: 300,
    fontSize: 'min(4vw, 20px)',
    textAlign: 'center',
    color: 'black',
    padding: 25 
  }
}));

function Main() {

  const classes = useStyles();

  return (
    <div className="App">
      <Grid className={classes.paperContainer}>
      <div className={classes.paperContainerOverlay}>
        <div className="AppBG">
          <Grid container className={classes.container}>
            <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} /> 
            <Grid item className={classes.item} xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography className={classes.title} variant="h1" component="h2" gutterBottom align='center'>
                God&#39;s Store House - About Us
              </Typography>
              <Typography className={classes.greeting} variant="h4" component="h2" gutterBottom>
                Burlington, KS
              </Typography>
            </Grid>
            <Hidden mdUp>
              <Grid item xs="auto" sm="auto" />
            </Hidden>
            <Grid item className={classes.placerContainer} xs={12} sm={12} md={12} lg={12} xl={12} align="center">
            <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2} />
          <Grid item className={classes.spacer} xs={12} sm={12} md={10} lg={8} xl={8}>
              <Typography className={classes.spacerTextBody} variant="h4" component="h6" gutterBottom>
                At God&#39;s Storehouse in Burlington, Kansas, we serve residents living in Coffey County who find themselves in need. God&#39;s Storehouse operates under the Coffey County Ministerial Association. In April of 2020 GSH celebrated their 15th year of service in Coffey County. Our current address is 515 Neosho Street in Burlington, Kansas. In 2018 our current building was donated to us. Our hours are Monday thru Friday, 9am – 12pm, and every Tuesday evening 5pm - 7pm. God has blessed us with 35 to 40 volunteers who operate our store.
              </Typography>
              <Typography className={classes.spacerTextBody} variant="h4" component="h6" gutterBottom>
                We utilize a card system to record contact and family information. Families can receive food once a month according to our designated guidelines. Along with food we also provide: clothing, shoes, bedding, pots, pans, plates, drinking glasses, and silverware that are donated from the various churches, schools, organizations, and individuals from Coffey County. Consumers can shop as often as they choose for these items. Several churches and individuals donate money monthly. We operate solely from donations.
              </Typography>
              <Typography className={classes.spacerTextBody} variant="h4" component="h6" gutterBottom>
                We average around 139 families/390 people per month.
              </Typography>
          </Grid>
          <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2} />
            </Grid>
            <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
          </Grid>
        </div>
        </div>
      </Grid>

      <Grid container className={classes.infoContainer}>
        <Grid item xs="auto" sm="auto" md="auto" lg={1} xl={1} />
          <Grid item className={classes.infoSpace} xs={12} sm={12} md={12} lg={3} xl={3}>
              <img className={classes.icons} src="/clothesIcon.png" alt="Clothes" />
              <Typography className={classes.infoTitle} variant="h1" component="h2" gutterBottom align='center'>
                Clothes
              </Typography>
              <Typography className={classes.infoBody} variant="h1" component="h2" gutterBottom align='center'>
                God&#39;s Storehouse offers a wide variety of clothing items to Coffey County Residents who find themselves in need.  Items include infants clothing, school age children clothing as well as men&#39;s and women&#39;s items.  We have shoes available as well.  Socks, underwear, sheets, blankets, towels and washclothes are available by request.  These items can only be requested once a year as these items are limited.              </Typography>
          </Grid>
          <Grid item className={classes.infoSpace} xs={12} sm={12} md={12} lg={4} xl={4}>
              <img className={classes.icons} src="/foodIcon.png" alt="Food and Produce" />
              <Typography className={classes.infoTitle} variant="h1" component="h2" gutterBottom align='center'>
                Food
              </Typography>
              <Typography className={classes.infoBody} variant="h1" component="h2" gutterBottom align='center'>
                God&#39;s Storehouse has food available for any Coffey County Resident who is in need.  We offer breakfast items, lunch & dinner, canned fruit, misc. items and canned vegetables.  We also have hygeine items available such as toothpaste, toothbrushes, bar soap, dish soap, deodarant, shampoo, toilet paper and laundry detergent; these items are not constant, only when available.
              </Typography>
          </Grid>
          <Grid item className={classes.infoSpace} xs={12} sm={12} md={12} lg={3} xl={3}>
              <img className={classes.icons} src="/infoIcon.png" alt="Information" />
              <Typography className={classes.infoTitle} variant="h1" component="h2" gutterBottom align='center'>
                Information
              </Typography>
              <Typography className={classes.infoBody} variant="h1" component="h2" gutterBottom align='center'>
              There are many agencies in the area who can offer other <a target='_blank' href='http://www.eckan.org/community_centers/coffey/?fbclid=IwAR0faTdVWL4iexGvhf-7yYYN6ocjQe9u8muNOX2XQgynfZp8XbJTtNDJ3kM' rel="noreferrer" className={classes.links}>assistance.</a>  
              </Typography>
          </Grid>
          <Grid item xs="auto" sm="auto" md="auto" lg={1} xl={1} /> 
      </Grid>

      <Grid container className={classes.secondContainer}>
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