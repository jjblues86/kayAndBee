import React from 'react';
import NavBar from './Component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer';

// React Router Import
import { Switch, Route } from 'react-router-dom';
// Import Dashboard
import Home from './Component/Dashboard/Home';
import Services from './Component/Dashboard/Services';
import About from './Component/Dashboard/AboutUs';
import Contacts from './Component/Dashboard/ContactUs';
import Details from './Component/Dashboard/Details';


import './App.css';
import Portfolio from "./Component/Portfolio";

export default class extends React.Component {
render() {
  return(
      <div className="title">
          <NavBar/>
          <br />
          <br/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/services" component={Services}/>
              <Route path="/about" component={About}/>
              <Route path="/contacts" component={Contacts}/>
              <Route path="/details" component={Details}/>
              <Route path="/portfolio" component={Portfolio}/>
          </Switch>
          <br/>
          <Footer/>
      </div>
  )
}
}
