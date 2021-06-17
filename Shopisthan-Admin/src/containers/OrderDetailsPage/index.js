import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetailsById } from '../../actions';
import { Layout } from '../../components/Layout'
import './style.css'

export const OrderDetailsPage = (props) => {
  const disptach = useDispatch();
 
  useEffect(()=>{
        const {orderId} = props.match.params;
  
    const payload = {
        params:{
            orderId
        }
    }
    disptach(getOrderDetailsById(payload))
    },[]);

    const order = useSelector(state=>state.order.orderDetails);
    if (Object.keys(order).length === 0) {
      return null;
    }
    return (
       <Layout sidebar>
          
          <div>OrderId: {order._id}</div>
           <div>User Details:</div>
           <div className = "UserDetails">
               <div className="user"><b>Name:</b> {order.address.name}</div>
               <div className="user"><b>PhoneNo:</b> {order.address.mobileNumber}</div>
               <div className="user"><b>Alternate PhoneNo:</b> {order.address.alternatePhone}</div>
               

           </div>
           <div className = "UserDetails">
                <div className="user"><b>Address:</b> {order.address.address}</div>
               <div className="user"><b>Locality:</b> {order.address.locality}</div>
               <div className="user"><b>Landmark:</b> {order.address.landmark}</div>
           </div>
                   
           <div className = "UserDetails">
          
               <div className="user"><b>cityDistrictTown:</b> {order.address.cityDistrictTown}</div>
               <div className="user"><b>State:</b> {order.address.state}</div>
               <div className="user"><b>PinCode:</b> {order.address.pinCode}</div>
               <div className="user"><b>Address Type:</b> {order.address.addressType}</div>

           </div>

       <div className="ProductDetails">
         Product Details:
       </div>
     
         {
           order.items.length > 0 ? 
             order.items.map((product,index)=>

             <Card style={{marginTop:"20px"}}>
             <div>

       
              <div className = "UserDetails" 
               style={{marginTop:'10px'}}
              >
              <div className="user"><b>Name: </b> {product.productId.name}</div>
               <div className="user"><b>Qty:</b> {product.purchasedQty}</div>
               <div className="user"><b>Price:</b> {product.payablePrice}</div>
              </div>

              <div className = "UserDetails">
              <div className="user"><b>Store Name: </b> {product.storeId.shopName}</div>
              <div className="user"><b>Store PhoneNo: </b> {product.storeId.shopPhoneNo}</div>
              <div className="user"><b>Store Address: </b> {product.storeId.shopAddress}</div>
              </div>

          


              </div>
              </Card>
             )
           :null
         }
       
         <div className="ProductDetails">
         <b>Total Price: </b>{order.totalAmount}
       </div>

       </Layout>
    )
}
