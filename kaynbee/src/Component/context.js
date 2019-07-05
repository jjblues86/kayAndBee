import React from 'react';
import {serviceInfo, reviews, detailInfo, service} from '../data';

const InfoContext = React.createContext();

class InfoProvider extends React.Component {

    state = {
        info: serviceInfo,
        reviews: reviews,
        detailInfo: detailInfo,
        service: service
    };

    getItem = id => {
        const item = this.state.info.find(item => item.id ===id);
        return item
    }

    handleDetail = id => {
        const item = this.getItem(id);
        this.setState(() => {
            return {
                detailInfo: item
            }
        })
    }

    render() {
        return(
           <InfoContext.Provider value={{
               info: this.state.info,
               reviews: this.state.reviews,
               headerTitle: this.state.headerTitle,
               headerText: this.state.headerText,
               detailInfo: this.state.detailInfo,
               service: this.state.service,
               name: this.state.name,
               avatar: this.state.avatar,
               comment: this.state.comment,
               handleDetail: this.handleDetail
           }}>
               {this.props.children}
           </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };