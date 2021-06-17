import React from "react";


/**
 * @author
 * @function PriceDetails
 **/

const PriceDetails = (props) => {
  return (
    <div className="summaryBox col-sm-5 rightSection noPdRight">
      <div className="summeryBorderBox prc-summary">
        <div className="sectionTopHeading">
          <h5>Price Summary</h5>
        </div>
        <div className="paymentBox">
          <div className="paymentBoxInner">
            <p>No of Items</p>
            <p>{props.totalItem} Items</p>
          </div>
          <div className="paymentBoxInner">
            <p>Delivery Fee</p>
            <p style={{ color: "rgb(29, 136, 2)" }}>FREE</p>
          </div>
          <div
            className="paymentBoxInner"
            style={{ fontFamily: "montserrat, sans-serif" }}
          >
            <p>Total</p>
            <p>₹ {props.totalPrice}</p>
          </div>
          <div
            className="savingLabel"
            style={{
              backgroundColor: "rgba(29, 136, 2, 0.1)",
              color: "rgb(29, 136, 2)",
            }}
          >
            <p id="os_savingLabel_text">You are saving ₹ 650 on this order</p>
          </div>
          <div className="pmts-wrap">
            {/* <button
                  id="os_payNow_btn"
                  className="pmts-btn false"
                  style={{
                    backgroundColor: "rgb(66, 162, 162)",
                    borderColor: "rgb(66, 162, 162)",
                    color: "white",
                  }}
                  onClick={() => props.history.push(`/checkout`)}
                >
                  Continue
                </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
