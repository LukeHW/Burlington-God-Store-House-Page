// import modules
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// styles for DemoCarousel
const useStyles = makeStyles(() => ({
  imageLink: {
    display: "inline-block",
    textDecoration: "none",
  },
  imageHeight: {
    width: "100%",
    maxHeight: 600,
    objectFit: "contain",
  },
}));

function DemoCarousel() {
  const classes = useStyles();

  return (
    <Carousel showThumbs={false} interval={9000} transitionTime={500} infiniteLoop="true" useKeyboardArrows="true" stopOnHover="true" dynamicHeight autoPlay="true" preventMovementUntilSwipeScrollTolerance swipeScrollTolerance={10}>
      <div>
        <img className={classes.imageHeight} src="assets/1.jpg" alt="Storehouse Hours" />
      </div>
      <div>
        <a className={classes.imageLink} target="blank" href="https://www.paypal.com/donate?hosted_button_id=WDDPCHKP4W4BG&source=url">
          <img className={classes.imageHeight} src="assets/2.jpg" alt="Paypal Donation Link" />
        </a>
      </div>
      <div>
        <a href="/Harvesters" rel="noreferrer" className={classes.imageLink}>
          <img className={classes.imageHeight} src="assets/harvestersCard 2.jpg" alt="Harvesters Info" />
        </a>
      </div>
      <div>
        <a target="blank" href="https://kshousingcorp.org/?fbclid=IwAR0gDHDip695MsVTHJv8cxS0VSVw38vXkBfhT0dbTgid7rdwzTM8QKWWtJs" rel="noreferrer" className={classes.imageLink}>
          <img className={classes.imageHeight} src="assets/KHRC 2.png" alt="Kansas Housing Resources Corp." />
        </a>
      </div>
      <div>
        <a href="/Resources" rel="noreferrer" className={classes.imageLink}>
          <img className={classes.imageHeight} src="assets/3.jpg" alt="Resources Link" />
        </a>
      </div>
      <div>
        <a href="https://www.greenbush.org/center-of-community-supports/early-learning-services/parents-as-teachers/" target="blank" className={classes.imageLink}>
          <img className={classes.imageHeight} src="assets/PAT.jpg" alt="Parents as Teachers Link" />
        </a>
      </div>
      <div>
        <img className={classes.imageHeight} src="assets/card.jpg" alt="Buisness Card" />
      </div>
      <div>
        <a target="blank" href="https://www.facebook.com/Gods-Storehouse-101240358583466" rel="noreferrer" className={classes.imageLink}>
          <img className={classes.imageHeight} src="assets/4.jpg" alt="Gods Storehouse Facebook Page Link" />
        </a>
      </div>
    </Carousel>
  );
}

export default DemoCarousel;
