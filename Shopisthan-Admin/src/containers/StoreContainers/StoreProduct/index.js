import React, { useState } from 'react'
import { Layout } from '../../../components/Layout'
import {Link, NavLink} from 'react-router-dom'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
import { productShareApi } from '../../../urlConfig'
import NewModal from '../../../components/UI/Modal'
import Input from '../../../components/UI/Input'
import { deleteProductById, editProductAction,outOfStockProductAction } from '../../../actions/store.product.action'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';





/**
* @author
* @function Orders
**/

const StoreProduct = (props) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const [editProductModal,setEditProductModal] = useState(false);
    const [deleteProductModal,setDeleteProductModal] = useState(false);
    const [deleteProductId,setDeleteProductId] = useState("");
    const [deleteProductName,setDeleteProductName] = useState(""); 
    const [editProductId,setEditProductId] = useState("");
    const [editProductName,setEditProductName] = useState("");
    const [editProductPrice,setEditProductPrice] = useState("");
    const [editProductQuantity,setEditProductQuantity] = useState("");
    const [editProductDesc,setEditProductDesc] = useState("");
    const [checked, setChecked] = useState(false);


    const toggleChecked = (product) => {
        if(product.outOfStock ==="No"){
            const outOfStock = {
                _id:product._id,
                outOfStock:"Yes"
            }
          dispatch(outOfStockProductAction(outOfStock))
        }else{
          const outOfStock = {
              _id:product._id,
              outOfStock:"No"
          }
        dispatch(outOfStockProductAction(outOfStock))
        }
      };
    

  const editProduct = (e) =>{
    
    e.preventDefault();
   const newProductDetails = {
    name:editProductName, 
    price:editProductPrice, 
    description:editProductDesc, 
    quantity:editProductQuantity,
    _id:editProductId
   
   };
   dispatch(editProductAction(newProductDetails));
   setEditProductModal(false)
 }
    

    const  editProductById =(productDetails) =>{
       setEditProductId(productDetails._id)
       setEditProductName(productDetails.name)
       setEditProductQuantity(productDetails.quantity)
       setEditProductPrice(productDetails.price)
       setEditProductDesc(productDetails.description)
       setEditProductModal(true)
    }
    
    const renderEditProductModal = () =>{
        return(
            <NewModal show={editProductModal}
            handleclose={()=>setEditProductModal(false)}
            onSubmit = {editProduct}
            modaltitle={`Edit Product`}
        >
            <Input
                label={"Product Name"}
                value={editProductName}
                placeholder={`Product Name`}
                onChange={(e) => setEditProductName(e.target.value)}/>
            
            <Input
                label={"Product Quantity"}
                value={editProductQuantity}
                placeholder={`Product Quantity`}
                onChange={(e) => setEditProductQuantity(e.target.value)}/>

                
            <Input
                label={"Product Price"}
                value={editProductPrice}
                placeholder={`Product Price`}
                onChange={(e) => setEditProductPrice(e.target.value)}/>
                     
            <Input
                label={"Product Description"}
                value={editProductDesc}
                placeholder={`Product Description`}
                onChange={(e) => setEditProductDesc(e.target.value)}/>
              
           
        </NewModal>
        );
    }

    const  deletePtById = (pId,pName) =>{
        setDeleteProductId(pId);
        setDeleteProductName(pName);
        setDeleteProductModal(true)
    } 

    const renderDeleteProductModal = () =>{
     return(
            <NewModal
             modaltitle="Delete"
             show = {deleteProductModal}
             handleclose = {()=> setDeleteProductModal(false)}
             buttons = {[
                 {
                     label: 'No',
                     color:'primary',
                     onClick:()=>{
                        setDeleteProductModal(false)
                     }
                 },
                 {
                     label: 'Yes',
                     color:'danger',
                      onClick: () => {
                                        const payload = {
                                        productId: deleteProductId,
                                        };
                                        dispatch(deleteProductById(payload));
                                        setDeleteProductModal(false)     
                                    }
                 }
             ]}
            >

            Are you sure you want to delete "<b>{deleteProductName} product</b>"
          
            </NewModal>
        )
    }


     const renderProducts = () =>{
         return(
        
            <div className="Product__container">

            {
                product.products && product.products.length > 0 ?
                   product.products.map((product,index)=>
        
                                    
                    <div className="Product__singleCard" key={index} >
                   
                        <div className="Product__imageContainer">
                            <img className="Product__image" 
                            style ={{  "max-width ": "100%",
                                 " max-height":" 100%",
                                  "object-fit": "contain"}}
                            src={product.productPictures[0].img}
                            alt="product" />
                        </div>
                        <div className="Product__detailsContainer">
                            <div className="Product__iconFlex">
                                <div className="Product__name">{product.name}</div>
                                <div className="Product__icons">
                                  <WhatsappShareButton
                                    title={product.name}
                                    separator=" "
                                    url={`${productShareApi}${product.slug}/${product._id}/p`}>
                                    <WhatsappIcon logoFillColor="green" round={true} size={30}>
                                    </WhatsappIcon>
                                    </WhatsappShareButton>
                                  
                                </div>
                            
                                </div>
                            
                            <div className="Product__priceFlex">
                            <div className="Product__priceTag">Rs. {product.price}</div>
                            
                            
                            </div>
                            <div> {product.category.name}</div>
                            <div>  
                            <button
                                    onClick = 
                                    {()=>
                                    deletePtById(product._id,product.name)
                                    
                                    }
                            >Delete</button> 
                             <button
                                    onClick = 
                                    {()=>
                                    editProductById(product)
                                    
                                    }
                            >Edit</button> 
                            </div>

                            <FormGroup>
                        
                        <FormControlLabel
                        control={<Switch checked={product.outOfStock ==="No" ? false:true} onChange={()=>{toggleChecked(product)}} />}
                        label= {product.outOfStock ==="No" ? "In Stock" : "Out Of Stock"}
                           />
                        </FormGroup>
                          
                            
                        </div>
                    </div>
            
        
                   ):null
                            }
        
                            </div>




          
         );
     }
    
    return (
        <Layout sidebar>

            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Products</h3>
                            <NavLink to={`/addProduct`}><button>Add Product</button></NavLink>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {renderProducts()}
                        {renderEditProductModal()}
                        {renderDeleteProductModal()}
                    </Col>
                </Row>
            </Container>

            
        </Layout>
    )

}

export default StoreProduct