// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// styles for Footer.js
const useStyles = makeStyles((theme) => ({
  
}));

function DemoCarousel() {

  const classes = useStyles();

  return (
    <Carousel interval={5000} transitionTime={1000} selectedItem={0} infiniteLoop='true' useKeyboardArrows='true' stopOnHover='true' dynamicHeight='false' emulateTouch='true' autoPlay='true'>
        <div>
            <img src="assets/1.jpg" alt='' />
        </div>
        <div>
            <img src="assets/2.jpg" alt='' />
        </div>
        <div>
            <img src="assets/3.jpg" alt='' />
        </div>
    </Carousel>
  );
}

export default DemoCarousel;