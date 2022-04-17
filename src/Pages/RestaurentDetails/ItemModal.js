import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ItemModal = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isTrue, setIsTrue] = useState(true);
  const [productinfo, setProductInfo] = useState({});
  const dispatch = useDispatch();

  // const handleChange = (e, product, option) => {
  //   // Destructuring
  //   const { name, value, checked } = e.target;
  //   const isTitleExist = product.title === productinfo.title;
  //   if (isTitleExist) {
  //     // Case 1 : The user checks the box
  //     if (checked) {
  //       if (option) {
  //         // IF USER SELECT OR UNSELECT ANY OPTION
  //         setOptions(e, product, option);
  //       } else {
  //         // CHECKBOX
  //         setProductInfo((prevValue) => {
  //           const newValue = prevValue ? { ...prevValue } : {};
  //           const isExist = Object.keys(newValue).find(
  //             (key) => newValue[key] === product.title
  //           );
  //           // const isExist = newValue.find((item) => item.title === product.title);
  //           if (isExist) {
  //             // IS THE OBJECT ALREADY EXIST
  //             const newVal = { title: name, price: Number(value) };
  //             newValue.options = [...newValue.options, newVal];
  //             return newValue;
  //           } else {
  //             return {
  //               id: product.id,
  //               title: product.title,
  //               quantity: 1,
  //               price: product.price,
  //               options: [{ title: name, price: Number(value) }],
  //             };
  //           }
  //         });
  //       }
  //     }
  //     // Case 2  : The user unchecks the box
  //     else {
  //       // REMOVE THE OBJECT
  //       const findItem = productinfo.options.find((e) => e.title === name);
  //       const newItemValue = removeItem(findItem.title, "title");
  //       setProductInfo(newItemValue);
  //     }
  //   } else {
  //     setProductInfo({
  //       id: product.id,
  //       title: product.title,
  //       quantity: 1,
  //       price: product.price,
  //       options: [],
  //     });
  //   }
  // };
  const handleChange = (e, product, option) => {
    // Destructuring
    const { name, value, checked } = e.target;

    // Case 1 : The user checks the box
    if (checked) {
      if (option) {
        // IF USER SELECT OR UNSELECT ANY OPTION
        setOptions(e, product, option);
      } else {
        // CHECKBOX
        setProductInfo((prevValue) => {
          const newValue = prevValue ? { ...prevValue } : {};
          const isExist = Object.keys(newValue).find(
            (key) => newValue[key] === product.title
          );
          // const isExist = newValue.find((item) => item.title === product.title);
          if (isExist) {
            // IS THE OBJECT ALREADY EXIST
            const newVal = { title: name, price: Number(value) };
            newValue.options = [...newValue.options, newVal];
            return newValue;
          } else {
            return {
              id: product.id,
              title: product.title,
              quantity: 1,
              price: product.price,
              options: [{ title: name, price: Number(value) }],
            };
          }
        });
      }
    }
    // Case 2  : The user unchecks the box
    else {
      // REMOVE THE OBJECT
      const findItem = productinfo.options.find((e) => e.title === name);
      const newItemValue = removeItem(findItem.title, "title");
      setProductInfo(newItemValue);
    }
  };

  function removeItem(item, property) {
    // Destructure the options from the object
    const { options, ...rest } = productinfo;

    // Return a new object with a filtered
    // array of options
    if (property === "size") {
      return {
        options: options.filter((el) => {
          return el.size !== item;
        }),
      };
    }
    if (property === "title") {
      return {
        ...rest,
        options: options.filter((el) => {
          return el.title !== item;
        }),
      };
    }
  }

  // RADIO BUTTON FUNCTION
  const setOptions = (e, product, option) => {
    setProductInfo((prevValue) => {
      const newValue = prevValue ? { ...prevValue } : {};
      const isExist = newValue.title === product.title;

      // const isExist = newValue.find((item) => item.title === product.title);
      if (isExist) {
        // console.log("is exisit in option", product.options);

        const isTrue = newValue.options.find((elm) => elm.size);

        console.log(isTrue);

        if (isTrue) {
          const isOptionExist = newValue.options.find((elm) => elm.size);

          console.log(isOptionExist, "isOptionExist");
          const newOption = {
            [e.target.name]: option.title,
            price: Number(option.price),
          };
          const s = removeItem(isOptionExist.size, "size");
          console.log(s, "S");
          newValue.options = [...s.options, newOption];
          return newValue;
        } else {
          const newVal = {
            [e.target.name]: option.title,
            price: Number(option.price),
          };
          newValue.options = [...newValue.options, newVal];
          return newValue;
        }
      } else {
        return {
          id: product.id,
          title: product.title,
          quantity: 1,
          price: product.price,
          options: [
            { [e.target.name]: option.title, price: Number(option.price) },
          ],
        };
      }
    });
  };

  // QUANTITY INCREASE DECREASE
  const handleQuantity = (e, product, quantity) => {
    setProductInfo((prevValue) => {
      const newValue = prevValue ? { ...prevValue } : {};
      const isExist = product.title === newValue.title;
      if (isExist) {
        // console.log("is exisit in option", product.options);
        const isQuantity = newValue.quantity;

        console.log(isQuantity, quantity);

        if (isQuantity) {
          if (quantity >= isQuantity) {
            console.log("dhok c isQuantity");
            newValue.quantity = quantity;
            return newValue;
          } else if (quantity < isQuantity) {
            console.log("newValue.quantity += 1;");
            newValue.quantity = quantity;
            return newValue;
          }
        } else {
          console.log("dhok c na");
          return {
            id: product.id,
            title: product.title,
            quantity: 1,
            price: product.price,
            options: [],
          };
        }
      } else {
        console.log("dhok c title nai");
        return {
          id: product.id,
          title: product.title,
          quantity: quantity,
          price: product.price,
          options: [],
        };
      }
    });
  };

  const incrementCount = (e, product, quantity) => {
    // Update state with incremented value
    setQuantity(quantity + 1);
    handleQuantity(e, product, quantity + 1);
  };
  const decrementCount = (e, product, quantity) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      handleQuantity(e, product, quantity - 1);
    } else {
      setQuantity(1);
    }
  };

  console.log(productinfo);
  const handleAddToCart = (e) => {
    e.preventDefault();
    const values = Object.values(productinfo.options);
    const sum = values.reduce((acc, val) => {
      return acc + val;
    }, 0);

    const total = productinfo.quantity * sum;
    const detail = { ...productinfo, price: total };

    if (productinfo) {
      e.target.submit.setAttribute("data-bs-dismiss", "modal");
      // setIsTrue(false);
      dispatch(addToCart(detail));
    }
  };

  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div id="modal-dialog" className="zoom-anim-dialog ">
          <div className="small-dialog-header">
            <h3>{product.title}</h3>
          </div>
          <form id="form" onSubmit={handleAddToCart}>
            <div className="content">
              <h5>Quantity</h5>
              <div className="numbers-row">
                <input
                  type="text"
                  value={quantity}
                  onChange={() => incrementCount()}
                  id="qty_1"
                  className="qty2 form-control"
                  name="quantity"
                />
                <div
                  className="inc button_inc"
                  onClick={(e) => incrementCount(e, product, quantity)}
                >
                  +
                </div>
                <div
                  className="dec button_inc"
                  onClick={(e) => decrementCount(e, product, quantity)}
                >
                  -
                </div>
              </div>
              <h5>Size</h5>
              <ul className="clearfix">
                {product.options.map((option, i) => {
                  return (
                    <li key={i + 1}>
                      <label className="container_radio">
                        {option.title}
                        <span>+ ${option.price}</span>
                        <input
                          type="radio"
                          required
                          onChange={(e) => handleChange(e, product, option)}
                          defaultValue={option.price}
                          name={"size"}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                  );
                })}
              </ul>
              {product.ingredients ? (
                <>
                  <h5>Extra Ingredients</h5>
                  <ul className="clearfix">
                    {product.ingredients.map((ingredient, i) => {
                      return (
                        <li key={i + 1}>
                          <label className="container_check">
                            {ingredient.title}
                            <span>+ ${ingredient.price}</span>
                            <input
                              type="checkbox"
                              onChange={(e) => handleChange(e, product)}
                              defaultValue={ingredient.price}
                              name={ingredient.title}
                            />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="footer">
              <div className="row small-gutters">
                <div className="col-md-4">
                  <button
                    type="reset"
                    data-bs-dismiss="modal"
                    className="btn_1 outline full-width mb-mobile"
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-md-8">
                  <button
                    type="submit"
                    name="submit"
                    className="btn_1 full-width"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
