import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

export default class WeaponCard extends Component {
    render() {
        const {name, link} = this.props;
        return (
            <Scrollchor to={'#' + link} className="nav-link" animate={{offset: -100, duration: 600}}>
                <div className="weapon-card" >
                    {name}
                </div>
            </Scrollchor>
        );

    }
}