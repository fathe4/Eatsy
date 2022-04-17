import React from "react";
import { Link } from "react-router-dom";

const RestaurantCards = ({ restaurants, isLoading }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h2 className="title_small">Top Rated</h2>
      </div>
      {isLoading
        ? "Loading"
        : restaurants.map((restaurant) => {
            return (
              <div
                key={restaurant._id}
                className="col-xl-4 col-lg-6 col-md-6 col-sm-6"
              >
                <div className="strip">
                  <Link to={`/restaurant/${restaurant._id}`}>
                    <figure>
                      {restaurant.additional.offer ? (
                        <span className="ribbon off">
                          {restaurant.additional.offer}% off
                        </span>
                      ) : (
                        ""
                      )}
                      <img
                        src={restaurant.picture}
                        data-src={restaurant.picture}
                        className="img-fluid lazy"
                        alt="restaurant_logo"
                      />
                      <a href="detail-restaurant.html" className="strip_info">
                        <small>{restaurant.additional.category}</small>
                        <div className="item_title">
                          <h3>{restaurant.name}</h3>
                          <small>{restaurant.location.split(",")[0]}</small>
                        </div>
                      </a>
                    </figure>
                  </Link>

                  <ul>
                    <li>
                      <span
                        className={`take ${
                          restaurant.additional.itemPick === "Take Away"
                            ? "yes"
                            : restaurant.additional.itemPick === "Both"
                            ? "yes"
                            : "no"
                        }`}
                      >
                        Takeaway
                      </span>{" "}
                      <span
                        className={`take ${
                          restaurant.additional.itemPick === "Delivery"
                            ? "yes"
                            : restaurant.additional.itemPick === "Both"
                            ? "yes"
                            : "no"
                        }`}
                      >
                        Delivery
                      </span>
                    </li>
                    <li>
                      <div className="score">
                        <strong> {restaurant.additional.rating}</strong>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default RestaurantCards;
