import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from 'react-router-dom'
import { signout } from "../../actions";

const  Header =(props) => {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const storeauth = useSelector(state => state.storeauth)

  const logout = () => {
    dispatch(signout());
  }

  const renderName = () =>{
    if(auth.authenticate && auth.admin){
      return (
        <Link to="/" className="navbar-brand">{auth.admin.fullName}</Link>
        );
    }else if(storeauth.authenticate && storeauth.store){
      return (
        <Link to="/storeProfile" className="navbar-brand">{storeauth.store.shopName}</Link>
        );
    }else{
      return (  
          <Navbar.Brand >Shopisthan Dashboard</Navbar.Brand> 
        );
    
    }
  }


  const renderLoggedInLinks = () => {

    return (
      <Nav>

        <li className="nav-item">
          <span className="nav-link" onClick={logout}>SignOut</span>


        </li>

      </Nav>
    );
  }
  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link" >Signin</NavLink>

        </li>

        <li className="nav-item">
          <NavLink to="/signup" className="nav-link" >Signup</NavLink>

        </li>

      </Nav>
    );
  }


  return (
    <Navbar collapseOnSelect fixed = "top" expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
      <Container fluid>
        {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
        {/* <Link to="/" 
        // className="navbar-brand"
        > */}
        {renderName()}
        
        {/* </Link> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>

          {auth.authenticate || storeauth.authenticate? renderLoggedInLinks() : renderNonLoggedInLinks()}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header
