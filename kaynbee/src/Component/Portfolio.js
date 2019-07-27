import React, {Component} from 'react';
import PortfolioCard from './PortfolioCard';
import { InfoConsumer } from "./context";


class Portfolio extends Component {
    render() {
        return (
            <InfoConsumer>
                {value => {
                    return value.portfolio.map(item => {
                        return <PortfolioCard key={item.id} item={item}/>
                    })
                }}

            </InfoConsumer>
        );
    }
}

export default Portfolio;