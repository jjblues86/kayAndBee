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
            img,
            img1
        } = this.props.item;
        return (
            <InfoConsumer>
                {value => (
                    <div className="media mt-5">

                    {/*<div className="card container mt-2 mb-3 p-5">*/}
                        <div className="card-body">
                            <h5 key={id} className="card-title">{aboutTitle}</h5>
                            <p className="card-text">{aboutText}</p>
                            <h2 className="mb-0">{title}</h2>
                            {/*<p>{description}</p>*/}
                            <img
                                src={img}
                                alt={title}
                                // className="img-thumbnail img-fluid"
                                style={{width: '20%'}}
                                className="mr-3"/>
                                <br/>
                            <h2 className="mb-0">{title1}</h2>
                            {/*<p>{description1}</p>*/}
                            <img
                                src={img}
                                alt={title}
                                // className="img-thumbnail img-fluid"
                                style={{width: '20%'}}
                                className="mr-3"/>
                        </div>
                    </div>
                )}
            </InfoConsumer>
        );
    }
}

export default AboutCard;
