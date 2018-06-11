import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

function Intro(props){
    return (
      <section id="intro">
        <div className="intro-container">
          <Announcement />
          <h1 className="intro-h1">The new standard in online payments</h1>
          <p className="intro-p">
            Stripe is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
          </p>
          <Router>
            <ul id="Menu2-Ul">
              <li className="menu2-itemid" className="button1-hover" id="menu2-itemid" className="menu2-item1class"><Link to="/register" className="menu2-item" id="menu2-itemid">Create Account</Link></li>
              <li id="menu2-item2id" className="button-hover"><Link to="/contact/sales" className="menu2-item" id="menu2-item2id">Contact Sales</Link></li>
            </ul>
          </Router>
        </div>
      </section>
    );
}

export default Intro;
