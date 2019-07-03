import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <FooterContainer>
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h3>Instagram</h3>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h3>Facebook</h3>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h3>Email</h3>
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
color: var(--mainWhite);
}

.footer-bottom {
padding-top: 3rem;
padding-bottom: 2rem;
}
`;