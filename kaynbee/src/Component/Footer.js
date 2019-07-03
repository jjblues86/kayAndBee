import React from 'react';

const Footer = () => {
    return(
        <div className="main-footer">
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
    )
}

export default Footer;