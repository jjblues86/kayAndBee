import React from 'react';
import { InfoConsumer } from '../context';
import Info from '../Info';
import Landing from "../Landing/Landing";

export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <Landing />

                    <InfoConsumer>
                        {value => {
                            return value.info.map(item => {
                                return <Info key={item.id} item={item} />;
                            });
                        }}

                    </InfoConsumer>

                </div>
            </div>
        );
    }
}