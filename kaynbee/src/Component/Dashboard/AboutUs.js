import React from 'react';
import AboutCard from '../AboutCard';
import { InfoConsumer } from "../context";

export default class AboutUs extends React.Component {
    render() {
        return(
            <InfoConsumer>
                {value => {
                    return value.about.map(item => {
                        return <AboutCard key={item.id} item={item}/>
                    })
                }}
            </InfoConsumer>
        )
    }
}