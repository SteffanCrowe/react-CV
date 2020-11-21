import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import About from '../Components/About';
import Resume from '../Components/Resume';
import Portfolio from '../Components/Portfolio';
import Contact from '../Components/Contact';

class AutoConsult extends Component {

  render() {
    return (
        <header id="home">
            <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">AutoConsult</h1>
            </div>
            </div>
        </header>
    );
  }
}

export default AutoConsult;
