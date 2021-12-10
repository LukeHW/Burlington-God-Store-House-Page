// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// styles for DemoCarousel
const useStyles = makeStyles(() => ({
  imageLink: {
    display: 'inline-block',
    textDecoration: 'none'
  }
}));

function DemoCarousel() {

  const classes = useStyles();

  return (
    <Carousel showThumbs={false} interval={9000} transitionTime={500} infiniteLoop='true' useKeyboardArrows='true' stopOnHover='true' dynamicHeight='false' autoPlay='true'>
        <div>
            <img src="assets/1.jpg" alt='Storehouse Hours' />
        </div>
        <div>
            <a className={classes.imageLink} target="blank" href="https://www.paypal.com/donate?hosted_button_id=WDDPCHKP4W4BG&source=url">
              <img src="assets/2.jpg" alt='Paypal Donation Link' />
            </a>
        </div>
        <div>
            <img src="assets/harvestersCard.jpg" alt='Harvesters Info' />
        </div>
        <div>
            <a href='/Resources' rel="noreferrer" className={classes.imageLink}>
              <img src="assets/3.jpg" alt='Resources Link' />
            </a>
        </div>
        <div>
            <img src="assets/card.jpg" alt='Buisness Card' />
        </div>
        <div>
            <a target="blank" href='https://www.facebook.com/Gods-Storehouse-101240358583466' rel="noreferrer" className={classes.imageLink}>
              <img src="assets/4.jpg" alt='Gods Storehouse Facebook Page Link' />
            </a>
        </div>
    </Carousel>
  );
}

export default DemoCarousel;