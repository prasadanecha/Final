import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/UI/Card";
import CartItem from "./CartItem";
import {
  addToCart,
  getCartItems,
  removeCartItem,
} from "../../actions/cart.action";
import PriceDetails from "../../components/PriceDetails";
import "./style.css";
import { MaterialButton } from "../../components/MaterialUI";
import NavBar from "../Navbar";
import Footer from "../../components/Footerr/Footer";

/**
 * @author
 * @function CartPage
 **/

/*
Before Login
Add product to cart
save in localStorage
when try to checkout ask for credentials and 
if logged in then add products to users cart database from localStorage
*/

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);

  const onQuantityIncrement = (_id, qty) => {
    //console.log({_id, qty});
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
  };

  const onQuantityDecrement = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };

  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };

  if (props.onlyCartItems) {
    return (
      <>
        {Object.keys(cartItems).map((key, index) => (
          <CartItem
            key={index}
            cartItem={cartItems[key]}
            onQuantityInc={onQuantityIncrement}
            onQuantityDec={onQuantityDecrement}
            onRemoveCartItem={onRemoveCartItem}
          />
        ))}
      </>
    );
  }
  if (Object.keys(cartItems).length === 0) {
    return (
      <>
      <NavBar/>
        <div
          className="container"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        >
          <div
            className="emptycartwish emptyPage"
            style={{ padding: "30px 0px 0px" }}
          >
            <img
              src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
              title="Empty Cart Page Doodle"
              alt="Empty Cart Page Doodle"
              width="150px"
            />
            <div className="clearfix">Nothing in the Cart</div>
            <div className="clearfix">
              <a
                class="success"
                hreflang="en-in"
                href="/"
                style={{
                  padding: "10px",
                  border: "2px solid",
                  borderRadius: "5px",
                  display: "inline-block",
                  marginTop: "15px",
                }}
              >
                Continue Shopping
              </a>
            </div>
          </div>
          <div
            className="emptylisting"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            <hr
              style={{
                height: "1px",
                borderWidth: "1px 0px 0px",
                borderTopStyle: "solid",
                borderRightStyle: "initial",
                borderBottomStyle: "initial",
                borderLeftStyle: "initial",
                borderTopColor: "rgb(204, 204, 204)",
                borderRightColor: "initial",
                borderBottomColor: "initial",
                borderLeftColor: "initial",
                borderImage: "initial",
              }}
            ></hr>
            <div style={{ margin: "20px auto" }}></div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div
        className="cartContainer"
        style={{ alignItems: "flex-start", overflow: "hidden" }}
      >
      <Card
          style={{
            width: "calc(100% - 500px)",
            marginTop: "20px",
            overflow: "hidden",
          }}
        >
          <div className="sectionTopHeading">
            <h5>My Cart</h5>
          </div>

          {Object.keys(cartItems).map((key, index) => (
            <CartItem
              key={index}
              cartItem={cartItems[key]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
              onRemoveCartItem={onRemoveCartItem}
            />
          ))}

          <div
            style={{
              width: "100%",
              display: "flex",
              background: "#ffffff",
              justifyContent: "flex-end",
              padding: "12px",
              boxSizing: "border-box",
            }}
          >
            <div style={{ width: "250px" }}>
              <MaterialButton
                title="PLACE ORDER"
                onClick={() => props.history.push(`/checkout`)}
              />
            </div>
          </div>
        </Card>
        <PriceDetails
          totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
            return qty + cart.cartItems[key].qty;
          }, 0)}
          totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
            const { price, qty } = cart.cartItems[key];
            return totalPrice + price * qty;
          }, 0)}
        />
      </div>
      <Footer/>
    </>
  );
};

export default CartPage;
