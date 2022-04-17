import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";
import thumb from "../../img/menu-thumb-placeholder.jpg";
import { addToCart } from "../../redux/cartSlice";
import GetItemsApi from "../../services/GetItemsApi/GetItemsApi";

import "./detail-page.css";
import ItemModal from "./ItemModal";
const RestaurantDetails = () => {
  const dispatch = useDispatch();
  const { cart, cartTotal } = useSelector((state) => state.cart);
  console.log(cartTotal, "cartTotal");

  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  GetItemsApi("/productData.json", slug, setItems, setIsLoading);

  console.log(items);

  return (
    <main>
      <div
        className="hero_in detail_page background-image"
        style={{
          backgroundImage: `url(http://www.ansonika.com/fooyes/img/hero_general_2.jpg)`,
        }}
      >
        <div
          className="wrapper opacity-mask"
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.5)`,
          }}
        >
          <div className="container">
            <div className="main_info">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="head">
                    <div className="score">
                      <span>
                        Superb<em>350 Reviews</em>
                      </span>
                      <strong>8.9</strong>
                    </div>
                  </div>
                  <h1>Pizzeria da Alfredo</h1>
                  ITALIAN - 27 Old Gloucester St, 4530 -{" "}
                  <a
                    href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                    target="blank"
                  >
                    Get directions
                  </a>
                </div>
                <div className="col-xl-8 col-lg-7 col-md-6 position-relative">
                  <div className="buttons clearfix">
                    <span className="magnific-gallery">
                      <a
                        href="img/detail_1.jpg"
                        className="btn_hero"
                        title="Photo title"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="icon_image"></i>View photos
                      </a>
                    </span>
                    <a href="#0" className="btn_hero wishlist">
                      <i className="icon_heart"></i>Wishlist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="secondary_nav sticky_horizontal">
        <div className="container">
          <ul id="secondary_nav">
            {isLoading
              ? "loading"
              : items.map((item, i) => (
                  <li key={i + 1}>
                    <a href={`#${item.menuName.split(" ").join("-")}`}>
                      {item.menuName}
                    </a>
                  </li>
                ))}
            <li>
              <a href="#section-5">
                <i className="icon_chat_alt"></i>Reviews
              </a>
            </li>
          </ul>
        </div>
        <span></span>
      </nav>

      {isLoading ? (
        "Loading"
      ) : (
        <div className="bg_gray">
          <div className="container margin_detail">
            <div className="row">
              <div className="col-lg-8 list_menu">
                {items.map((item, i) => (
                  <section
                    key={i + 1}
                    id={`${item.menuName.split(" ").join("-")}`}
                  >
                    <h4>{item.menuName}</h4>
                    <div className="table_wrapper">
                      <table className="table table-borderless cart-list menu-gallery">
                        <thead>
                          <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Order</th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.item.map((product, idx) => {
                            return (
                              <tr key={idx + 1}>
                                <td className="d-md-flex align-items-center">
                                  <figure>
                                    <a
                                      href="img/menu_item_large_1.jpg"
                                      title="Photo title"
                                      data-effect="mfp-zoom-in"
                                    >
                                      <img
                                        src={thumb}
                                        data-src="img/menu-thumb-1.jpg"
                                        alt="thumb"
                                        className="lazy"
                                      />
                                    </a>
                                  </figure>
                                  <div className="flex-md-column">
                                    <h4>
                                      {idx + 1}. {product.title}
                                    </h4>
                                    <p>{product.description?.slice(0, 65)}</p>
                                  </div>
                                </td>
                                <td>
                                  <strong>${product.price}</strong>
                                </td>
                                {product.options ? (
                                  <td className="options">
                                    <div className="dropdown dropdown-options">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        // className="dropdown-toggle"
                                        // data-bs-toggle="dropdown"
                                        // aria-expanded="true"
                                      >
                                        <i className="icon_plus_alt2"></i>
                                      </Link>
                                      <div
                                        className="modal fade"
                                        id="exampleModal"
                                        tabIndex="-1"
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true"
                                      >
                                        <ItemModal product={product} />
                                      </div>
                                    </div>
                                  </td>
                                ) : (
                                  <td className="options">
                                    <a
                                      href="#0"
                                      onClick={() =>
                                        dispatch(
                                          addToCart({
                                            id: product.id,
                                            quantity: 1,
                                            price: product.price,
                                            title: product.title,
                                          })
                                        )
                                      }
                                    >
                                      <i className="icon_plus_alt2"></i>
                                    </a>
                                  </td>
                                )}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </section>
                ))}
              </div>

              <Cart />
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      {/* <div className="container margin_30_20">
        <div className="row">
          <div className="col-lg-8 list_menu">
            <section id="section-5">
              <h4>Reviews</h4>
              <div className="row add_bottom_30 d-flex align-items-center reviews">
                <div className="col-md-3">
                  <div id="review_summary">
                    <strong>8.5</strong>
                    <em>Superb</em>
                    <small>Based on 4 reviews</small>
                  </div>
                </div>
                <div className="col-md-9 reviews_sum_details">
                  <div className="row">
                    <div className="col-md-6">
                      <h6>Food Quality</h6>
                      <div className="row">
                        <div className="col-xl-10 col-lg-9 col-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style="width: 90%"
                              aria-valuenow="90"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-3">
                          <strong>9.0</strong>
                        </div>
                      </div>

                      <h6>Service</h6>
                      <div className="row">
                        <div className="col-xl-10 col-lg-9 col-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style="width: 95%"
                              aria-valuenow="95"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-3">
                          <strong>9.5</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h6>Punctuality</h6>
                      <div className="row">
                        <div className="col-xl-10 col-lg-9 col-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style="width: 60%"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-3">
                          <strong>6.0</strong>
                        </div>
                      </div>

                      <h6>Price</h6>
                      <div className="row">
                        <div className="col-xl-10 col-lg-9 col-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style="width: 60%"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-3">
                          <strong>6.0</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="reviews">
                <div className="review_card">
                  <div className="row">
                    <div className="col-md-2 user_info">
                      <figure>
                        <img src="img/avatar4.jpg" alt="" />
                      </figure>
                      <h5>Lukas</h5>
                    </div>
                    <div className="col-md-10 review_content">
                      <div className="clearfix add_bottom_15">
                        <span className="rating">
                          8.5<small>/10</small> <strong>Rating average</strong>
                        </span>
                        <em>Published 54 minutes ago</em>
                      </div>
                      <h4>"Great Location!!"</h4>
                      <p>
                        Eos tollit ancillae ea, lorem consulatu qui ne, eu eros
                        eirmod scaevola sea. Et nec tantas accusamus salutatus,
                        sit commodo veritus te, erat legere fabulas has ut.
                        Rebum laudem cum ea, ius essent fuisset ut. Viderer
                        petentium cu his. Tollit molestie suscipiantur his et.
                      </p>
                      <ul>
                        <li>
                          <a href="#0">
                            <i className="icon_like"></i>
                            <span>Useful</span>
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon_dislike"></i>
                            <span>Not useful</span>
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="arrow_back"></i> <span>Reply</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="review_card">
                  <div className="row">
                    <div className="col-md-2 user_info">
                      <figure>
                        <img src="img/avatar1.jpg" alt="" />
                      </figure>
                      <h5>Marika</h5>
                    </div>
                    <div className="col-md-10 review_content">
                      <div className="clearfix add_bottom_15">
                        <span className="rating">
                          9.0<small>/10</small> <strong>Rating average</strong>
                        </span>
                        <em>Published 11 Oct. 2019</em>
                      </div>
                      <h4>"Really great dinner!!"</h4>
                      <p>
                        Eos tollit ancillae ea, lorem consulatu qui ne, eu eros
                        eirmod scaevola sea. Et nec tantas accusamus salutatus,
                        sit commodo veritus te, erat legere fabulas has ut.
                        Rebum laudem cum ea, ius essent fuisset ut. Viderer
                        petentium cu his. Tollit molestie suscipiantur his et.
                      </p>
                      <ul>
                        <li>
                          <a href="#0">
                            <i className="icon_like"></i>
                            <span>Useful</span>
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon_dislike"></i>
                            <span>Not useful</span>
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="arrow_back"></i> <span>Reply</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row reply">
                    <div className="col-md-2 user_info">
                      <figure>
                        <img src="img/avatar.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="col-md-10">
                      <div className="review_content">
                        <strong>Reply from Foogra</strong>
                        <em>Published 3 minutes ago</em>
                        <p>
                          <br />
                          Hi Monika,
                          <br />
                          <br />
                          Eos tollit ancillae ea, lorem consulatu qui ne, eu
                          eros eirmod scaevola sea. Et nec tantas accusamus
                          salutatus, sit commodo veritus te, erat legere fabulas
                          has ut. Rebum laudem cum ea, ius essent fuisset ut.
                          Viderer petentium cu his. Tollit molestie suscipiantur
                          his et.
                          <br />
                          <br />
                          Thanks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-end">
                <a href="leave-review.html" className="btn_1 gradient">
                  Leave a Review
                </a>
              </div>
            </section>
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default RestaurantDetails;
