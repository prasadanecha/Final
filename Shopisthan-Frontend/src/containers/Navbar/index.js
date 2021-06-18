import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../../components/MaterialUI";
import Shopisthan__logo_bolte from "../../img/shopisthan_logo_bolte.png";
import Shopisthan__logo from "../../img/shopisthan-logo.png";
import Wishlist__logo from "../../img/newwishlistlogo.png";
import Profilepiclogo from "../../img/icons8-male-user-50.png";
import ExploreIcon from "../../img/explore-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, signout, signup as _signup } from "../../actions";

/**
 * @author
 * @function Navigationbar
 **/

const Navigationbar = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const cart = useSelector((state) => state.cart);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  const login = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(userLogin({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <div style={{ marginLeft: 10 }} onClick={() => setLoginModal(false)}>
            <a href="/myprofile">
              <img
                src={Profilepiclogo}
                style={{ height: 30, width: 30, marginTop: 5, marginLeft: 3 }}
                alt="Shopisthan Logo"
              />
              <span style={{ fontSize: 15 }}> {auth.user.firstName}</span>
            </a>
          </div>
        }
        menus={[
          { label: "My Profile", href: "/myprofile", icon: null },
          { label: "Cart", href: "/cart", icon: null },
          {
            label: "Orders",
            href: "/account/orders",
            icon: null,
            // onClick: () => {
            //   !auth.authenticate && setLoginModal(true);
            // },
          },

          { label: "Wishlist", href: "", icon: null },
          { label: "My Chats", href: "", icon: null },
          { label: "Coupons", href: "", icon: null },
          { label: "Rewards", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
          { label: "Notifications", href: "", icon: null },
          { label: "Logout", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };
  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <li className="PrimaryNav-loggedOutOption-3xV">
            <a onClick={() => setLoginModal(true)}>
              <div className="PrimaryNav-a11yButtonWrap-23Z">
                <button className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl">
                  <div className="Btn-labelWrapper-1jS">
                    <div className="Btn-label-1Zf e2e-Btn-label"> Log In</div>
                  </div>
                </button>
                <span className="PrimaryNav-a11yButtonHelper-3Vx"></span>
              </div>
            </a>
          </li>
        }
        menus={[
          { label: "Shopisthan About us", href: "", icon: null },
          {
            label: "Orders",
            href: "/account/orders",
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          {
            label: "Wishlist",
            href: "",
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          { label: "Rewards", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a
              onClick={() => {
                setLoginModal(true);
                setSignup(true);
              }}
              style={{ color: "#2874f0" }}
            >
              Sign Up
            </a>
          </div>
        }
      />
    );
  };

  return (
    <>
      {/* <div
        tabIndex="-1"
        className="PrimaryNav-strip-3w8 js-nav-primary e2e-PrimaryNav"
      >
        <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
          <div className="authContainer">
            <div className="row">
              <div className="leftspace">
                <img
                  style={{ width: 70, height: 70 }}
                  src={Shopisthan__logo_bolte}
                  alt="Shopisthan Logo"
                />
                <h2 style={{ marginTop: 10 }}>Login</h2>
                <p style={{ fontSize: 15, marginTop: 10 }}>
                  An effort to give everyone a Commerce Store – even if you are
                  selling from home or from multiple locations.
                </p>
              </div>
              <div className="rightspace">
                <div
                  className="loginInputContainer"
                  style={{ width: 250, marginTop: 20 }}
                >
                  {auth.error && (
                    <div style={{ color: "red", fontSize: 12 }}>
                      {auth.error}
                    </div>
                  )}
                  {signup && (
                    <MaterialInput
                      type="text"
                      label="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  )}
                  {signup && (
                    <MaterialInput
                      type="text"
                      label="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  )}

                  <MaterialInput
                    type="text"
                    label="Email/Mobile Number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MaterialInput
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  
                  />
                  <MaterialButton
                    title={signup ? "Register" : "Login"}
                    bgColor="#fb641b"
                    textColor="#ffffff"
                    style={{
                      margin: "40px 0 20px 0",
                    }}
                    onClick={login}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <a tabIndex="0" className="PrimaryNav-skipContent-2jC"></a>
        <a tabIndex="0" className="PrimaryNav-skipFooter-2Kk"></a>
        <ul className="PrimaryNav-coreNavigation-rdG">
          <li className="PrimaryNav-coreNavigationItem-236 PrimaryNav-home-2zH">
            <a href="/" className="PrimaryNav-coreNavigationLink-2uv">
              <div className="PrimaryNav-logoWrap-564">
                <img src={Shopisthan__logo} alt="Shopisthan Logo" />
              </div>
            </a>
          </li>
        </ul>
        <div className={isMobile ? "nav-link-mobile" : "PrimaryNav-siteSearch-ndn"}>
          <ul className="PrimaryNav-coreNavigation-rdG">
            <li className="PrimaryNav-coreNavigationItem-236 PrimaryNav-text-1ps">
              <a
                href="/"
                className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-discover PrimaryNav-active-jbv"
              >
                <h3 className="PrimaryNav-coreNavigationLabel-3rj">Home</h3>
              </a>
            </li>
            <li className="PrimaryNav-coreNavigationItem-236 PrimaryNav-text-1ps">
              <a
                href="/ExploreStore"
                className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-live"
              >
                <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                  ExploreStore
                </h3>
              </a>
            </li>
            <li className="PrimaryNav-coreNavigationItem-236 PrimaryNav-text-1ps">
              <a
                href="/cart"
                className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs"
              >
                <h3 className="PrimaryNav-coreNavigationLabel-3rj">Cart</h3>
              </a>
            </li>
            <li className="PrimaryNav-coreNavigationItem-236 PrimaryNav-text-1ps">
              <a
                href="/cart"
                className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs"
              >
                <h3 className="PrimaryNav-coreNavigationLabel-3rj">Wishlist</h3>
              </a>
              
            </li>
          </ul>
        </div>
        <div className="PrimaryNav-signup-Yf6">
          <div className="PrimaryNav-a11yButtonWrap-23Z">
            <span className="PrimaryNav-a11yButtonHelper-3Vx"></span>
          </div>
          <ul className="PrimaryNav-loggedOutOptions-1SQ">
            {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          </ul>
        </div>
        <div className="PrimaryNav-searchLink-10L"></div>
        <ul className="PrimaryNav-userControls-3sp"></ul>
        <div className="PrimaryNav-adobeLogo-3YN"></div> 
       
      </div>*/}
      <nav className="navbar">
        <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
          <div className="authContainer">
            <div className="row">
              <div className="leftspace">
                <img
                  style={{ width: 70, height: 70 }}
                  src={Shopisthan__logo_bolte}
                  alt="Shopisthan Logo"
                />
                <h2 style={{ marginTop: 10 }}>Login</h2>
                <p style={{ fontSize: 15, marginTop: 10 }}>
                  An effort to give everyone a Commerce Store – even if you are
                  selling from home or from multiple locations.
                </p>
              </div>
              <div className="rightspace">
                <div
                  className="loginInputContainer"
                  style={{ width: 250, marginTop: 20 }}
                >
                  {auth.error && (
                    <div style={{ color: "red", fontSize: 12 }}>
                      {auth.error}
                    </div>
                  )}
                  {signup && (
                    <MaterialInput
                      type="text"
                      label="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  )}
                  {signup && (
                    <MaterialInput
                      type="text"
                      label="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  )}

                  <MaterialInput
                    type="text"
                    label="Email/Mobile Number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MaterialInput
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <MaterialButton
                    title={signup ? "Register" : "Login"}
                    bgColor="#fb641b"
                    textColor="#ffffff"
                    style={{
                      margin: "40px 0 20px 0",
                    }}
                    onClick={login}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <h3 className="logo">
          <li className="PrimaryNav-coreNavigationItem-236 PrimaryNav-home-2zH">
            <a href="/" className="PrimaryNav-coreNavigationLink-2uv">
              <div className="PrimaryNav-logoWrap-564">
                <img src={Shopisthan__logo} alt="Shopisthan Logo" />
              </div>
            </a>
          </li>
        </h3>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <a className="home">
            <li className="PrimaryNav-coreNavigationItem-236 PrimaryNav-text-1ps">
              <a
                href="/"
                className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-discover PrimaryNav-active-jbv"
              >
                <h3 className="PrimaryNav-coreNavigationLabel-3rj">Home</h3>
              </a>
            </li>
          </a>
          <a className="store" href="/ExploreStore">
            <li className="PrimaryNav-coreNavigationItem-236 PrimaryNav-text-1ps">
              <a
                href="/ExploreStore"
                className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-live"
              >
                <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                  Stores
                </h3>
              </a>
            </li>
          </a>
          <a className="fav" href="/cart">
            <li className="PrimaryNav-coreNavigationItem-236 PrimaryNav-text-1ps">
              <a
                href="/cart"
                className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs"
              >
                <h3 className="PrimaryNav-coreNavigationLabel-3rj">Cart</h3>
              </a>
            </li>
          </a>
          <a className="cart">
            <a
              href="/cart"
              className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs"
            >
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">Wishlist</h3>
            </a>
          </a>
          <div className="PrimaryNav-signup-Yf6" >
            <div className="PrimaryNav-a11yButtonWrap-23Z">
              <span className="PrimaryNav-a11yButtonHelper-3Vx"></span>
            </div>
            <ul className="PrimaryNav-loggedOutOptions-1SQ">
              {auth.authenticate
                ? renderLoggedInMenu()
                : renderNonLoggedInMenu()}
            </ul>
          </div>
        </ul>
        <button
          onClick={() => setIsMobile(!isMobile)}
          className="mobile-menu-icon"
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <li className="fas fa-bars"></li>
          )}
        </button>
      </nav>
    </>
  );
};

export default Navigationbar;
