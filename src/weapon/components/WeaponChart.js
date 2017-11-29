import React, { Component } from 'react';
import {Checkbox} from 'semantic-ui-react';
import StackedBarChart from './StackedBarChart';
import weaponData from '../weaponData';
import {processData, processHardcore} from './WeaponDataHelper';

const mainData = processData(weaponData);
const hardcoreData = processHardcore(mainData);

class WeaponChart extends Component {
    state = {
        data: mainData,
        
        filter: {
            Assault: true,
            SMG: true,
            LMG: true
        },
        hardcore: false
    }

    toggleFilter = (type) => {
        return () => {
            let filter = this.state.filter;
            filter[type] =!filter[type];
            this.setState({filter: {...filter}});
        }
    }

    toggleHardCore = () => {
        if(this.state.hardcore) {
            this.setState({hardcore: false, data: mainData});
        } else  {
            this.setState({hardcore: true, data: hardcoreData});
        }
        console.log(this.state.data);
    }

    toggleButton(type) {
        return <Checkbox toggle onClick={this.toggleFilter(type)} label={type} defaultChecked style={{marginLeft: 20}} className='green' />
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div style={{marginBottom: 10}}>
                    <label>Hardcore: </label>
                    <Checkbox toggle onClick={this.toggleHardCore} style={{marginLeft: 20}} className='green' />
                </div>
                <label>Toggle Weapon Types: </label>
                <div className='toggle-group' style={{marginBottom:20, textAlign: 'center', display: 'inline-block'}}>
                    {this.toggleButton('SMG')}
                    {this.toggleButton('Assault')}
                    {this.toggleButton('LMG')}
                </div>
                <StackedBarChart filter={this.state.filter} data={this.state.data} height={800} hardcore={this.state.hardcore} />
                
            </div>
        )
    }
}

export default WeaponChart;