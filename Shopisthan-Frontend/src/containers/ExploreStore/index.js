import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInitialData } from "../../actions";
import { Link } from "react-router-dom";
import "./style.css";
import NavBar from "../Navbar";

/**
 * @author
 * @function ExploreStore
 **/

const ExploreStore = (props) => {
  const store = useSelector((state) => state.store);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  const renderStores = () => {
    return (
      <div id="store">
        {store.stores.map((store, index) => (
          <div className="nocard" key={store._id}>
            <Link >
              <img alt="" />
            </Link>
            <div className="content">
              <h3>
                <Link>Shop Name : {store.shopName}</Link>
              </h3>
              <span>Shop Email : {store.shopEmail}</span>
              <p>Shop Category : {store.shopCategory.name}</p>
              {/* <p>Owner Name : {store.createdBy.username}</p> */}
              <Link className='gobutton' to={`/${store._id}/store`}style={{ textDecoration: 'none' }}>Walk in store</Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
    <NavBar />
      <div> {renderStores()}</div>
</>
  );
};

export default ExploreStore;
