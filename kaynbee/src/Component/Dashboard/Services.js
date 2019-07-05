import React from 'react';
import ServiceCard from '../ServiceCard';
import { InfoConsumer } from "../context";

export default class Services extends React.Component {
    render() {
        return(
            <InfoConsumer>
                {value => {
                    return value.service.map(item => {
                        return <ServiceCard key={item.id} item={item}/>
                    })
                }}
            </InfoConsumer>
        )
    }
}