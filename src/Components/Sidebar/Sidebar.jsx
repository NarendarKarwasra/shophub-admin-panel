import React from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";
import cart_sidebar from '../../assets/cart-sidebar.png';
import list_sidebar from '../../assets/list-sidebar.png';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration: "none"}}>
        <div className="sidebar-item">
            <img src={cart_sidebar} alt="" />
            <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration: "none"}}>
        <div className="sidebar-item">
            <img src={list_sidebar} alt="" />
            <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
