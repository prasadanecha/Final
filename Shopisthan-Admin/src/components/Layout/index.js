import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Header from '../Header'
import './style.css'


export const Layout = (props) => {

    const auth = useSelector(state => state.auth);
    const storeauth = useSelector(state => state.storeauth)

    const renderList = () =>{
        if(auth.authenticate && auth.admin){
          return (
            <ul>
            <li> <NavLink exact to={`/`}>Home</NavLink></li>
            <li> <NavLink  to={`/page`}>Page</NavLink></li>
            <li> <NavLink to={`/category`}>Category</NavLink></li>
            <li> <NavLink to={`/products`}>Products</NavLink></li>
            <li> <NavLink to={`/orders`}>Orders</NavLink></li>
            <li> <NavLink to={`/store`}>Store</NavLink></li>
            </ul>
          );
        
        }else if(storeauth.authenticate && storeauth.store){
          return (
            <ul>
            <li> <NavLink exact to={`/storeHome`}>Home</NavLink></li>
            <li> <NavLink to={`/storeProduct`}>Products</NavLink></li>
            <li> <NavLink to={`/storeOrder`}>Orders</NavLink></li>
            </ul>
          )
        }else{
          return null;
        }
      }

    return (
        <>
            <Header />

            {
                props.sidebar ?

                    <Container fluid>
                        <Row>
                            <Col md={2} className="sidebar">
                            {renderList()}
                            </Col>
                            <Col md={10} style={{ marginLeft: 'auto', paddingTop: '60px'}}>
                                {props.children}
                            </Col>
                        </Row>
                    </Container>
                    :
                    props.children
            }
     </>
    )
}
