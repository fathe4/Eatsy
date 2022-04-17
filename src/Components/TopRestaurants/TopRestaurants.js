import React, { useState } from "react";
import useGetData from "../../hooks/useGetData";
import { Link } from "react-router-dom";

const TopRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useGetData("./fakeData.json", setRestaurants, setIsLoading, 6);
  console.log(restaurants, "restaurants");
  return (
    <div className="bg_gray">
      <div className="container margin_60_40">
        <div className="main_title">
          <span>
            <em></em>
          </span>
          <h2>Top Rated Restaurants</h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          <a href="#0">View All &rarr;</a>
        </div>
        <div className="row add_bottom_25">
          {restaurants.map((restaurant) => (
            <div className="col-lg-6">
              <div className="list_home">
                <ul>
                  <Link to={`/restaurant/${restaurant._id}`}>
                    <li>
                      <a href="detail-restaurant.html">
                        <figure>
                          <img
                            src={restaurant.picture}
                            data-src={restaurant.picture}
                            alt="logo"
                            className="lazy"
                            width="350"
                            height="233"
                          />
                        </figure>
                        <div className="score">
                          <strong>{restaurant.additional.rating}</strong>
                        </div>
                        <em>{restaurant.additional.category}</em>
                        <h3>{restaurant.name}</h3>
                        <small>{restaurant.location}</small>
                        <ul>
                          <li>
                            {restaurant.additional.offer ? (
                              <span className="ribbon off">
                                -{restaurant.additional.offer}% off
                              </span>
                            ) : (
                              ""
                            )}
                          </li>
                          <li>Average price $20</li>
                        </ul>
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div
          className="banner lazy"
          data-bg="url(http://www.ansonika.com/fooyes/img/banner_bg_desktop.jpg)"
        >
          <div
            className="wrapper d-flex align-items-center opacity-mask"
            data-opacity-mask="rgba(0, 0, 0, 0.3)"
          >
            <div>
              <small>FooYes Delivery</small>
              <h3>We Deliver to your Office</h3>
              <p>Enjoy a tasty food in minutes!</p>
              <a href="grid-listing-filterscol.html" className="btn_1 gradient">
                Start Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRestaurants;
