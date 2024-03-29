// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import DemoCarousel from '../pageComponents/DemoCarousel';

// styles for Main
const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "space-between",
    height: '100%'
  },
  paperContainer: {
    
  },
  paperContainerOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)"
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
    width: 100,
    height: 100
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
    fontFamily: 'Helvetica',
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
    width: '90vw',
    maxWidth: 300,
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
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 15,
    flexDirection: "column",
    justifyContent: 'center',
    display: "flex",
  },
  spacerTextBody: {
    fontWeight: 400,
    fontSize: 'min(4vw, 20px)',
    textAlign: 'left',
    color: 'white',
    width: '95%',
    padding: 10,
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  spacerTextHeader: {
    fontWeight: 600,
    fontSize: 'min(6vw, 32px)',
    textAlign: 'center',
    color: 'white',
    width: '95%',
    padding: 10
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
    marginTop: 70
  },
  infoContainer: {
    backgroundColor: '#f8f8f8',
    width: '100%',
    height: '100%',
    color: 'rgb(49, 51, 64)'
  },
  infoSpace: {
    fontSize: 'min(8vw, 32px)',
    fontWeight: 400,
    padding: 15,
    marginTop: 20
  },
  infoTitle: {
    fontWeight: 400,
    fontSize: 'min(8vw, 32px)',
    textAlign: 'center',
    padding: 5
  },
  infoBody: {
    fontWeight: 400,
    fontSize: 'min(4vw, 20px)',
    textAlign: 'center',
    width: '95%',
    padding: 10,
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  carousel: {
    backgroundColor: "rgba(55, 55, 55, 0.7)",
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
  },
  navbarSpace: {
    height: 85
  },
  reviews: {
    backgroundColor: '#FFFFFF',
    color: 'rgb(49, 51, 64)'
  },
  reviewsHeader: {
    fontWeight: 400,
    fontSize: 'min(8vw, 32px)',
    textAlign: 'center',
    padding: 5,
    marginTop: 40
  },
  reviewsTitle: {
    fontSize: '24px',
    padding: 10,
    fontWeight: 400
  },
  reviewsIcons: {
    height: '80px',
    width: '80px',
    align: 'center',
    marginTop: '30px'
  },
  reviewsBody: {
    fontSize: '18px',
    padding: 10,
    fontWeight: 300,
    textAlign: 'center',
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  reviewsRating: {
    width: "200px", 
    align: "center",
    marginTop: '-15px'
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
          <Grid item className={classes.navbarSpace} xs={12} sm={12} md={12} lg={12} xl={12} />
          <Grid item className={classes.carousel} xs={12} sm={12} md={12} lg={7} xl={7}>
            <DemoCarousel />
          </Grid>

          <Grid item className={classes.spacerText} xs={12} sm={12} md={12} lg={5} xl={5}>
            <Typography className={classes.spacerTextHeader} variant="h1" component="h1" gutterBottom>
              About Us
            </Typography>
            <Typography className={classes.spacerTextBody} variant="h4" component="h6" gutterBottom>
              At God&#39;s Storehouse in Burlington, Kansas, we serve residents living in Coffey County who find themselves in need. God&#39;s Storehouse operates under the Coffey County Evangelical Ministerial Association. In 2018 our current building was donated to us. In April of 2020 GSH celebrated their 15th year of service in Coffey County. Our current address is 515 Neosho Street in Burlington, Kansas. Our hours are Monday thru Friday, 9am – 12pm, and every Tuesday evening 5pm - 7pm. God has blessed us with 35 to 40 volunteers who operate our store.
            </Typography>
            <Typography className={classes.spacerTextBody} variant="h4" component="h6" gutterBottom>
              We utilize a card system to record contact and family information. Families can receive food once a month according to our designated guidelines. Along with food we also provide: clothing, shoes, bedding, pots, pans, plates, drinking glasses, and silverware that are donated from the various churches, schools, organizations, and individuals from Coffey County. Several churches and individuals donate money monthly. We operate solely from donations.
            </Typography>
            <Typography className={classes.spacerTextBody} variant="h4" component="h6" gutterBottom>
              We average around 139 families/390 people per month.
            </Typography>
          </Grid>
          <Grid item xs="auto" sm="auto" md="auto" lg={1} xl={1} />
          </Grid>
        </div>
        </div>
      </Grid>

      <Grid container className={classes.infoContainer}>
      <Grid item className={classes.infoSpace} xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography className={classes.infoTitle} variant="h1" component="h2" gutterBottom align='center'>
          <strong>Some of what we offer to our community:</strong>
        </Typography>
      </Grid>
        <Grid item xs="auto" sm="auto" md="auto" lg={1} xl={1} />
          <Grid item className={classes.infoSpace} xs={12} sm={12} md={12} lg={3} xl={3}>
              <img className={classes.icons} src="/clothesIcon.png" alt="Clothes" />
              <Typography className={classes.infoTitle} variant="h1" component="h2" gutterBottom align='center'>
                Clothes
              </Typography>
              <Typography className={classes.infoBody} variant="h1" component="h2" gutterBottom align='center'>
                God&#39;s Storehouse offers a wide variety of clothing items to Coffey County Residents who find themselves in need.  Items include infant&#39;s clothing, school age children&#39;s clothing as well as men&#39;s and women&#39;s items.  We have shoes available as well.  Socks, underwear, sheets, blankets, towels and washclothes are available by request.  These items can only be requested once a year as these items are limited.              
              </Typography>
          </Grid>
          <Grid item className={classes.infoSpace} xs={12} sm={12} md={12} lg={4} xl={4}>
              <img className={classes.icons} src="/foodIcon.png" alt="Food and Produce" />
              <Typography className={classes.infoTitle} variant="h1" component="h2" gutterBottom align='center'>
                Food
              </Typography>
              <Typography className={classes.infoBody} variant="h1" component="h2" gutterBottom align='center'>
                God&#39;s Storehouse has food available for any Coffey County Resident who is in need.  We offer breakfast items, lunch & dinner items, canned fruit, misc. items and canned vegetables.  We also have hygeine items available such as toothpaste, toothbrushes, bar soap, dish soap, deodorant, shampoo, toilet paper and laundry detergent; these items are not constant, only while supplies last.
              </Typography>
          </Grid>
          <Grid item className={classes.infoSpace} xs={12} sm={12} md={12} lg={3} xl={3}>
              <img src="/Harvesters-BW-Logo.png" alt="Harvesters" width={145}/>
              <Typography className={classes.infoTitle} variant="h1" component="h2" gutterBottom align='center'>
                Harvesters
              </Typography>
              <Typography className={classes.infoBody} variant="h1" component="h2" gutterBottom align='center'>
                Coffey County hosts Harvesters once a month for families in the area. Find out more <a href='/Harvesters' rel="noreferrer" className={classes.links}>here</a>.  
              </Typography>
          </Grid>
          <Grid item xs="auto" sm="auto" md="auto" lg={1} xl={1} /> 
      </Grid>

      <Grid container className={classes.secondContainer}>
      <Grid item className={classes.reviews} xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography className={classes.reviewsHeader} variant="h1" component="h2" gutterBottom align='center'>
          <strong>What our community is saying about us:</strong>
        </Typography>
      </Grid>
      <Grid item xs="auto" sm="auto" md="auto" lg={1} xl={1} />
        <Grid item className={classes.reviews} xs={12} sm={12} md={12} lg={3} xl={3}>
            <img className={classes.reviewsIcons} src="/reviewsIcon.png" alt="Profile Avatar" />
            <Typography className={classes.reviewsTitle} variant="h1" component="h2" align='center'>
              Ben Scully
            </Typography>
            <img className={classes.reviewsRating} src="/reviewsRating.png" alt="Star Rating" />
            <Typography className={classes.reviewsBody} variant="h1" component="h2" gutterBottom align='center'>
              Very nice people definitely will come back to this town people are really nice here small town with great hospitality!
            </Typography>
        </Grid>
        <Grid item className={classes.reviews} xs={12} sm={12} md={12} lg={4} xl={4}>
            <img className={classes.reviewsIcons} src="/reviewsIcon.png" alt="Profile Avatar" />
            <Typography className={classes.reviewsTitle} variant="h1" component="h2" align='center'>
              Sadie B.
            </Typography>
            <img className={classes.reviewsRating} src="/reviewsRating.png" alt="Star Rating" />
            <Typography className={classes.reviewsBody} variant="h1" component="h2" gutterBottom align='center'>
              Great place lucky to have it in our little town.
            </Typography>
        </Grid>
        <Grid item className={classes.reviews} xs={12} sm={12} md={12} lg={3} xl={3}>
            <img className={classes.reviewsIcons} src="/reviewsIcon.png" alt="Profile Avatar" />
            <Typography className={classes.reviewsTitle} variant="h1" component="h2" align='center'>
              Scarlett Cooper
            </Typography>
            <img className={classes.reviewsRating} src="/reviewsRating.png" alt="Star Rating" />
            <Typography className={classes.reviewsBody} variant="h1" component="h2" gutterBottom align='center'>
              Nice organization that helps the community!
            </Typography>
        </Grid>
        <Grid item xs="auto" sm="auto" md="auto" lg={1} xl={1} />
        
        <Grid item className={classes.spacer} xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography className={classes.facebookTitle} variant="h4" component="h2" gutterBottom align='center'>
              Like us on Facebook!
            </Typography>
        </Grid>

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
                  The God&#39;s Storehouse facebook page shares weekly information and updates about the store.
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