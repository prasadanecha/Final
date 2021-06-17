import React from 'react'
import {  useSelector } from 'react-redux'
import { Layout } from '../../components/Layout'
import './style.css'
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
import { productShareApi } from '../../urlConfig'


 const ShopProfile = (props) =>{
   const storeId = props.match.params.storeId;
   const store = useSelector(state=>state.store);
   const product = useSelector(state=>state.product);

   return(
     <Layout sidebar>
       
       <div>
                
       {
                    store.stores.length > 0 ?
                    store.stores.filter((store)=>{
                        if(store._id === storeId){
                            return store
                        }else if(store._id !== storeId){
                          return null;
                        }
                      
                       
                    }).map((store,index)=>
                     

                       <div key={index}>
                  <div className="StoreCard__container" key={index}>
                <div className="StoreCard__row"><img className="Shop__logo"
                src= "https://as1.ftcdn.net/jpg/03/01/31/70/500_F_301317052_ajbJFzcmAbkAUJPW57nj4fevWm4ZlKJB.jpg"
                  alt="Logo" /></div>
                <div className="StoreCard__column">
                    <div className="StoreCard__column1">
                        <div><div className="Shop__name">
                        {store.shopName}
                        </div>
                        <i className="Shop__type">
                        {store.shopEmail}
                        </i></div>
                      
                    </div>
                    <div className="StoreCard__column1">
                        <div className="Shop__numberVar">
                      
                        {
                          product.products.filter(products => products.createdBy._id ===storeId).length
                        }
                        </div>
                        <div className="Shop__heading">products</div>
                        <div className="Shop__numberVar">
                        {/* {store.followers.length} */}
                              {/* <div className="Shop__numberVar">{product.products.length}</div>  */}
                        </div>
                        <div className="Shop__heading">followers</div>
                    </div>
                    <div className="StoreCard__column1"><div className="Shop__type">Shop Des...</div></div>
                    <div className="StoreCard__column1"><div className="Shop__location">
                      {store.shopAddress}
            
                      </div>
                      </div>
                      <div className="StoreCard__column1"><div className="Shop__type">{store.shopType}</div></div>
                      <div className="StoreCard__column1">
                          <div className="Shop__tags">
                          {store.shopCategory.name}
                          </div>
                        </div>
                        <WhatsappShareButton
                title={store.shopName}
                separator=" "
                url="https://www.npmjs.com/package/react-share">
                  <WhatsappIcon logofillcolor="green" round={true} size={50}>
                  </WhatsappIcon>
                </WhatsappShareButton>
                    
            </div> </div></div>
            
                      
                   ):null
                }
       </div>  

       <div className="Product__container">
       {
     product.products.length > 0 ?
       product.products.filter((product)=>{
         if(product.createdBy._id=== storeId) return product
         else if(product.createdBy._id !== storeId) return null;
       }).map((product,index)=>
           
                        
        <div className="Product__singleCard" key={index} >
            <div className="Product__imageContainer">
                <img className="Product__image" 
                src="https://as1.ftcdn.net/jpg/03/01/31/70/500_F_301317052_ajbJFzcmAbkAUJPW57nj4fevWm4ZlKJB.jpg"
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
                        <WhatsappIcon logofillolor="green" round={true} size={30}>
                        </WhatsappIcon>
                        </WhatsappShareButton>
                      </div>
                
                    </div>
                
                <div className="Product__priceFlex">
                <div className="Product__priceTag">Rs. {product.price}</div>
                
                
                </div>
                <div> {product.category.name}</div>
                
              
                
            </div>
        </div>


       ):null
                }
    </div>
     </Layout>
   );
 }

export default ShopProfile
