import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./style.css";
import {Layout} from '../../../components/Layout';
import Card from '../../../components/UI/Card'
/**
* @author
* @function StoreOrder
**/

const StoreOrder = (props) => {
    const order = useSelector((state)=> state.order);
    const auth = useSelector((state)=>state.storeauth.store);
    const [type, setType] = useState("");
    const dispatch = useDispatch();   
    const stId = auth._id;

  
    

    return (
        <Layout sidebar>
          
          {order.orders.map((orderItem, index) => (
        <Card
          style={{
            margin: "10px 0",
          }}
          key={index}
          headerLeft={orderItem._id}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "50px 50px",
              alignItems: "center",
            }}
          >
         
            <div>
             
              <div className="title">Items</div>
             

              {
                orderItem.items.filter(orderProduct => orderProduct.storeId === stId)
               .map(filterOrder =>(filterOrder.productId.name))
              }



              {/* {
                orderItem.items.filter(orderProduct => orderProduct.storeId === stId)
               .map(filterOrder =>(
                 <div>
                  <h5>Product Name:{filterOrder.productId.name}</h5>
                 </div>
               ))
              } */}

            </div>
            
          </div>
         
        </Card>
      ))}
         
        </Layout>
    )

}

export default StoreOrder