import React from "react";
import "../../css/style.css";
import "../../css/home.css";
import "../../css/custom.css";
import "../../css/bootstrap.min.css";
import Hero from "../../Components/Hero/Hero";
import Carousel from "../../Components/Carousel/Carousel";
import TopRestaurants from "../../Components/TopRestaurants/TopRestaurants";
import EasyOrderSection from "../../Components/EasyOrderSection/EasyOrderSection";
const Home = () => {
  return (
    <div>
      <main>
        <Hero />
        {/* CAROUSEL */}
        <div className="main_title center">
          <span>
            <em></em>
          </span>
          <h2>Popular Categories</h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
        </div>
        <div className="container">
          <Carousel />
        </div>
        {/* TOP Restaurants */}
        <TopRestaurants />
        {/* EASY ORDER SECTION */}
        <EasyOrderSection />
      </main>
    </div>
  );
};

export default Home;
