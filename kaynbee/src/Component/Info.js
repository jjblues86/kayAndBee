import React, {Component} from 'react';
import { InfoConsumer} from "./context";
import { Link } from 'react-router-dom';

class Info extends Component {
    render() {

        const {
            id,
            headerTitle,
            headerText,
            img,
        } = this.props.item;

        return (
                <InfoConsumer>
                    {value => (

                        <div className="col-5 col-lg-3 mx-auto mb-5">
                            <div className="card" style={{width:'15rem'}}>
                                <img src={img} alt={headerTitle} className="card-img-top"/>
                                <div className="card-body">
                                    <h3 className="card-title text-uppercase">{headerTitle}</h3>
                                    <p className="card-text">{headerText}</p>
                                    <Link
                                        onClick={() => value.handleDetail(id)}
                                        to="/details"
                                        className="btn btn-outline-primary text-uppercase">
                                        Show
                                    </Link>
                                </div>
                            </div>
                        </div>

                    )}
                </InfoConsumer>
        );
    }
}

export default Info;