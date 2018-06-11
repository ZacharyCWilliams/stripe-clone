import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

function IntroButtons(props){
    return (
          <Router>
            <ul id="Menu2-Ul">
              <li className="menu2-itemid" className="button1-hover" id="menu2-itemid" className="menu2-item1class"><Link to="/register" className="menu2-item" id="menu2-itemid">Create Account</Link></li>
              <li id="menu2-item2id" className="button-hover"><Link to="/contact/sales" className="menu2-item" id="menu2-item2id">Contact Sales</Link></li>
            </ul>
          </Router>
    );
}

export default IntroButtons;
