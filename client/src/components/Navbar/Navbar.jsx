import React from "react";
import "./navbar.css";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/apiCalls";

const Navbar = () => {
  const user = useSelector((state)=>state.user.currentUser)
  const quantity = useSelector((state)=>state.cart.quantity)
  const dispatch = useDispatch()
  const logoutHandler = (e)=>{
    e.preventDefault()
    logout(dispatch)
  }
  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <i class="ri-cup-fill"></i>
        <span>First Coffe</span>
      </Link>

      <ul className="navbar-list">
        <li>
          <Link className="active"to="/">
            Home
          </Link>
        </li>
       
      
        {user ? (
           <li>
           <Link to="/product">product</Link>
         </li>
        ):(<></>)}
      </ul>
      <div className="navbar-main">
        {
          user ? (
            <>
              <span className="account-name">Hello <span className="nav-name"> {user.user.firstName}  {user.user.lastName}  </span></span>
              <span className="nav-logout" onClick={logoutHandler}>Logout</span>
              <li><Link><i class="ri-shopping-cart-line"></i> Cart ({quantity})</Link></li>
            </>
          ):(
            <>
              <Link to="/login" className="navbar-user">
          <i class="ri-user-fill"></i>Sign In
        </Link>
        <Link to="/register">Register</Link>
        <div className="bx bx-menu" id="menu-icon"></div>
            </>
          )
        }
      
      </div>
    </div>
  );
};

export default Navbar;
