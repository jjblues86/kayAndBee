import React, {Component} from 'react';
import { InfoConsumer } from "./context";

class ServiceCard extends Component {
    render() {
        const {
            id,
            serviceTitle,
            title,
            title1,
            description,
            description1,
            description2,
            } = this.props.item;

        return (
            <InfoConsumer>
                {value => (
                    <div className="card container mt-2 mb-3 p-5">
                        <div className="card-body">
                            <h2 key={id} className="card-title">{serviceTitle}</h2>
                            <br/>
                            <h2 className="mb-3">{title}</h2>
                            <p>{description}</p>
                            <h2 className="mb-3">{title1}</h2>
                            <p>{description1}</p>
                            <p className="text-center small">{description2}</p>
                        </div>
                    </div>
                )}
            </InfoConsumer>
        );
    }
}

export default ServiceCard;