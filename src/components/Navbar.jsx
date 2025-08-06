import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container-fluid px-4">
        {/* Logo + Brand */}
        <Link className="navbar-brand d-flex align-items-center me-4" to="/">
          <img src="/e-logo.png" alt="logo" width="30" height="30" className="me-2" />
          <span className="fw-bold">E-BASKET</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Main Nav Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Category Dropdown */}
          <div className="dropdown me-3">
            <button
              className="btn btn-outline-success dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              🥦 Available Groceries
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/category/fruits">Fruits</Link></li>
              <li><Link className="dropdown-item" to="/category/vegetables">Vegetables</Link></li>
              <li><Link className="dropdown-item" to="/category/snacks">Snacks</Link></li>
              <li><Link className="dropdown-item" to="/category/beverages">Beverages</Link></li>
            </ul>
          </div>

          {/* Center Nav Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/shops">Shops</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/offers">Offers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                <li><Link className="dropdown-item" to="/terms">Terms</Link></li>
                <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
              </ul>
            </li>
          </ul>

          {/* Right Side Elements */}
          <div className="d-flex align-items-center gap-3">
            {/* Search Bar */}
           

          

            {/* Cart with Counter */}
            <Link to="/cart" className="btn btn-outline-success position-relative">
           
              <FaShoppingCart />
               {/* View Cart */}
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Seller Button */}
            <Link to="/seller" className="btn btn-success d-none d-lg-block">
              Become a Seller
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;