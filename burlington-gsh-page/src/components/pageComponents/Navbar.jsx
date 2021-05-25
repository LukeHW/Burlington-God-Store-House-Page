// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react';

// styles for Footer.js
const useStyles = makeStyles((theme) => ({
  navbarActive: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    height: 60,
    width: "100%",
    zIndex: 100,
    position: 'fixed',
    fontFamily: 'Open Sans',
    overflow: 'hidden'
  },
  navbar: {
    color: "black",
    width: 250,
    fontSize: 'min(5vw, 25px)',
    fontWeight: 500,
    marginLeft: '2%'
  },
  navbarCentered: {
    display: 'flex',
    alignItems: 'center'
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
  },
  navbarLogo: {
    marginLeft: '2%'
  },
  menuBox: {
    width: "100%",
    height: 200,
    position: "fixed",
    zIndex: 100
  },
  menuContainerHidden: {
    display: "none"
  },
  menuContainerShown: {
    width: "100%",
    minWidth: '200px',
    height: 200,
    backgroundColor: "rgba(20, 20, 20, 0.75)",
    backdropFilter: "blur(15px)",
    position: "fixed",
    marginTop: 60,
    zIndex: 100,
    right: '0px'
  },
  menuLink: {
    textDecoration: "none",
    fontWeight: "lighter",
    color: "white",
    fontSize: 22,
    textAlign: "right",
    '&:hover': {
      color: 'rgba(220, 220, 220)'
    },
    '&:focus': {
      color: 'rgba(220, 220, 220)'
    }
  },
  menuLinkSpacer: {
    marginRight: "8vw",
    marginTop: "22px",
    '&::after': {
      width: '100%',
      backgroundColor: 'rgba(180, 180, 180)'
    }
  },
  navbarContainer: {
    overflow: 'hidden'
  }
}));

function Navbar() {

  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);

  const [isOpen, setOpen] = useState(false);

  const classes = useStyles();

  const closeMenuHandler = () => {
    setMenu(false);
    setOpen(false);
  }

  // paypal button jsx
  // <form action="https://www.paypal.com/donate" method="post" target="_top">
  //   <input type="hidden" name="hosted_button_id" value="APFAUEJRPFTJW" />
  //   <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
  //   <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
  // </form>

  return (
    <div className={classes.navbarActive}>
        <Grid className={classes.navbarContainer} container>
            <Grid item className={classes.navbarCentered} xs={6} sm={6} md={5} lg={4} xl={4} align="left">
              <img className={classes.navbarLogo} alt="" border="0" src="/logo.png" width="50" height="50" />
              <Typography className={classes.navbar} variant="h5" component="h2">
                  God's Store House
              </Typography>
            </Grid>
            <Grid item xs={0} sm={0} md={2} lg={4} xl={4} align="left"></Grid>
            <Grid item xs={6} sm={6} md={5} lg={4} xl={4} align="right">
              <div className={classes.iconsContainer}>
                <div className={classes.hamburgerContainer}>
                  <Hamburger className={classes.hamburger} toggled={isOpen, menu}  toggle={setOpen, setMenu} size={25} color="#000000" label="Show menu" marginTop="20px" direction="right" />
                </div>
              </div>
            </Grid> 

            <Grid container className={menu ? classes.menuContainerShown : classes.menuContainerHidden}>
                <Grid item className={classes.menuBox} xs={12} sm={12} md={12} lg={12} xl={12} align="right">
                    <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
                        <Link to="/" className={classes.menuLink} onClick={closeMenuHandler}>About</Link>
                    </Typography>
                    <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
                        <Link to="/Contact" className={classes.menuLink} onClick={closeMenuHandler}>Contact</Link>
                    </Typography>
                    <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
                        <Link to="/Location" className={classes.menuLink} onClick={closeMenuHandler}>Location</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default Navbar;