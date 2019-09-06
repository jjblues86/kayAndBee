import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <FooterContainer>
        <div className="main-footer">
            <div className="footer-middle">
            {/* Social Icons */}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-1">
                        <a href="https://instagram.com/kay_and_bee_events?igshid=awwxanpb9zem"> <i className="fab fa-instagram"/></a>
                    </div>
                </div>
            </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Kay & Bee Events - All Rights Reserved
                    </p>
                </div>
        </div>
        </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
background: var(--mainDark);
padding-top: 3rem;
color: var(--mainBlack);
}

.footer-bottom {
padding-top: 3rem;
padding-bottom: 2rem;
text-align: center;
}

i{
   font-size: 1.875rem;
   color: var(--mainWhite);
  }
  
  i:hover{
  color: var(--lightPink);
  cursor: pointer;
  }
`;