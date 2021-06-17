import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../actions";

/**
 * @author
 * @function NewCategory
 **/

const NewCategory = (props) => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <>
          {/* <li
            className="NavigationBar-navItem-9oH NavigationBar-evenNumbers-3s4"
            key={category.name}
          >
            <a
              className="e2e-NavigationBar-category"
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
            >
              <div className="Tab-root-2tl">
                <div className="Tab-container-3qr">
                  <div className="Tab-backgroundContainer-33P">
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/projects/404/5c1298119877593.Y3JvcCw5OTksNzgyLDAsMTA4.jpg"
                      srcset="https://mir-s3-cdn-cf.behance.net/projects/115/5c1298119877593.Y3JvcCw5OTksNzgyLDAsMTA4.jpg 115w, https://mir-s3-cdn-cf.behance.net/projects/202/5c1298119877593.Y3JvcCw5OTksNzgyLDAsMTA4.jpg 202w, https://mir-s3-cdn-cf.behance.net/projects/230/5c1298119877593.Y3JvcCw5OTksNzgyLDAsMTA4.jpg 230w, https://mir-s3-cdn-cf.behance.net/projects/404/5c1298119877593.Y3JvcCw5OTksNzgyLDAsMTA4.jpg 404w, https://mir-s3-cdn-cf.behance.net/projects/max_808/5c1298119877593.Y3JvcCw5OTksNzgyLDAsMTA4.jpg 808w"
                      alt=""
                      class="Tab-backgroundImage-9Iy"
                    />
                  </div>
                  <div className="Tab-overlay-3Zo"></div>
                  <div className="Tab-hoverOverlay-2yV"></div>
                  <h3 className="Tab-label-2Zv e2e-Tab-category-name">
                    {category.name}
                  </h3>
                </div>
              </div>
            </a>
          </li> */}
          <li  key={category.name}>
            <a className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua" href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
              <div className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5">
                <h5 className="SubCategory-label-30F">{category.name}</h5>
              </div>
            </a>
          </li>
        </>
      );
    }
    return myCategories;
  };
  return (
    <>
      {/* <div className="NavigationBar-carouselWrap-1oi">
        <div className="NavigationBar-wrapper-1Sq NavigationBar-carousel-Stt">
          <ul className="NavigationBar-container-KkZ">
            {category.categories.length > 0
              ? renderCategories(category.categories)
              : null}
          </ul>
        </div>
        <ul className="SimpleNavCarousel-carousel-1FA NavigationBar-simpleCarousel-9qd"></ul>
        <div className="NavigationBar-navigation-3PV NavigationBar-next-3E5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.924"
            height="17.665"
            viewBox="0 0 11.924 17.665"
            className="NavigationBar-arrow-1Sa"
          >
            <path
              d="M9.75,6.591l5.741,5.741L9.75,18.074l3.091,3.091,8.832-8.832L12.841,3.5Z"
              transform="translate(-9.75 -3.5)"
              class="NavigationArrow-path-33j"
            ></path>
          </svg>
        </div>
        <div className="NavigationBar-navigation-3PV NavigationBar-previous-3qz">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.924"
            height="17.665"
            viewBox="0 0 11.924 17.665"
            className="NavigationBar-arrow-1Sa"
          >
            <path
              d="M9.75,6.591l5.741,5.741L9.75,18.074l3.091,3.091,8.832-8.832L12.841,3.5Z"
              transform="translate(-9.75 -3.5)"
              class="NavigationArrow-path-33j"
            ></path>
          </svg>
        </div>
        <div className="NavigationBar-drawerActivate-1fE"></div>
      </div> */}
      <nav className="NavigationBar-subcategoryList-1nX" style={{padding:'20px'}}>
        <ul style={{display:'contents'}}>
        {category.categories.length > 0
              ? renderCategories(category.categories)
              : null}
          </ul>
      </nav>
    </>
  );
};

export default NewCategory;
