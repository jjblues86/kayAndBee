import React from 'react';


export default class ContactUs extends React.Component {

    render() {
        return(
            <section className="my-5 py-5">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <h4><strong>Contact Us</strong></h4>
                        <form action="https://formspree.io/kaddijah-sarjo@live.com" method="POST" >
                            <div className="form-group">
                                <input type="text" name="_valid[name]" required className="form-control" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" name="_valid[email]" required className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="tel" name="_valid[tel]" required className="form-control" placeholder="Phone"/>
                            </div>
                            <textarea
                                type="text"
                                className="form-control"
                                name="_valid[message]"
                                required
                                cols="30" rows="3" placeholder="Message">
                         </textarea>

                            <button type="submit" className="btn-outline-secondary text-uppercase mt-1">
                                    <i className="fa fa-paper-plane-o" aria-hidden="true"/>
                                    <i className="fab fa-telegram-plane" />
                                    &nbsp;Send
                                </button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
