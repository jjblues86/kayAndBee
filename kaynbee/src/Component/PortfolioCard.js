import React, {Component} from 'react';
import { InfoConsumer } from "./context";

class PortfolioCard extends Component {
    render() {
        const {
            id,
            headerTitle,
            headerText,
            title,
            description,
            title1,
            description1,
            img,
            img1,
            img2,
            img3,
            img4,
            img5,
        } = this.props.item;
        return (
            <InfoConsumer>
                {value => (
                    <div className="media mt-5">

                        {/*<div className="card container mt-2 mb-3 p-5">*/}
                        <div className="card-body">
                            <h5 key={id} className="card-title">{headerTitle}</h5>
                            {/*<p className="card-text">{headerText}</p>*/}
                            {/*<h2 className="mb-0">{title}</h2>*/}
                            {/*<p>{description}</p>*/}
                            {/*<img*/}
                            {/*    src={img}*/}
                            {/*    alt={title}*/}
                            {/*    // className="img-thumbnail img-fluid"*/}
                            {/*    style={{width: '20%'}}*/}
                            {/*    className="mr-3"/>*/}
                            <h2 className="mb-0">{title1}</h2>
                            <p>{description1}</p>
                            <img
                                src={img1}
                                alt={title}
                                className="img-thumbnail img-fluid"/>
                            <img
                                src={img2}
                                alt={title}
                                className="img-thumbnail img-fluid"/>
                            <img
                                src={img3}
                                alt={title}
                                className="img-thumbnail img-fluid"/>
                            <img
                                src={img4}
                                alt={title}
                                className="img-thumbnail img-fluid"/>
                            <img
                                src={img5}
                                alt={title}
                                className="img-thumbnail img-fluid"/>
                        </div>
                    </div>
                )}
            </InfoConsumer>
        );
    }
}

export default PortfolioCard;