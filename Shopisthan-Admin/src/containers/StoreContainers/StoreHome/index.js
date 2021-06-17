import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Layout } from '../../../components/Layout';
import {  Card } from 'react-bootstrap'



const StoreHome = (props) => {

    const product = useSelector(state=>state.product)
    const order = useSelector(state=>state.order)

    return (
        <>
            <Layout sidebar>
             <div className="home" style={{display:"flex",gap:"40px",marginTop:"20px"}}>

                <Card
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                        <Card.Header>Products</Card.Header>
                        <Card.Body>
                        <Card.Title>Total Products:</Card.Title>
                        <Card.Text>
                        {product.products.length}
                        </Card.Text>
                        </Card.Body>
                </Card>

                <Card
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                        <Card.Header>Orders</Card.Header>
                        <Card.Body>
                        <Card.Title>Total Orders:</Card.Title>
                        <Card.Text>
                        {order.orders.length}
                        </Card.Text>
                        </Card.Body>
                </Card>



                </div>
                

            </Layout>

        </>
    )
}

export default StoreHome

