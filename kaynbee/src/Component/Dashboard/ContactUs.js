import React from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

export default class ContactUs extends React.Component {
    render() {
        return(
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <iframe
                            src="https://www.google.com/maps/d/embed?mid=1zyE8YeUrY9W5cUgDwFc00j-upZ1mv0tt"
                            style={{
                                border: '0',
                                width: '100%',
                                height: '315px',
                                frameborder:'0'
                            }}
                            allowFullScreen
                        />
                    </div>
                    <div className="col-md-5">
                        <h4><strong>Contact Us</strong></h4>
                        <form action="https://formspree.io/jeromejoof@yahoo.com" method="POST" >
                            {/*<input type="hidden" name="form-name" value="contacts" />*/}

                            <div className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="tel" name="tel" className="form-control" placeholder="Phone"/>
                            </div>
                            <textarea
                                className="form-control"
                                name="message"
                                cols="30" rows="3" placeholder="Message">
                         </textarea>

                            <Button type="submit" className="btn text-uppercase mt-1">
                                    <i className="fa fa-paper-plane-o" aria-hidden="true"/>
                                    <i className="fab fa-telegram-plane" />
                                    &nbsp;Send
                                </Button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
