import React, { Component } from 'react';
import {Bar, BarChart, Legend, Tooltip, XAxis, YAxis, Label} from 'recharts';
import WeaponTooltip from './WeaponTooltip';

class StackedBarChart extends Component {

    constructor(props) {
        super(props);
        this.fitParentContainer = this.fitParentContainer.bind(this);

        let initialData = props.data;
        
        this.state = {
            containerWidth: null,
            data: initialData,
            height: this.calcHeight(initialData),
            filter: props.filter
        }
    }

    componentDidMount() {
        this.fitParentContainer();
        window.addEventListener('resize', this.fitParentContainer);
    }

    componentWillUnmount() {
        window.addEventListener('resize', this.fitParentContainer);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.filter !== this.state.filter || nextProps.data !== this.state.data) {
            let data = nextProps.data.filter(weapon => nextProps.filter[weapon.type]);
            this.setState({
                filter: nextProps.filter,
                data: data,
                height: this.calcHeight(data)
            })
        }
    }

    calcHeight(data) {
        if(!data) return 800;
        let height = data.length * 50;
        return Math.max(height, 300);
    }

    fitParentContainer() {
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
            <label>Shots to Kill</label>
            <BarChart width={this.state.containerWidth} height={this.state.height} data={this.state.data} layout='vertical' margin={{top: 5, right: 30, left:20, bottom: 5}}>
                <Legend verticalAlign='top'>
                    <Label value="Shots to Kill" position='insideTop' />    
                </Legend>
                <XAxis type="number">
                    <Label value="Range (m)" position='insideBottom' offset={0} />
                </XAxis>
                <YAxis yAxisId="left" orientation="left" type="category" dataKey="name"/>
                <YAxis yAxisId="right" orientation="right" type="category" dataKey="rof" label={{value: 'Rate of Fire (RPM)', angle: 90, position: 'right'}} />
                <Tooltip  content={<WeaponTooltip />} />
                
                <Bar dataKey={'1'} yAxisId="left" stackId="1" fill="#3D2FA3" />
                <Bar dataKey={'2'} yAxisId="left" stackId="1" fill="#39A58A" />
                <Bar dataKey={'3'} yAxisId="left" stackId="1" fill="#B3E029" />
                <Bar dataKey={'4'} yAxisId="left" stackId="1" fill="#FFDB58" />
                <Bar dataKey={'5'} yAxisId="left" stackId="1" fill="#EC732B" />
                <Bar dataKey={'6'} yAxisId="left" stackId="1" fill="#BC419D" />
            </BarChart>
            </div>
        )
    }
}

export default StackedBarChart;