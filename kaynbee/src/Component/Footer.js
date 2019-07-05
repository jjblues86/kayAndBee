import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <FooterContainer>
            {/* Social Icons */}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <i className="fab fa-facebook-f" />
                    </div>
                    <div className="col-2">
                        <i className="fab fa-twitter" />
                    </div>
                    <div className="col-2">
                        <i className="fab fa-instagram" />
                    </div>
                    <div className="col-2">
                        <i className="fab fa-whatsapp" />
                    </div>
                </div>
            </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Kay & Bee Events - All Rights Reserved
                    </p>
                </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
background: var(--mainDark);
padding-top: 3rem;
color: var(--mainDark);
}

.footer-bottom {
padding-top: 3rem;
padding-bottom: 2rem;
text-align: center;
}

i{
   font-size: 1.875rem;
   color: var(--mainDark);
  }
  
  i:hover{
  color: var(--mainBlue);
  cursor: pointer;
  }
  
`;