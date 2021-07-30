// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Tooltip from '@material-ui/core/Tooltip';

import Map from '../pageComponents/Map';

import bg from '../../Location_BG.jpg';

// styles for Location
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: ('#eeeeee'),
    fontFamily: 'Open Sans',
    padding: theme.spacing(0),
    color: 'rgb(49, 51, 64)'
  },
  spacer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    height: 810
  },
  spacerText: {
    fontWeight: 500,
    fontSize: 'min(10vw, 70px)',
    textAlign: 'center',
    padding: 15
  },
  spacerTextBody: {
    fontWeight: 300,
    fontSize: 'min(4vw, 25px)',
    textAlign: 'center',
    padding: 15 
  },
   bodyHeader: {
     fontWeight: 600,
     fontSize: 'min(10vw, 40px)',
     textAlign: 'center',
     marginTop: '165px',
     marginBottom: 'min(4vw, 20px)'
   },
   bodySubHeader: {
    fontWeight: 400,
    fontSize: 'min(4vw, 30px)',
    textAlign: 'center'
   },
   copyButton: {
    marginLeft: 10,
    marginBottom: 5
   },
   titleContainer: {
       height: '350px'
   },
   mapTextHeader: {
    fontWeight: 500,
    fontSize: 'min(8vw, 32px)',
    textAlign: 'left',
    marginTop: '70px',
    marginBottom: '10px',
    marginLeft: '5vw'
   },
   mapTextBody: {
    fontWeight: 400,
    fontSize: 'min(6vw, 20px)',
    textAlign: 'left',
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '5vw'
   },
   addressWrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    height: 270
   },
   addressWrapperSecondary: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    height: 270
   },
   contactLinks: {
     textDecoration: 'none',
     color: 'rgb(49, 51, 64)',
     fontWeight: 600
   },
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
    backgroundImage: `url(${bg})`,
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
    justifyContent: 'center',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none'
  },

}));

function Location() {

  const classes = useStyles();

  const address = "515 Neosho St, Burlington, KS 66839"

  return (
    <div className="App">
      <Grid container className={classes.container}>
          <div className={classes.headerBackground}>
              <div className={classes.headerContainer}>
                &nbsp;
              </div>
          </div>

        <Grid item className={classes.spacer} xs={12} sm={12} md={12} lg={5} xl={5}>
          <div className={classes.addressWrapperSecondary}>
            <Typography className={classes.mapTextHeader} variant="h1" component="h2" align='left'>
              Address
              <Tooltip title="Copy Address" placement="right" arrow>
                <IconButton className={classes.copyButton} aria-label='copy' onClick={() => {navigator.clipboard.writeText(address)}}>
                    <FileCopyOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Typography>
            <Typography className={classes.mapTextBody} variant="h1" component="h2" align='left'>
              515 <strong>Neosho St</strong>
              <br/> 
              <strong>Burlington</strong>, KS 66839  
            </Typography>
          </div>
          <div className={classes.addressWrapper}>
            <Typography className={classes.mapTextHeader} variant="h1" component="h2" align='left'>
              Storehouse Hours
            </Typography>
            <Typography className={classes.mapTextBody} variant="h1" component="h2" align='left'>
              Mon - Fri <strong>9am - 12pm</strong>
              <br/>
              Tuesday evening <strong>5pm - 7pm</strong>
            </Typography>
          </div>
          <div className={classes.addressWrapperSecondary}>
            <Typography className={classes.mapTextHeader} variant="h1" component="h2" align='left'>
              Contact
            </Typography>
            <Typography className={classes.mapTextBody} variant="h1" component="h2" align='left'>
              Phone <a className={classes.contactLinks} href="tel:6203641459">(620) 364-1459</a>
            </Typography>
            <Typography className={classes.mapTextBody} variant="h1" component="h2" align='left'>
              Email <a className={classes.contactLinks} href = "mailto: godsstorehousebks@gmail.com">godsstorehousebks@gmail.com</a>
            </Typography>
          </div>
        </Grid>
        <Grid item className={classes.spacer} xs={12} sm={12} md={12} lg={7} xl={7}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

export default Location;