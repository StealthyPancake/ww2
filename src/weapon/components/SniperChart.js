import React, { Component } from 'react';
import {Bar, BarChart, Legend, Tooltip, XAxis, YAxis} from 'recharts';
import sniperData from '../sniperData';

class SniperChart extends Component {
    constructor(props) {
        super(props);
        this.fitParentContainer = this.fitParentContainer.bind(this);

        this.state = {
            containerWidth: null,
            data: this.processData()
        }
    }

    componentDidMount() {
        this.fitParentContainer();
        window.addEventListener('resize', this.fitParentContainer);
    }

    componentWillUnmount() {
        window.addEventListener('resize', this.fitParentContainer);
    }

    fitParentContainer() {
        const { containerWidth } = this.state;
        let currentContainerWidth = window.innerWidth - 20;
        currentContainerWidth = Math.max(300, currentContainerWidth);
        currentContainerWidth = Math.min(currentContainerWidth, 800);

        const shouldResize = containerWidth !== currentContainerWidth;

        if(shouldResize) this.setState({containerWidth: currentContainerWidth});
    }

    calcShotsToKill(amount, multiplier, health) {
        return Math.ceil(health / (amount * multiplier));
    }

    processData() {
        return sniperData
            .map(weapon => {
                let shots = {head: 1, chest: 1, ab: 1, legs: 1, feet: 1};
                let damage = weapon.damage[0];
                let multiplier = weapon.multiplier;

                shots.head = this.calcShotsToKill(damage.amount, multiplier.head, 100);
                shots.chest = this.calcShotsToKill(damage.amount, multiplier.chest, 100);
                shots.ab = this.calcShotsToKill(damage.amount, multiplier.ab, 100);
                shots.legs = this.calcShotsToKill(damage.amount, multiplier.legs, 100);
                shots.feet = this.calcShotsToKill(damage.amount, multiplier.feet, 100);

                return {
                    name: weapon.name,
                    rof: weapon.rof,
                    damage: weapon.damage,
                    head: shots.head,
                    chest: shots.chest,
                    ab: shots.ab,
                    legs: shots.legs,
                    feet: shots.feet
                }
            });
    }

    render () {

        return (
            <div style={{textAlign:'center'}}>
            <label>Rate of Fire</label>
            <BarChart width={this.state.containerWidth} height={300} data={this.state.data} margin={{top: 5, right: 30, left:20, bottom: 5}}>
                <Legend />
                <XAxis type="category" dataKey="name" xAxisId="bottom" orientation="bottom"/>
                <XAxis type="category" dataKey="rof" xAxisId="top"  orientation="top"/>
                <YAxis type="number" label={{value: 'Shots To Kill', angle: -90, position: 'left'}} tickCount={3}/>
                <Tooltip />
                
                <Bar dataKey="head" xAxisId="bottom" fill="#3D2FA3" />
                <Bar dataKey="chest" xAxisId="bottom" fill="#39A58A" />
                <Bar dataKey="ab" xAxisId="bottom" fill="#B3E029" />
                <Bar dataKey="legs" xAxisId="bottom" fill="#FFDB58" />
                <Bar dataKey="feet" xAxisId="bottom" fill="#EC732B" />
            </BarChart>
            </div>
        )
    }
}

export default SniperChart;