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
    fontFamily: 'Open Sans',
    minHeight: 65,
    height: 'auto',
    maxHeight: 120,
    display: 'flex',
    alignItems: 'center'
  },
  footer: {
    color: "white",
    width: 300,
    fontSize: 15,
    marginBottom: 0
  },
  footer2: {
    color: "white",
    width: 300,
    fontSize: 15,
    marginBottom: 0
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
    justifyContent: 'center',
    height: 30
  },
  icons: {
    width: 25,
    height: 25,
    marginBottom: 5
  },
  iconsContainer: {
    marginTop: 13,
    marginRight: '7%'
  },
  facebookFooter: {
    paddingBottom: '20px'
  },
  facebookWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  },
  gridWrapper: {
    flexGrow: 1
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footerActive}>
      <Grid container className={classes.gridWrapper} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={5} lg={4} xl={4} align="center">
          <div className={classes.facebookWrapper}>
            <Typography className={classes.footer} variant="h5" component="h2" gutterBottom>
              <a target='_blank' href='https://www.linkedin.com/in/lukehw/' rel="noreferrer" className={classes.footerLinks}>
                <span>Created by: LukeHW - 2021</span>
              </a>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={4} xl={4} align="center">
          <div className={classes.facebookWrapper}>
            <Typography className={classes.footer2} variant="h5" component="h2" gutterBottom>
              <a target='_blank' href='https://www.facebook.com/Gods-Storehouse-101240358583466' rel="noreferrer" className={classes.footerLinks}>
                <img className={classes.icons} src="/facebook.png" alt="facebook page" />
                <span>Our Facebook Page</span>
              </a>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;