import React, { Component } from 'react';
import './App.css';
import Announcement from './Announcement.js'
import IntroButtons from './IntroButtons.js'
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
          <h1 className="intro-h1">
            The new standard in online payments
          </h1>
          <p className="intro-p">
            Stripe is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
          </p>
          <IntroButtons />
        </div>
      </section>
    );
}

export default Intro;
