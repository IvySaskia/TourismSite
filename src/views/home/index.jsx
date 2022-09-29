import React from "react";
import Slider from '../../components/slider';
import TravelPackages from '../../views/travel-packages';
import Destination from '../../views/destinations';
import Contact from '../../views/contact';
import Reviews from '../../components/reviews';
import Awards from '../../components/awards';



const Home = () => {
  let listReviews = Array(5).fill();
  return (
    <>
      <Slider />
      <TravelPackages />
      <Destination />
      <Contact />
      <Reviews listReviews={listReviews} />
      <Awards />
    </>
  );
};

export default Home;
