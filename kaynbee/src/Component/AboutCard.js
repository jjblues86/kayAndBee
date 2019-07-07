import React, {Component} from 'react';
import { InfoConsumer } from "./context";


class AboutCard extends Component {
    render() {

        const {
            id,
            aboutTitle,
            aboutText,
            title,
            description,
            title1,
            description1,
            img
        } = this.props.item;
        return (
            <InfoConsumer>
                {value => (
                    <div className="card container mt-2 mb-3 p-5">
                        <div className="card-body">
                            <h5 key={id} className="card-title">{aboutTitle}</h5>
                            <p className="card-text">{aboutText}</p>
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
                )}
            </InfoConsumer>
        );
    }
}

export default AboutCard;
