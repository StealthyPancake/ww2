import React, { Component } from 'react';
import {Checkbox} from 'semantic-ui-react';
import StackedBarChart from './StackedBarChart';
import shotgunData from '../shotgunData';
import {processData, processHardcore} from './WeaponDataHelper';

const mainData = processData(shotgunData);
const hardcoreData = processHardcore(mainData);

class ShotgunChart extends Component {
    state = {
        filter: {Shotgun: true},
        data: mainData
    }

    toggleHardcore = () => {
        if(this.state.data === mainData) {
            this.setState({data: hardcoreData});
        } else {
            this.setState({data: mainData});
        }
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div style={{marginBottom: 10}}>
                    <label>Hardcore: </label>
                    <Checkbox toggle onClick={this.toggleHardcore} style={{marginLeft: 20}} />
                </div>
                <StackedBarChart filter={this.state.filter} data={this.state.data} height={400} />
            </div>
        )
    }
}

export default ShotgunChart;