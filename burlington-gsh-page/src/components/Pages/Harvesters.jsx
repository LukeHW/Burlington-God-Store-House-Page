// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import bg from '../../harvesters.jpg';

// styles for Harvesters
const useStyles = makeStyles((theme) => ({
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
        justifyContent: 'center'
      },
      contentContainer: {
        backgroundColor: '#FFFFFF',
        width: '100%'
      },
      contentBody: {
          textAlign: 'left',
          marginLeft: 'auto',
          marginRight: 'auto',
          color: 'black',
          fontWeight: 300,
          fontSize: 'min(4vw, 28px)',
          maxWidth: 900,
          padding: 20,
          marginTop: 30
      },
      contentBodyList: {
        textAlign: 'left',  
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'black',
        fontWeight: 300,
        fontSize: 24,
        maxWidth: 185,
        padding: 20,
        lineHeight: 1.5
      },
      contentBodyCloser: {
        textAlign: 'left',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'black',
        fontWeight: 300,
        fontSize: 'min(4vw, 28px)',
        maxWidth: 900,
        padding: 20,
        marginTop: 30,
        marginBottom: 70
      },
}));

function Harvesters() {

  const classes = useStyles();

  return (
    <div>
        <Grid container>
            <div className={classes.headerBackground}>
                <div className={classes.headerContainer}>
                    <Typography className={classes.header} variant="h2" component="h1">
                        Harvesters
                    </Typography>
                </div>
            </div>

            <div className={classes.contentContainer}>
                <Typography className={classes.contentBody} variant="h4" component="h4">
                    At <strong>God&#39;s Storehouse</strong> we strive to give our community items that are necessary and helpful. Harvesters is a way to give out large portions of food to the community in a short amount of time.
                </Typography>
                <Typography className={classes.contentBody} variant="h4" component="h4">
                  Harvesters&#39; mission is to feed hungry people today and work to end hunger tomorrow.

                  We are a regional food bank serving a 26-county area of northwestern Missouri and northeastern Kansas. Harvesters provides food and related household products to more than 760 nonprofit agencies including emergency food pantries, community kitchens, homeless shelters, children&#39;s homes and others. We also offer education programs to increase community awareness of hunger and teach about good nutrition. 

                  Harvesters&#39; main facility is located in Kansas City, Missouri at 3801 Topping Ave. Harvesters also operates a second facility in Topeka, Kansas at 215 E. Quincy St.
                </Typography>
                <Typography className={classes.contentBody} variant="h4" component="h4">
                  Harvesters is a certified member of Feeding America, a nationwide network of more than 200 food banks.  In 2011, Harvesters was Feeding America&#39;s Food Bank of the Year. We are a registered 501(c)3 nonprofit organization.

                  Harvesters also is a regional disaster-relief staging site for Feeding America. We are prepared to distribute food, water and cleaning supplies to disaster sites on short notice. 
                </Typography>
                <Typography className={classes.contentBody} variant="h4" component="h4">
                  Harvesters comes to Burlington on the 1st Tuesday (6pm-8pm) and 1st Wednesday (12noon-2pm) of the month and is held at God&#39;s Storehouse, 515 Neosho Street.
                </Typography>
                <Typography className={classes.contentBodyCloser} variant="h4" component="h4">
                  If you are unable to pick up your Harvesters food, please print and fill out this <a href='/Harvester&#39;s Info 2.jpg' target='_blank'>proxy form</a> and send it with someone who can pick up your food for you.
                </Typography>
            </div>
        </Grid>
    </div>
  );
}

export default Harvesters;