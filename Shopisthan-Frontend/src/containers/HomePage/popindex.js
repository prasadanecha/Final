import React, { useEffect, useState } from "react";
import { getInitialData, getProductDetailsById } from "../../actions";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { MaterialButton, Modal } from "../../components/MaterialUI";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../../urlConfig";
import { addToCart } from "../../actions/cart.action";
import { BiRupee } from "react-icons/bi";
import Rating_icon from "../../img/rating-icon.svg";
import ShopIcon from "../../img/icons8-shop-50.png";
import Share_icon from "../../img/share-icon.svg";
import Heart_icon from "../../img/heart-outlined.svg";
import Cart_icon from "../../img/cart-icon.svg";
import HomeBanner from "../../img/home-banner.jpg";
import ProductModal from "../../components/MaterialUI";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
import "./style.css";
import Popup from "../Navbar";

/**
 * @author
 * @function HomePage
 **/

const Productpopup = (props) => {
  let currentUrl = window.location.href;
  const product = useSelector((state) => state.product);
  const [productModal, setProductModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const { productId } = props.match.params;
    // console.log(props);
    const payload = {
      params: {
        productId,
      },
    };
    dispatch(getProductDetailsById(payload));

  }, []);

  return (
    //  <Modal visible={productModal} onClose={() => setProductModal(false)}>
      <div className="productDescriptionContainer">
        <div className="flexRow">
          <div className="verticalImageStack">
            {/* {product.productDetails.productPictures.map((thumb, index) => ( */}
            <div className="thumbnail">
              <img
              // src={generatePublicUrl(
              //   product.productDetails.productPictures[0].img
              // )}
              />
            </div>
            {/* ))} */}
          </div>
          <div className="productDescContainer">
            <div className="productDescImgContainer">
              <img
              // src={generatePublicUrl(
              //   product.productDetails.productPictures[0].img
              // )}
              // alt={`${product.productDetails.productPictures[0].img}`}
              />
            </div>

            {/* action buttons */}
          </div>
        </div>
        {/* home > category > subCategory > productName */}
        <div className="col-sm-6 col-xs-12 detailsWrapper">
          <div className="prodDesc clearfix">
            <div className="productDetails" style={{ width: "600px" }}>
              <p className="productTitle" style={{ maxWidth: "500px" }}>
                Samsung Galaxy M02s (Blue,3GB RAM, 32GB Storage) | 5000 mAh |
                Triple Camera
              </p>
              <div>
                <span className="ratingCount">
                  4.3 <IoIosStar />
                </span>
                <span className="ratingNumbersReviews">
                  72,234 Ratings & 8,140 Reviews
                </span>
              </div>
              <div className="extraOffer">
                Extra <BiRupee />
                4500 off{" "}
              </div>
              <div className="flexRow priceContainer">
                <span className="price">
                  <BiRupee />
                  {product.productDetails.price}
                </span>
                <span className="discount" style={{ margin: "0 10px" }}>
                  22% off
                </span>
                {/* <span>i</span> */}
              </div>
              <div>
                <p
                  style={{
                    color: "#212121",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Available Offers
                </p>
                <p style={{ display: "flex", maxWidth: "500px" }}>
                  <span
                    style={{
                      width: "100px",
                      fontSize: "12px",
                      color: "#878787",
                      fontWeight: "600",
                      marginRight: "20px",
                    }}
                  >
                    Description
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#212121",
                    }}
                  >
                    13MP+2MP+2MP Triple rear camera setup-13MP (F2.2) main
                    camera + 2MP (F2.4) depth camera + 2MP (2.4) Macro Camera|
                    5MP (F2.2) front camera 16.55 centimeters (6.5-inch) PLS TFT
                    LCD - infinity v-cut display, HD+ resolution with 720 x 1600
                    pixels resolution, 269 PPI with 16M colours Memory, Storage
                    & SIM: 3GB RAM | 32GB internal memory expandable up to 1TB|
                    Dual SIM (nano+nano) dual-standby (4G+4G)
                  </span>
                </p>
                <div className="share-btn-container">
                  <WhatsappShareButton
                    title={product.productDetails.name}
                    separator=" "
                    url={currentUrl}
                  >
                    <WhatsappIcon
                      logoFillColor="green"
                      round={true}
                    ></WhatsappIcon>
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
            <div id="addButtons" style={{ float: "left", width: "100%" }}>
              <div className="addToBagBtn  fixedCartBtnWrapper">
                <div className="addButtons col-xs-12 pull-left">
                  <button id="testWishButton" className="addtocart pull-left ">
                    <span>ADD TO BAG</span>
                  </button>
                  <button id="addToCart" className="wishlists pull-left ">
                    <span>SHARE</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    //  </Modal>
  );
};

export default Productpopup;
