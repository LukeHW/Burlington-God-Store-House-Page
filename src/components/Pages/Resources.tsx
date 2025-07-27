/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-return-assign */
// import modules
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ImagePrint from "../prints/ImagePrint";

// styles for Resources
const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: "#eeeeee",
    fontFamily: "Open Sans",
    padding: theme.spacing(0),
  },
  spacer: {},
  spacerText: {
    fontWeight: 500,
    fontSize: "min(14vw, 70px)",
    textAlign: "left",
    color: "black",
    padding: 15,
    marginTop: 150,
  },
  spacerTextBody: {
    fontWeight: 300,
    fontSize: "min(4vw, 25px)",
    textAlign: "center",
    color: "black",
    padding: 15,
  },
  links: {
    marginTop: 50,
    fontWeight: 300,
    fontSize: 30,
    textDecoration: "none",
    color: "rgba(255, 255, 255)",
    "&:hover": {
      filter: "contrast(50%)",
    },
    "&:focus": {
      filter: "contrast(50%)",
    },
  },
  resources: {
    maxWidth: "400px",
    minWidth: "150px",
    width: "90%",
    padding: 15,
  },
  resourcesTitle: {
    fontSize: "min(6vw, 20px)",
    fontWeight: 500,
    color: "black",
  },
}));

function Resources() {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid container className={classes.container}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
        <Grid item className={classes.spacer} xs={10} sm={10} md={10} lg={10} xl={10}>
          <Typography className={classes.spacerText} variant="h4" component="h2" gutterBottom>
            Resources
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />

        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
            Mobile Resource Bus
          </Typography>
          <ImagePrint imageSrc="/MRB Info 3.jpg" height={1000} ariaLabel="Mobile Resource Bus" />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
            Coffey County Transportation
          </Typography>
          <ImagePrint imageSrc="/CCT Info.jpg" height={1000} ariaLabel="Coffey County Transportation" />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
            Laundry Blessings
          </Typography>
          <ImagePrint imageSrc="/Laundry.jpg" ariaLabel="Laundry" useLandscape />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
            Harvester&#39;s Proxy Acceptance Form
          </Typography>
          <ImagePrint imageSrc="/Harvester&#39;s Info 3.jpg" ariaLabel="Harvesters Info" width="96%" height="980" />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
            Parents as Teachers
          </Typography>
          <ImagePrint imageSrc="/PAT Info.jpg" height={1052} ariaLabel="Parents As Teachers Affiliate" />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
            Home-Based Services
          </Typography>
          <ImagePrint imageSrc="/eckan.jpg" height={1052} ariaLabel="ECKAN Home-Based Services" />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
            Parents as Teachers
          </Typography>
          <ImagePrint imageSrc="/lori.jpg" ariaLabel="Lori Johnson - Parents As Teachers" useLandscape />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
            SOS of Coffey County
          </Typography>
          <ImagePrint imageSrc="/sos.jpg" ariaLabel="SOS of Coffey County" useLandscape />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Typography className={classes.resourcesTitle} variant="h4" component="h2" gutterBottom>
            Coffey County Resource Council
          </Typography>
          <ImagePrint imageSrc="/CCRC Info.jpg" ariaLabel="Coffey County Resource Council" useLandscape />
        </Grid>
      </Grid>
    </div>
  );
}

export default Resources;
