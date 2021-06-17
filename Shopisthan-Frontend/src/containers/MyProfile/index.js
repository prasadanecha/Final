import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Profilepic from "../../img/profilepic.jpg";
import NavBar from "../Navbar";

/**
 * @author
 * @function MyProfile
 **/

const MyProfile = (props) => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <NavBar/>

      {/* ProfileHEader  starts*/}
      <main className="SCxLW o64aR " role="main">
        <div className="v9tJq v9tJq">
          <header className="HVbug">
            <section className="XjzKX">
              <section className="_4dMfM">
                <section className="M-jxE">
                  <img alt="Profile Pic" className="be6sr" src={Profilepic} />
                </section>
              </section>
            </section>
            <section className="zwlfE">
              <section className="nZSzr">
                <h2 className="_7Uhw9  fKFb1  yUEEX  KV-D4  fDxY1">
                  {auth.user.username}
                </h2>
              </section>
            </section>
          </header>
          {/* ProfileHEader  ends*/}

          <ul className="_3dEHb">
            <li className="LH361">
              <span className="_81NM2">
                <span className="g47SY _10XF2">1</span>
                Products
              </span>
            </li>
            <li className="LH361">
              <a className="_81NM2">
                <span className="g47SY _10XF2">19</span>
                Followers
              </a>
            </li>
            <li className="LH361">
              <a className="_81NM2">
                <span className="g47SY _10XF2">32</span>
                Following
              </a>
            </li>
          </ul>
          <section className="fx7hk">
            <a className="_9VEo1 T-jvg">
              <svg
                arial-label="Products"
                className="_8-yf5"
                // fill="#0095f6"
                height="24"
                viewBox="0 0 4848"
                width="24"
                tabIndex="0"
              >
                <path
                  clip-rule="evenodd"
                  d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a className="_9VEo1 T-jvg">
              <svg
                arial-label="Products"
                className="_8-yf5"
                // fill="#0095f6"
                height="24"
                viewBox="0 0 4848"
                width="24"
                tabIndex="0"
              >
                <path
                  clip-rule="evenodd"
                  d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a className="_9VEo1 T-jvg">
              <svg
                arial-label="Products"
                className="_8-yf5"
                // fill="#0095f6"
                height="24"
                viewBox="0 0 4848"
                width="24"
                tabIndex="0"
              >
                <path
                  clip-rule="evenodd"
                  d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a className="_9VEo1 T-jvg">
              <svg
                arial-label="Products"
                className="_8-yf5"
                // fill="#0095f6"
                height="24"
                viewBox="0 0 4848"
                width="24"
                tabIndex="0"
              >
                <path
                  clip-rule="evenodd"
                  d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
          </section>
          <div className="_2z6nI">
            <article className="ySN3v">
              <div>
                <div
                  style={{
                    flexDirection: "column",
                    paddingBottom: "0px",
                    paddingTop: "0px",
                  }}
                >
                  <div className="Nnq7C weEfm">
                    <div className="v1Nh3 kIKUG _bz0w ">
                      <a>
                        <div className="eLAPa">
                          <div>
                            <img
                              className="FFVAD"
                              style={{ objectFit: "cover", sizes: "293px" }}
                              src={Profilepic}
                            ></img>
                          </div>
                          <div className="_9AAhH0"></div>
                        </div>
                      </a>
                    </div>
                    idr product show krna he
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyProfile;
