import React, {Component} from 'react';
import { InfoConsumer } from '../context';
import styled from 'styled-components';
import Reviews from '../Reviews';

class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    const {
                        id,
                        headerTitle,
                        headerText,
                        img,
                        img1,
                        title,
                        title1,
                        description,
                        description1
                    }  = data.detailInfo;
                    return (
                        <React.Fragment>
                            <DetailsHeader className="container-fluid align-items-center">
                                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                                <p>{headerText}</p>
                                {/* Social Icons */}
                                {/*<div className="container mt-5">*/}
                                {/*    <div className="row justify-content-center">*/}
                                {/*        <div className="col-2">*/}
                                {/*            <i className="fab fa-facebook-f" />*/}
                                {/*        </div>*/}
                                {/*        <div className="col-2">*/}
                                {/*            <i className="fab fa-twitter" />*/}
                                {/*        </div>*/}
                                {/*        <div className="col-2">*/}
                                {/*            <i className="fab fa-instagram" />*/}
                                {/*        </div>*/}
                                {/*        <div className="col-2">*/}
                                {/*            <i className="fab fa-whatsapp" />*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </DetailsHeader>
                            {/*Nav Link*/}
                            <div className="container">
                                <ul className="nav nav-tabs">
                                    {/*Services Link*/}
                                    <li className="nav-item">
                                        <a href="#services"
                                           className="nav-link active"
                                           role="tab"
                                           data-toggle="tab">Services</a>
                                    </li>
                                    {/*Reviews Link*/}
                                    <li className="nav-item">
                                        <a href="#reviews"
                                           className="nav-link"
                                           role="tab"
                                           data-toggle="tab">Reviews</a>
                                    </li>
                                </ul>
                                {/*Tab Pane*/}
                                <div className="tab-content mb-5">
                                    {/*Reviews Tab*/}
                                    <div id="services" className="tab-pane in active text-center mt-5" role="tabpanel">
                                        <h2 className="mb-3">{title}</h2>
                                        <p>{description}</p>
                                        <h2 className="mb-3">{title1}</h2>
                                        <p>{description1}</p>
                                        <img
                                            src={img}
                                            alt={title}
                                            className="img-thumbnail img-fluid"/>
                                        <img
                                            src={img1}
                                            alt={title}
                                            className="img-thumbnail img-fluid"/>
                                    </div>
                                    {/*Reviews*/}
                                    <div className="tab-pane" id="reviews" role="tabpanel">
                                        < Reviews />
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }}
            </InfoConsumer>
        );
    }
}

export default Details;

const DetailsHeader = styled.header`
    background: linear-gradient(rgba(110,110,110), rgba(255,255,255));
    height: 100vh;
    text-transform: uppercase;
    color: var(--mainWhite);
    text-align: center;
    
    h1{
    padding-top: 10%;
   }
   
   h4{
   color: var(--mainDark);
   }
   
   p{
   padding-left: 10%;
   padding-right: 10%;
   margin-bottom: 10%;
 
   }
   
   i{
   font-size: 1.875rem;
   color: var(--mainDark);
  }
  
  i:hover{
  color: var(--mainBlue);
  cursor: pointer;
  }
  
  na-item{
  height: 18.75rem;
  }
  
  @media(max-width: 760px){
  h1,
  h4 {
  color: var(--mainWhite);
  }
  }
    `;
