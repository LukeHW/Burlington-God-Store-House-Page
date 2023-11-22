// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// styles for Footer.js
const useStyles = makeStyles((theme) => ({
  footerActive: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "100%",
    zIndex: 100,
    fontFamily: 'Open Sans'
  },
  footer: {
    color: "white",
    width: 300,
    marginTop: 20,
    marginLeft: '7%',
    fontSize: 15
  },
  footer2: {
    color: "white",
    width: 300,
    marginTop: 18,
    marginBottom: 18,
    marginLeft: '7%',
    fontSize: 15
  },
  footerLinks: {
    textDecoration: "none",
    color: "rgba(255, 255, 255)",
    '&:hover': {
      filter: 'contrast(50%)'
    },
    '&:focus': {
      filter: 'contrast(50%)'
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icons: {
    width: 25,
    height: 25,
  },
  iconsContainer: {
    marginTop: 13,
    marginRight: '7%'
  },
  facebookFooter: {
    paddingBottom: '20px'
  }
}));

function Footer() {

  const classes = useStyles();

  return (
    <div className={classes.footerActive}>
        <Grid container>
            <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2}/>
            <Grid item xs={12} sm={12} md={5} lg={4} xl={4} align="center">
              <Typography className={classes.footer} variant="h5" component="h2" gutterBottom>
                <a target='_blank' href='https://www.linkedin.com/in/lukehw/' rel="noreferrer" className={classes.footerLinks}>
                  Created by: LukeHW - 2021
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={4} xl={4} align="center">
              <Typography className={classes.footer2} variant="h5" component="h2" gutterBottom>
                <a target='_blank' href='https://www.facebook.com/Gods-Storehouse-101240358583466' rel="noreferrer" className={classes.footerLinks}>
                  <img className={classes.icons} src="/facebook.png" alt="facebook page" />
                  <span>Our Facebook Page</span>
                </a>
              </Typography>
            </Grid> 
            <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2}/>
        </Grid>
    </div>
  );
}

export default Footer;