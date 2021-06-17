import React from "react";
import getParams from "../../utils/getParams";
import ProductPage from "./ProductPage";
import ProductStore from "./ProductStore";
import ClothingAndAccessories from "./ClothingAndAccessories";
import Popup from "../Navbar";
import NewCategory from "../../components/NewCategoryUI";
import NavBar from "../Navbar";


/**
 * @author
 * @function ProductListPage
 **/

const ProductListPage = (props) => {
  
  const renderProduct = () => {
    console.log(props);
    const params = getParams(props.location.search);
    let content = null;
    switch(params.type){
      case 'store':
        content =  <ProductStore {...props}/>;
        break;
        case 'page':
        content = <ProductPage {...props}/>;
        break;
        default: 
        content = <ClothingAndAccessories {...props} />;
    }

    return content;
  }

  return (
    <>
    <NavBar/>
      {renderProduct()}
    
    </>
  );
};

export default ProductListPage;
