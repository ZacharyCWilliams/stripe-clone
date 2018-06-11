import React, { Component } from 'react';
import './App.css';

function Announcement(props){
    return (
          <a className="announcement">
            <span className="new-sign">
              New
            </span>
            <span className="announcement-message">
              Build and scale a recurring business model with Stripe Billing
            </span>
          </a>
    );
}

export default Announcement;
