import React from 'react';
import Landing from './Landing/Landing';
import NavBar from './NavBar';
import Steppers from './Steppers';
// import Carousel from './Carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import './App.css';

export default class extends React.Component {
render() {
  return(
      <div className="title">
          <NavBar/>
          <Steppers/>
          {/*<Carousel/>*/}
        <Landing />
      </div>
  )
}
}
