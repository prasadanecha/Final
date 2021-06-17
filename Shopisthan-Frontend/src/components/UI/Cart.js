import React from "react";
// import { IoIosCart } from "react-icons/io";
import CartIcon from '../../img/cart-icon.svg'
/**
 * @author
 * @function Cart
 **/

const Cart = (props) => {
  return (
    <div style={{ fontSize: "20px", position: "relative" }}>
      <span
        style={{
          position: "absolute",
          background: "red",
          width: "18px",
          height: "18px",
          borderRadius: "5px",
          fontSize: "15px",
          border: "1px solid #fff",
          textAlign: "center",
          alignSelf: "center",
          top: "-15px",
          right: "-8px",
          color: 'white'
        }}
      >
        {props.count}
      </span>
      <img  src={CartIcon} alt="Add to Cart" />
    </div>
  );
};

export default Cart;