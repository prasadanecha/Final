import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function CartItem
 **/
const CartItem = (props) => {
  const [qty, setQty] = useState(props.cartItem.qty);

  const { _id, name, price, img } = props.cartItem;

  const onQuantityIncrement = () => {
    setQty(qty + 1);
    props.onQuantityInc(_id, qty + 1);
  };

  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
    props.onQuantityDec(_id, qty - 1);
  };



  return (
    <div className="leftSection" style={{ width: "100%" }}>
      <div>
        <div className="cartProductBorder clearfix">
          <div className="cartProduct">
            <div className="cartProductInner">
              <div className="prod-row">
                <div className="cartProdText">
                  <span>
                    <span className="cartProductName" aria-current="false">
                      {name}
                    </span>
                  </span>
                  <div className="productPriceDetails clearfix">
                    <span className="cartProductPrice">
                      <b>$ </b>: {price}
                    </span>
                  </div>
                  <div className="cart-prod-info-msg">You saved $700!</div>
                  {/*  */}
                  <div className="cartModOptionWrap">
                    <div className="cartModOptionInner">
                      <div className="cartModOptions">
                        <div className="quantityControl">
                          <button onClick={onQuantityDecrement}>-</button>
                          <input value={qty} readOnly />
                          <button onClick={onQuantityIncrement}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cartProductImg">
                  <a aria-current="false">
                    <img style={{padding: '10px'}}
                      src={img}
                      title="Marvel Joggers (AVL)"
                      alt="Marvel Joggers (AVL)"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="cartBottomAction">
              <div className="cartProductActions">
                <Link id="testRemoveCart" className="rmv-action" onClick={() => props.onRemoveCartItem(_id)}>
                  {" "}
                  Remove{" "}
                </Link>
                <div id="testSavefrLater" className="add-w-action">
                  {" "}
                  Move to Wishlist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
