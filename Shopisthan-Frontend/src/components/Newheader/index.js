import React, { useEffect, useState } from 'react'
import Shopisthan__logo from '../../img/shopisthan-logo.png'
import WishlistIcon from '../../img/whislist.jpeg';
import HomeIcon from '../../img/homeicon.jpg';
import ExploreIcon from '../../img/explore-icon.svg';
import ProfilePic from '../../img/profile-pic.jpeg';
import Notification from '../../img/notfi.png';
import Cart from '../../img/cart-icon.svg';
import Shopisthan__logo_bolte from '../../img/shopisthan_logo_bolte.png';
import './style.css';
import { 
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu
} from '../MaterialUI';
import {useDispatch, useSelector} from 'react-redux';
import { userLogin, signout } from '../../actions';
import { Link, Router,  BrowserRouter, NavLink} from 'react-router-dom';


/**
* @author
* @function HomeNavbar
**/

const HomeNavbar = (props) => {

  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state=> state.auth);

  const login = () =>{
    dispatch(userLogin({email,password}))
 }

 const logout = () => {
   dispatch(signout());
 }

 useEffect(() => {
   if(auth.authenticate){
     setLoginModal(false)
   }
 }, [auth.authenticate])

 const renderLoggedInMenu  = () =>{
    return (
  
      <DropdownMenu
        menu={
          <a className = "fullName" 
          // onClick={() => setLoginModal(true)}
          >
            {auth.user.fullName}
          </a>
        }
        menus={[
          { label: 'My Profile', href: '/myprofile', icon: null },
          { label: 'Cart', href: '', icon: null },
          { label: 'Orders', href: '', icon: null },
          { label: 'Wishlist', href: '', icon: null },
          { label: 'My Chats', href: '', icon: null },
          { label: 'Coupons', href: '', icon: null },
          { label: 'Rewards', href: '', icon: null },
          { label: 'Gift Cards', href: '', icon: null },
          { label: 'Notifications', href: '', icon: null },
          { label: 'Logout', href: '', icon: null, onClick:logout}
        ]}
        
      />
     ) ;

  }

  const renderNonLoggedInMenu =() =>{
    return (
   
     <DropdownMenu
       menu={
         <a className="loginButton" onClick={() => setLoginModal(true)}>
           Login
         </a>
       }
       menus={[
        //  { label: 'My Profile', href: '', icon: null },
         { label: 'Shopisthan About us', href: '', icon: null },
         { label: 'Orders', href: '', icon: null },
         { label: 'Wishlist', href: '', icon: null },
         { label: 'Rewards', href: '', icon: null },
         { label: 'Gift Cards', href: '', icon: null },
       ]}
       firstMenu={
         <div className="firstmenu">
           <NavLink to="/signup" className="nav-link" >Signup</NavLink>
           <span>New Customer?</span>
         </div>
       }
     />
    ) ;
   }

    return(
      
        <div className="Navbar__container">
          <Modal 
        visible={loginModal}
        onClose={() => setLoginModal(false)}
      >
              <div className="authContainer">
          <div className="row">
            <div className="leftspace">
            <img src={Shopisthan__logo_bolte} alt="Logo" />
              <h2>Login</h2>
              <p>Wellcom to Shopisthan, We strive to have a positive impact on customers, small businesses, the economy, and communities.</p>
            </div>
            <div className="rightspace">
          

                <MaterialInput 
                  type="text"
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <MaterialInput 
                  type="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                />
               
                <MaterialButton 
                  title="Login"
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{
                    margin:'40px 0 20px 0'
                  }}
                  onClick={login}/>
                
                   <p>OR</p>
                   <MaterialButton 
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  style={{
                    margin:'20px 0'
                  }}
                />
                

            </div>
          </div>
        </div>
        </Modal>
        <div className="Navbar__items">
            <div className="Navbar__logo">
                <img src={Shopisthan__logo} alt="Shopisthan Logo" />
            </div>
            <div className="Navbar__search">
                <div class=".Navbar__wrapper">
                   <div class=".Navbar__searchBar">
                        <input id="searchQueryInput"
                        type="text"
                        name="searchQueryInput"
                        placeholder="Search"
                       />
                        {/* <button id="searchQuerySubmit"
                        type="submit"
                        name="searchQuerySubmit">
                            <img alt="Search" src={SearchIcon}/>
                        </button> */}
                    </div>
                </div>
            </div>
            <div className="Navbar__menu">
                <div className="Navbar__menuItem">
                     <img  height='30' width='30' src={HomeIcon} alt="Home" />
                    <div>Home</div>
                </div>
                <div className="Navbar__menuItem">
                     <img  height='30' width='30'  src={ExploreIcon} alt="Explore" />
                    <div>Explore Stores</div>
                </div>
                <div className="Navbar__menuItem">
                     <img src={WishlistIcon}  height='30' width='30' alt="My Orders" />
                    <div>wishlist</div>
                </div>
                <div className="Navbar__menuItem">
                     <img font-weight= 'bold' src={Notification}  height='30' width='30' alt="" />
                    <div>Notification</div>
                </div>
            <div className="rightMenu">
          {auth.authenticate ? 
           renderLoggedInMenu() :  renderNonLoggedInMenu() 
          }
          <DropdownMenu
            menus={[
              { label: 'Notification Preference', href: '', icon: null },
              { label: 'Sell on flipkart', href: '', icon: null },
              { label: '24x7 Customer Care', href: '', icon: null },
              { label: 'Advertise', href: '', icon: null },
              { label: 'Download App', href: '', icon: null }
            ]}
          />
           <div className="Navbar__menuItem">
            {/* <a className="cart">
              <IoIosCart />
              <span style={{ margin: '0 10px' }}>Cart</span>
            </a> */}
          </div>
        </div>
            <div className="Navbar__menuItem">
                     <img  height='30' width='30' src={Cart} alt="Home" />
                    <div>Cart</div>
                </div>
                <img className="Navbar__profilPic" src={ProfilePic} alt="Profile Pic"  />
            
            </div>
            </div>
    </div>
    )
}

export default HomeNavbar