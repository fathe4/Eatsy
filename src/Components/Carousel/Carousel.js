import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import placeholderImg from "../../img/location_list_placeholder.png";

const Carousel = () => {
  return (
    <div className=" margin_30_60">
      <div className="d-flex gap-5">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item_version_2">
              <a href="grid-listing-filterscol.html">
                <figure>
                  <span>98</span>
                  <img
                    src={placeholderImg}
                    data-src="img/home_cat_pizza.jpg"
                    alt=""
                    className="owl-lazy"
                    width="350"
                    height="450"
                  />
                  <div className="info">
                    <h3>Pizza</h3>
                    <small>Avg price $40</small>
                  </div>
                </figure>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item_version_2">
              <a href="grid-listing-filterscol.html">
                <figure>
                  <span>87</span>
                  <img
                    src={placeholderImg}
                    data-src="img/home_cat_sushi.jpg"
                    alt=""
                    className="owl-lazy"
                    width="350"
                    height="450"
                  />
                  <div className="info">
                    <h3>Japanese</h3>
                    <small>Avg price $50</small>
                  </div>
                </figure>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item_version_2">
              <a href="grid-listing-filterscol.html">
                <figure>
                  <span>55</span>
                  <img
                    src={placeholderImg}
                    data-src="img/home_cat_hamburgher.jpg"
                    alt=""
                    className="owl-lazy"
                    width="350"
                    height="450"
                  />
                  <div className="info">
                    <h3>Burghers</h3>
                    <small>Avg price $55</small>
                  </div>
                </figure>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item_version_2">
              <a href="grid-listing-filterscol.html">
                <figure>
                  <span>55</span>
                  <img
                    src={placeholderImg}
                    data-src="img/home_cat_vegetarian.jpg"
                    alt=""
                    className="owl-lazy"
                    width="350"
                    height="450"
                  />
                  <div className="info">
                    <h3>Vegetarian</h3>
                    <small>Avg price $40</small>
                  </div>
                </figure>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item_version_2">
              <a href="grid-listing-filterscol.html">
                <figure>
                  <span>65</span>
                  <img
                    src={placeholderImg}
                    data-src="img/home_cat_bakery.jpg"
                    alt=""
                    className="owl-lazy"
                    width="350"
                    height="450"
                  />
                  <div className="info">
                    <h3>Bakery</h3>
                    <small>Avg price $60</small>
                  </div>
                </figure>
              </a>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="item_version_2">
              <a href="grid-listing-filterscol.html">
                <figure>
                  <span>25</span>
                  <img
                    src={placeholderImg}
                    data-src="img/home_cat_chinesse.jpg"
                    alt=""
                    className="owl-lazy"
                    width="350"
                    height="450"
                  />
                  <div className="info">
                    <h3>Chinese</h3>
                    <small>Avg price $40</small>
                  </div>
                </figure>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item_version_2">
              <a href="grid-listing-filterscol.html">
                <figure>
                  <span>35</span>
                  <img
                    src={placeholderImg}
                    data-src="img/home_cat_mexican.jpg"
                    alt=""
                    className="owl-lazy"
                    width="350"
                    height="450"
                  />
                  <div className="info">
                    <h3>Mexican</h3>
                    <small>Avg price $35</small>
                  </div>
                </figure>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
