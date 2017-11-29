import React, { Component } from 'react';
import {Checkbox} from 'semantic-ui-react';
import StackedBarChart from './StackedBarChart';
import pistolData from '../pistolData';
import {processData, processHardcore} from './WeaponDataHelper';

const mainData = processData(pistolData);
const hardcoreData = processHardcore(mainData);

class PistolChart extends Component {
    state = {
        filter: {Pistol: true},
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

export default PistolChart;