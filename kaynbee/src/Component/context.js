import React from 'react';
import {serviceInfo, reviews, detailInfo} from '../data';

const InfoContext = React.createContext();

class InfoProvider extends React.Component {

    state = {
        info: serviceInfo,
        reviews: reviews,
        detailInfo: detailInfo,
    };

    render() {
        return(
           <InfoContext.Provider value={{
               info: this.state.info,
               reviews: this.state.reviews,
               headerTitle: this.state.headerTitle,
               headerText: this.state.headerText,
               detailInfo: this.state.detailInfo,
               name: this.state.name,
               avatar: this.state.avatar,
               comment: this.state.comment
           }}>
               {this.props.children}
           </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };