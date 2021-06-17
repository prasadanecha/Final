import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap'
import { Layout } from '../../components/Layout'
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'antd';


const Home = (props) => {

 const store = useSelector(state=>state.store);
 const product = useSelector(state=>state.product);
 const order = useSelector(state=>state.order);
 const auth = useSelector(state => state.auth)

 const [toogle,setToggle] = useState(true);

 const toggler = () =>{
     toogle ? setToggle(false) :setToggle(true);
 }
    return (
        <>
            <Layout sidebar>

            <div className="home">

            <Card
                style={{ width: '18rem' }}
                className="mb-2"
                >
                    <Card.Header>Stores</Card.Header>
                    <Card.Body>
                    <Card.Title>Total Stores:</Card.Title>
                    <Card.Text>
                       {store.stores.length}
                    </Card.Text>
                    </Card.Body>
            </Card>

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

 <Switch onClick={toggler}/>

        {
            toogle ? <span>done</span> : <span> doneeeee</span>
        }

{/* 
        <FormGroup>
        <FormControlLabel
    control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
    label="Small"
         />
         </FormGroup> */}
            </Layout>
        </>
    )
}

export default Home
