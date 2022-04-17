import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarFilter = ({
  setPickItem,
  setSort,
  handleCategoryFilter,
  handleRatingFilter,
  applyFilters,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <aside className="col-lg-3 sticky-lg-top" id="sidebar_fixed">
      {/* <a
        className="btn_map d-flex align-items-center justify-content-center"
        data-bs-toggle="collapse"
        href="#collapseMap"
        aria-expanded="false"
        aria-controls="collapseMap"
      >
        <span
          className="btn_map_txt"
          data-text-swap="Hide Map"
          data-text-original="View on Map"
        >
          View on Map
        </span>
      </a> */}
      <div className="type_delivery">
        <ul className="clearfix" onChange={(e) => setPickItem(e.target.value)}>
          <li>
            <label className="container_radio">
              Delivery
              <input
                type="radio"
                value="Delivery"
                name="type_d"
                defaultChecked="checked"
              />
              <span className="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container_radio">
              Take away
              <input value="Take Away" type="radio" name="type_d" />
              <span className="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container_radio">
              Both
              <input value="Both" type="radio" name="type_d" />
              <span className="checkmark"></span>
            </label>
          </li>
        </ul>
      </div>

      <a
        className="btn_map mobile btn_filters"
        data-bs-toggle="collapse"
        href="#collapseMap"
      >
        <i className="icon_pin_alt"></i>
      </a>
      <a
        href="#0"
        className="open_filters btn_filters"
        onClick={() => setToggle(!toggle)}
      >
        <i className="icon_adjust-vert"></i>
        <span>Filters</span>
      </a>

      <div className={`filter_col ${toggle ? "show" : ""}`}>
        <div className="inner_bt clearfix">
          Filters
          <Link
            to="#"
            onClick={() => setToggle(!toggle)}
            className="open_filters"
          >
            <i className="icon_close"></i>
          </Link>
        </div>
        <div className="filter_type">
          <h4>
            <a href="#filter_1" data-bs-toggle="collapse" className="opened">
              Sort
            </a>
          </h4>
          <div className="collapse show" id="filter_1">
            <ul onChange={(e) => setSort(e.target.value)}>
              <li>
                <label className="container_radio">
                  Top Rated
                  <input type="radio" name="filter_sort" value="topRated" />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container_radio">
                  Recommended
                  <input type="radio" name="filter_sort" value="recommended" />
                  <span className="checkmark"></span>
                </label>
              </li>
              {/* <li>
                <label className="container_radio">
                  Price: low to high
                  <input type="radio" name="filter_sort" value="lowToHigh" />
                  <span className="checkmark"></span>
                </label>
              </li> */}
              <li>
                <label className="container_radio">
                  Up to 15% off
                  <input type="radio" name="filter_sort" value="offer15" />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container_radio">
                  All Offers
                  <input type="radio" name="filter_sort" value="allOffer" />
                  <span className="checkmark"></span>
                </label>
              </li>
              {/* <li>
                <label className="container_radio">
                  Distance
                  <input type="radio" name="filter_sort" />
                  <span className="checkmark"></span>
                </label>
              </li> */}
            </ul>
          </div>
        </div>
        {/* CATEGORY FILTER */}
        <div className="filter_type">
          <h4>
            <a href="#filter_2" data-bs-toggle="collapse" className="opened">
              Categories
            </a>
          </h4>
          <div data-bs-toggle="collapse" className="opened" id="filter_2">
            <ul onChange={(e) => handleCategoryFilter(e.target.value)}>
              <li>
                <label className="container_check">
                  Pizza - Italian <small>12</small>
                  <input type="checkbox" value="italian" />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container_check">
                  Japanese - Sushi <small>24</small>
                  <input type="checkbox" value="japanese" />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container_check">
                  Burghers <small>23</small>
                  <input type="checkbox" value={"burghers"} />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container_check">
                  Vegetarian <small>11</small>
                  <input type="checkbox" value="vegetarian" />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container_check">
                  Bakery <small>18</small>
                  <input type="checkbox" value="bakery" />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container_check">
                  Chinese <small>12</small>
                  <input type="checkbox" value="chinese" />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container_check">
                  Mexican <small>15</small>
                  <input type="checkbox" value="mexican" />
                  <span className="checkmark"></span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="filter_type">
          <h4>
            <a href="#filter_3" data-bs-toggle="collapse" className="closed">
              Distance
            </a>
          </h4>
          <div className="collapse" id="filter_3">
            <div className="distance">
              {" "}
              Radius around selected destination <span></span> km
            </div>
            <div className="add_bottom_25">
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value="20"
                data-orientation="horizontal"
              />
            </div>
          </div>
        </div> */}
        <div className="filter_type last">
          <h4>
            <a href="#filter_4" data-bs-toggle="collapse" className="closed">
              Rating
            </a>
          </h4>
          <div className="collapse" id="filter_4">
            <ul onChange={(e) => handleRatingFilter(e.target.value)}>
              <li>
                <label className="container_check">
                  Superb 9+ <small>06</small>
                  <input type="checkbox" value={9} />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container_check">
                  Very Good 8+ <small>12</small>
                  <input type="checkbox" value={8} />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container_check">
                  Good 7+ <small>17</small>
                  <input type="checkbox" value={7} />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container_check">
                  Pleasant 6+ <small>43</small>
                  <input type="checkbox" value={6} />
                  <span className="checkmark"></span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <p>
          <button
            onClick={() => applyFilters()}
            className="btn_1 outline full-width"
          >
            Filter
          </button>
        </p>
      </div>
    </aside>
  );
};

export default SidebarFilter;
