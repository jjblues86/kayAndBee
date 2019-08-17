import React, {Component} from 'react';
import { InfoConsumer } from "./context";


class AboutCard extends Component {
    render() {

        const {
            img,
        } = this.props.item;
        return (
            <InfoConsumer>
                {value => (
                    // <div>
                    <div className="card mb-3">
                    <img src={img} className="img-responsive mx-auto" alt="Kaddijah" width="300" height="300"/>
                    <div className="card-body">
                      <p className="card-text text-justify">We are located in the greater Seattle area. We pride ourselves in providing elegant and affordable event decorations. We are aware of how stressful planning your big day can be; our job is to provide you with ease when it comes to designing your venue. We make sure that everything looks beautiful and unique to your style. Let us bring your event to life.</p>
                    </div>
                  </div>
                //   </div>      
                )}
            </InfoConsumer>
        );
    }
}

export default AboutCard;
