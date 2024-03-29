import React from 'react';
import {serviceInfo, detailInfo, about, portfolio} from '../data';

const InfoContext = React.createContext();

class InfoProvider extends React.Component {

    state = {
        info: serviceInfo,
        detailInfo: detailInfo,
        about: about,
        portfolio: portfolio
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
               serviceInfo: this.state.serviceInfo,
               headerTitle: this.state.headerTitle,
               headerText: this.state.headerText,
               detailInfo: this.state.detailInfo,
               portfolio: this.state.portfolio,
               about: this.state.about,
               name: this.state.name,
               handleDetail: this.handleDetail
           }}>
               {this.props.children}
           </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };