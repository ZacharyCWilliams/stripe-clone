import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

function Menu(props) {
    return (
      <div className="Menu">
        <div className="Menu-Container">
        <Router>
            <ul id="Menu-Ul">
              <li className="menu-item"><Link to="/" className="menu-item">Stripe Clone</Link></li>
              <li className="menu-item"><Link to="/products" className="menu-item">Products</Link></li>
              <li className="menu-item"><Link to="/developers" className="menu-item">Developers</Link></li>
              <li className="menu-item"><Link to="/company" className="menu-item">Company</Link></li>
              <li className="menu-item"><Link to="/pricing" className="menu-item">Pricing</Link></li>
              <li className="menu-item"><Link to="/support" className="menu-item">Support</Link></li>
              <li className="menu-item"><Link to="/sign-in" className="menu-item">Sign In</Link></li>
            </ul>
        </Router>
        </div>
      </div>
    );
}

export default Menu;
