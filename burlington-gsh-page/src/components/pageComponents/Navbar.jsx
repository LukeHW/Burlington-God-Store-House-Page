// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Link } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react';

// styles for Navbar
const useStyles = makeStyles(() => ({
  navbarWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    height: 85,
    width: "100%",
    zIndex: 100,
    position: 'fixed',
    fontFamily: 'Open Sans',
    overflow: 'hidden',
    boxShadow: '0 0 5px 2px #888'
  },
  navbar: {
    color: "black",
    fontSize: 'min(5vw, 25px)',
    fontWeight: 500,
    marginLeft: '1%',
    display: 'inline',
    verticalAlign: 'middle'
  },
  navbarCentered: {
    display: 'flex',
    alignItems: 'center',
    height: 58
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
  iconsContainer: {
    marginTop: 7
  },
  navbarLogo: {
    marginLeft: '2%',
    display: 'inline',
    height: '100%',
    verticalAlign: 'middle'
  },
  menuBox: {
    width: "100%",
    height: 300,
    position: "fixed",
    zIndex: 100
  },
  menuContainerHidden: {
    display: "none"
  },
  menuContainerShown: {
    width: "100%",
    minWidth: '200px',
    height: 360,
    backgroundColor: "rgba(20, 20, 20, 0.75)",
    backdropFilter: "blur(15px)",
    position: "fixed",
    marginTop: 85,
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
    marginRight: 20,
    marginTop: "22px",
    '&::after': {
      width: '100%',
      backgroundColor: 'rgba(180, 180, 180)'
    }
  },
  navbarContainer: {
    overflow: 'hidden'
  },
  homeLink: {
    textDecoration: 'none',
    color: 'black',
    display: 'inline',
    height: '100%',
    verticalAlign: 'middle'
  },
  navbarContact: {
    fontWeight: 400,
    fontSize: 'min(2.4vw, 12px)',
    color: 'white',
    marginRight: 'min(2%, 20px)',
    display: 'inline',
    height: '100%',
    verticalAlign: 'middle'
  },
  navbarContactBar: {
    backgroundColor: "rgba(20, 20, 20, 0.85)",
    width: '100%',
    height: '25px'
  },
  navbarContactLinks: {
    textDecoration: 'none',
    color: 'white',
    padding: 2
  },
  navbarSubheader: {
    color: "black",
    fontSize: 'min(3vw, 18px)',
    fontWeight: 300,
    marginLeft: 'min(2%, 15px)',
    display: 'inline',
    verticalAlign: 'middle',
    marginTop: '5px'
  }
}));

function Navbar() {
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
  // <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
  //     <Link to="/Contact" className={classes.menuLink} onClick={closeMenuHandler}>Contact</Link>
  // </Typography>

  return (
    <div className={classes.navbarWrapper}>
        <Grid className={classes.navbarContainer} container>
        <Grid item className={classes.navbarContactBar} xs={12} sm={12} md={12} lg={12} xl={12} align="right"> 
          <Typography className={classes.navbarContact} variant="h5" component="h2">
            <a className={classes.navbarContactLinks} href="tel:6203641459">(620) 364-1459</a> &#8226; 
            <a className={classes.navbarContactLinks} target="blank" href="https://www.google.com/search?q=515+Neosho+St%2C+Burlington%2C+KS">515 Neosho St, Burlington, KS</a> &#8226; 
            <a className={classes.navbarContactLinks} href = "mailto: godsstorehousebks@gmail.com">godsstorehousebks@gmail.com</a>
          </Typography>
        </Grid>
            <Grid item className={classes.navbarCentered} xs={10} sm={10} md={10} lg={10} xl={10} align="left">
              <a href='/' className={classes.homeLink}>
                <img className={classes.navbarLogo} alt="" border="0" src="/logo.png" width="50" height="50" />
              </a>
              <Typography className={classes.navbar} variant="h5" component="h2">
                <a href='/' className={classes.homeLink}> God&#39;s Storehouse </a>
              </Typography>
              <Hidden xsDown>
                <Typography className={classes.navbarSubheader} variant="h5" component="h2">
                  a ministry of CCEMA
                </Typography>
              </Hidden>
            </Grid>
            <Grid item className={classes.navbarContainer} xs={2} sm={2} md={2} lg={2} xl={2} align="right">
              <div className={classes.iconsContainer}>
                  <Hamburger className={classes.hamburger} toggled={isOpen, menu}  toggle={setOpen, setMenu} size={25} color="#000000" label="Show menu" marginTop="20px" direction="right" />
              </div>
            </Grid> 

            <Grid container className={menu ? classes.menuContainerShown : classes.menuContainerHidden}>
                <Grid item className={classes.menuBox} xs={12} sm={12} md={12} lg={12} xl={12} align="right">
                    <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
                        <Link to="/" className={classes.menuLink} onClick={closeMenuHandler}>Home Page</Link>
                    </Typography>
                    <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
                        <Link to="/Donate" className={classes.menuLink} onClick={closeMenuHandler}>Donations</Link>
                    </Typography>
                    <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
                        <Link to="/Harvesters" className={classes.menuLink} onClick={closeMenuHandler}>Harvesters</Link>
                    </Typography>
                    <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
                        <Link to="/Location" className={classes.menuLink} onClick={closeMenuHandler}>Location</Link>
                    </Typography>
                    <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
                        <Link to="/Resources" className={classes.menuLink} onClick={closeMenuHandler}>Resources</Link>
                    </Typography>
                    <form className={classes.menuLinkSpacer} action="https://www.paypal.com/donate" method="post" target="_top">
                     <input type="hidden" name="hosted_button_id" value="APFAUEJRPFTJW" />
                     <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                     <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default Navbar;