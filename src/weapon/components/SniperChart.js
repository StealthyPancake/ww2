import React, { Component } from 'react';
import {Checkbox} from 'semantic-ui-react';
import {Bar, BarChart, Legend, Tooltip, XAxis, YAxis} from 'recharts';
import sniperData, {m30RifleData} from '../sniperData';
import {processSniperData} from './WeaponDataHelper';

const data = processSniperData(sniperData);
const dataWithM30 = processSniperData([...sniperData, m30RifleData]);

class SniperChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            containerWidth: null,
            data: data
        }
    }

    componentDidMount() {
        this.fitParentContainer();
        window.addEventListener('resize', this.fitParentContainer);
    }

    componentWillUnmount() {
        window.addEventListener('resize', this.fitParentContainer);
    }

    toggleM30 = () => {
        if(this.state.data === data) {
            this.setState({data: dataWithM30});
        } else {
            this.setState({data: data});
        }
    }

    fitParentContainer = () => {
        const { containerWidth } = this.state;
        let currentContainerWidth = window.innerWidth - 20;
        currentContainerWidth = Math.max(300, currentContainerWidth);
        currentContainerWidth = Math.min(currentContainerWidth, 800);

        const shouldResize = containerWidth !== currentContainerWidth;

        if(shouldResize) this.setState({containerWidth: currentContainerWidth});
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
            <div>
                <label>Include M30 Drilling Rifle Bullet: </label>
                <Checkbox toggle onClick={this.toggleM30} style={{marginLeft: 20}} />
            </div>
            </div>
        )
    }
}

export default SniperChart;