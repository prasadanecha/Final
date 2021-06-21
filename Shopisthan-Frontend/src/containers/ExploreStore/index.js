import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInitialData } from "../../actions";
import { Link } from "react-router-dom";
import "./style.css";
import NavBar from "../Navbar";
import Footer from "../../components/Footerr/Footer";

/**
 * @author
 * @function ExploreStore
 **/

const ExploreStore = (props) => {
  const store = useSelector((state) => state.store);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterdTerm, setFilterdTerm] = useState("");
  const categoriesList = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  const renderStores = () => {
    return (
      <div style={{ padding: "30px", paddingTop: "30px" }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
          {store.stores.map((store, index) => (
            <div key={store._id} className="border-for-store">
             
                <div className="Galleries-gridCover-j9D">
                  <div className="ProjectCoverNeue-root-166 ProjectCoverNeue-statsVisible-19j ProjectCover-cover-3zh">
                    <div className="Cover-cover-2mr ProjectCoverNeue-cover-3Ni e2e-ProjectCoverNeue js-project-cover e2e-ProjectCoverNeue-cover ProjectCoverNeue-coverWithFlags-1Aq ProjectCoverNeue-statsVisible-19j ProjectCoverNeue-loaded-26R">
                      <div className="Cover-wrapper-300 ProjectCoverNeue-wrapper-27j e2e-ProjectCoverNeue-wrapper">
                        <div className="Cover-content-2R2">
                          <div className="DominantColor-dominantColor-2PM"></div>
                          {/* <img
                              sizes="404px"
                              style={{ padding: "10px" }}
                              src={product.productPictures[0].img}
                              alt="Children's Day - ''SEE ME&quot;"
                              loading="lazy"
                              class="ProjectCoverNeue-image-1MZ js-cover-image"
                            ></img> */}
                          <div className="ProjectCoverNeue-controlsAndPrivacyContainer-20r"></div>
                        </div>
                      </div>
                    </div>
                    {/* /////// */}
                      <Link to={`/${store._id}/store`} key={store._id}>
                    <div style={{ padding: "10px" }}>
                      <div className="Cover-overlay-28e Cover-showOnHover-Ks- Cover-transitionDone-22y">
                      </div>
                      <div className="ProjectCoverNeue-visibleStatsAndOwners-2Av">
                        <span className="ProjectCoverNeue-ownersContainer-3Go">
                          <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                            <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                              <a className="Owners-owner-2lB e2e-Owner-user-link">
                                {store.shopName}
                              </a>
                            </span>
                          </div>
                        </span>
                        <div className="Stats-stats-1iI">
                          <div className="Product__priceFlex">
                            <div
                              className="Owners-owner-2lB e2e-Owner-user-link"
                              style={{ marginBottom: "20px" }}
                              // onClick={() => showProductDetailsModal(product)}
                            >
                              Walk in Store
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="ProjectCoverNeue-ownersContainer-3Go">
                        <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                          <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                            <a className="Owners-owner-2lB e2e-Owner-user-link">
                              {/* By -{product.createdBy.shopName} */}
                            </a>
                          </span>
                        </div>
                      </span>
                    </div>
                    </Link>
                    {/* ///////// */}
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <div style={{ paddingTop: "45px" }}>
        <nav
          className="NavigationBar-subcategoryList-1nX"
          style={{
            paddingTop: "10px",
            border: "1px solid #eaeaea",
            boxShadow: "0 2px 4px rgb(25 25 25 / 15%)",
            paddingLeft: "100px",
          }}
        >
          <ul style={{ display: "contents" }}>
            <li>
              <a className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua">
                <div className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5">
                  <h5 className="SubCategory-label-30F">Location</h5>
                </div>
              </a>
            </li>
            <li>
              <a className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua">
                <div className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5">
                  <select
                    className="SubCategory-label-30F"
                    value={filterdTerm}
                    onChange={(e) => {
                      const selectedProductCategory = e.target.value;
                      setFilterdTerm(selectedProductCategory);
                    }}
                  >
                    <option value="">Category</option>
                    {categoriesList.map((value) => (
                      <option key={value._id} value={value._id}>
                        {value.name}
                      </option>
                    ))}
                  </select>
                </div>
              </a>
            </li>
            <li>
              <a className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua">
                <div className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5">
                  <select {...props}></select>
                </div>
              </a>
            </li>
            <li>
              <div
                tabIndex="0"
                className="SearchTypeahead-searchContainer-175 SearchTypeahead-isTypeaheadEnabled-3i3"
              >
                <div className="SearchTypeahead-searchInputWrap-3Hg">
                  <div className="SearchTypeahead-searchIcon-1ld">
                    <svg viewBox="0 0 12 12" class="SearchTypeahead-icon-20K">
                      <path d="M11.407,10.421,8.818,7.832a4.276,4.276,0,1,0-.985.985l2.589,2.589a.7.7,0,0,0,.985-.985ZM2.355,5.352a3,3,0,1,1,3,3,3,3,0,0,1-3-3Z"></path>
                    </svg>
                  </div>
                  <form className="SearchTypeahead-searchForm-20c">
                    <label for="search">
                      <input
                        type="search"
                        name="search"
                        autocomplete="off"
                        placeholder="Search…"
                        aria-label="Search "
                        className="SearchTypeahead-searchInput-1qk e2e-SearchInput-input"
                        onChange={(e) => {
                          setSearchTerm(e.target.value);
                        }}
                      />
                    </label>
                  </form>
                </div>
                <button
                  tabIndex="-1"
                  className="Btn-button-BGn Btn-ghost-2Wn Btn-small-2_o SearchTypeahead-mobileCloseButton-OkE"
                >
                  <div className="Btn-labelWrapper-1jSE">
                    <div className="Btn-label-1Zf e2e-Btn-label">Cancel</div>
                  </div>
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div> {renderStores()}</div>
      <Footer/>
    </>
  );
};

export default ExploreStore;
