import React, {Component} from 'react';
import { InfoConsumer } from '../context';
import styled from 'styled-components';



class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    const {
                        headerTitle,
                        img,
                        title,
                        title1,
                        description,
                        description1
                    }  = data.detailInfo;
                    return (
                        <React.Fragment>
                            <DetailsHeader className="container-fluid align-items-center">
                                <h1 className="font-weight-bold">{headerTitle}</h1>
                            </DetailsHeader>
                           
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
    text-transform: uppercase;
    // color: var(--mainWhite);
    text-align: center;
   
   p{
   padding-left: 10%;
   padding-right: 10%;
   margin-bottom: 10%;
   background-color: var(--mainDark);
    }

    h1{
        color: var(--mainDark);
    }
   
   i{
   font-size: 1.875rem;
   color: var(--mainDark);
  }
  
  i:hover{
  color: var(--mainBlue);
  cursor: pointer;
  }
  
  @media(max-width: 760px){
  h1,
  h4 {
  color: var(--mainWhite);
  width: 100%
  }
  }
    `;
