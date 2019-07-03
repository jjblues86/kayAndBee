import React from 'react';
import Landing from './Landing/Landing';
import NavBar from './Component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Component/Footer';

import './App.css';

export default class extends React.Component {
render() {
  return(
      <div className="title">
          <NavBar/>

          <Landing />
          <Footer/>
      </div>
  )
}
}
