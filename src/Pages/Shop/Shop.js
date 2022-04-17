import React, { useEffect, useState } from "react";
import "./listing.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SidebarFilter from "../../Components/SidebarFilter/SidebarFilter";
import RestaurantCards from "../../Components/RestaurantCards/RestaurantCards";
import Carousel from "../../Components/Carousel/Carousel";
import useGetData from "../../hooks/useGetData";

const Shop = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [resultFound, setResultFound] = useState(true);
  useGetData("./fakeData.json", setRestaurants, setIsLoading);
  useGetData("./fakeData.json", setFilters, setIsLoading);

  const [pickItem, setPickItem] = useState("Delivery");
  const [sort, setSort] = useState("");
  const [categories, setCategories] = useState([]);
  const [ratings, setRatings] = useState([]);

  const handleCategoryFilter = (value) => {
    if (categories.includes(value)) {
      const removeValue = categories.filter((val) => val !== value);
      setCategories(removeValue);
    } else {
      setCategories((prevValue) => [...prevValue, value]);
    }
  };
  const handleRatingFilter = (value) => {
    if (ratings.includes(value)) {
      const removeValue = ratings.filter((val) => val !== value);
      setRatings(removeValue);
    } else {
      setRatings((prevValue) => [...prevValue, value]);
    }
  };
  console.log(pickItem);

  const applyFilters = () => {
    let updatedList = filters;

    updatedList = updatedList.filter(
      (item) =>
        item.additional.itemPick === "Both" ||
        item.additional.itemPick.toLowerCase() === pickItem.toLowerCase()
    );
    if (sort) {
      if (sort === "topRated") {
        updatedList.sort((a, b) => b.additional.rating - a.additional.rating);
      }
      if (sort === "offer15") {
        updatedList.sort((a, b) => b.additional.offer - a.additional.offer);
      }
      if (sort === "allOffer") {
        updatedList = updatedList.filter((item) => item.additional.offer);
      }
      if (sort === "recommended") {
        updatedList = updatedList.filter((item) => item.additional.recommended);
      }
    }
    // Rating Filter
    if (ratings.length > 0) {
      updatedList = updatedList.filter(
        (item) => item.additional.rating >= Math.min(ratings)
      );
    }

    // Category filter
    if (categories.length > 0) {
      updatedList = updatedList.filter((item) =>
        categories.includes(item.additional.category.toLowerCase())
      );
    }

    // // cuisine filter
    // const cuisineChecked = cuisines.filter(item => item.checked).map(item => item.label.toLocaleLowerCase())

    // if (cuisineChecked.length) {
    //     updatedList = updatedList.filter(item => cuisineChecked.includes(item.cuisine))
    // }

    // // Price Filter
    // const minPrice = selectedPrice[0]
    // const maxPrice = selectedPrice[1]
    // updatedList = updatedList.filter(item => item.price >= minPrice && item.price <= maxPrice)

    // // Search Filter
    // if (searchInput) {
    //     updatedList = updatedList.filter(item => item.title.toLocaleLowerCase().search(searchInput.toLocaleLowerCase().trim()) !== -1)
    // }

    setRestaurants(updatedList);

    updatedList.length ? setResultFound(true) : setResultFound(false);
  };
  console.log(restaurants);
  return (
    <main>
      <div className="page_header element_to_stick">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
              <h1>145 restaurants in Convent Street 2983</h1>
              <a href="#0">Change address</a>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-5">
              <div className="search_bar_list">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Dishes, restaurants or cuisines"
                />
                <button type="submit">
                  <i className="icon_search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="collapse" id="collapseMap">
        <div id="map" className="map"></div>
      </div>

      <div className="container margin_30_20">
        <div className="row">
          {/*SIDEBAR FILTER*/}
          <SidebarFilter
            setPickItem={setPickItem}
            setSort={setSort}
            handleCategoryFilter={handleCategoryFilter}
            handleRatingFilter={handleRatingFilter}
            applyFilters={applyFilters}
          />

          <div className="col-lg-9">
            <div className="row">
              <div className="col-12">
                <h2 className="title_small">Top Categories</h2>
                <Carousel />
              </div>
            </div>

            <div className="promo">
              <h3>Free Delivery for your first 14 days!</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip.
              </p>
              <i className="icon-food_icon_delivery"></i>
            </div>

            {/* RESTAURANT CARDS */}
            {resultFound ? (
              <RestaurantCards
                restaurants={restaurants}
                isLoading={isLoading}
              />
            ) : (
              <h2>Not Found</h2>
            )}

            <div className="pagination_fg">
              <a href="#">&laquo;</a>
              <a href="#" className="active">
                1
              </a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">&raquo;</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
