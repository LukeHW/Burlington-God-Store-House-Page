// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// styles for Footer.js
const useStyles = makeStyles((theme) => ({
  imageLink: {
    display: 'inline-block',
    textDecoration: 'none'
  }
}));

function DemoCarousel() {

  const classes = useStyles();

  return (
    <Carousel showThumbs={false} interval={5000} transitionTime={500} selectedItem={0} infiniteLoop='true' useKeyboardArrows='true' stopOnHover='true' dynamicHeight='false' autoPlay='true'>
        <div>
            <img src="assets/1.jpg" alt='' />
        </div>
        <div>
            <a className={classes.imageLink} target="blank" href="https://www.paypal.com/donate/?token=V9OwFrDwpLWLWYktYeXcDFUn57gOkRpLmon4hYRx3JSMNSo6ak5tvhvsmiVEs9FmI0ulBDxN1TYQib6I">
              <img src="assets/2.jpg" alt='' />
            </a>
        </div>
        <div>
            <img src="assets/3.jpg" alt='' />
        </div>
    </Carousel>
  );
}

export default DemoCarousel;