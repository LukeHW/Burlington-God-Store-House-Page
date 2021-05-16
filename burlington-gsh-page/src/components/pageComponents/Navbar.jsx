// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// styles for Footer.js
const useStyles = makeStyles((theme) => ({
  navbarActive: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    height: 60,
    width: "100%",
    zIndex: 100,
    position: 'fixed'
  },
  navbar: {
    color: "black",
    width: 300,
    marginTop: 'auto',
    marginLeft: '7%',
    fontSize: 'min(5vw, 25px)',
    fontFamily: 'Open Sans',
    fontWeight: 500,
    display: 'block'
  },
  navbarLinks: {
    textDecoration: "none",
    color: "rgba(255, 255, 255)",
    '&:hover': {
      filter: 'contrast(50%)'
    },
    '&:focus': {
      filter: 'contrast(50%)'
    },
  },
  icons: {
    width: 25,
    height: 25,
    marginRight: 15,
    marginLeft: 15,
    padding: 15
  },
  iconsContainer: {
    marginTop: 5,
    marginRight: '7%'
  }
}));

function Navbar() {

  const classes = useStyles();

  return (
    <div className={classes.navbarActive}>
        <Grid container>
            <Grid item xs={6} sm={6} md={5} lg={4} xl={4} align="left">
              <Typography className={classes.navbar} variant="h5" component="h2" gutterBottom>
                  God's Store House
              </Typography>
            </Grid>
            <Grid item xs={0} sm={0} md={2} lg={4} xl={4} align="left"></Grid>
            <Grid item xs={6} sm={6} md={5} lg={4} xl={4} align="right">
              <div className={classes.iconsContainer}>
              <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="WDDPCHKP4W4BG" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
              </div>
            </Grid> 
        </Grid>
    </div>
  );
}

export default Navbar;